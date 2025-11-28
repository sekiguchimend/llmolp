# Firecrawl Integration Guide

## Overview

This application integrates with a self-hosted Firecrawl instance to provide AI-powered SEO analysis. When users enter their company website URL, the system crawls the website and provides detailed SEO insights.

## Features

- **Website Crawling**: Automatically crawls up to 10 pages from the submitted website
- **SEO Analysis**: Analyzes page titles, meta descriptions, and content quality
- **Real-time Progress**: Shows crawl progress with a loading indicator
- **Detailed Results**: Displays comprehensive SEO scores and page-by-page analysis

## Architecture

### Components

1. **HeroSection** (`components/HeroSection.tsx`)
   - Client-side form component
   - Handles URL input and validation
   - Initiates crawl process
   - Redirects to results page

2. **API Routes**
   - `/api/seo-check` (POST): Starts a crawl job
   - `/api/seo-check/status` (GET): Polls for crawl status

3. **Results Page** (`app/seo-results/page.tsx`)
   - Displays crawl progress
   - Shows SEO analysis results
   - Provides page-by-page breakdown

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Self-hosted Firecrawl instance
FIRECRAWL_BASE_URL=http://43.206.139.47:3002

# Optional: API key (not required for self-hosted)
# FIRECRAWL_API_KEY=fc-your-api-key-here
```

### Firecrawl Detection

The application automatically detects if you're using:
- Self-hosted Firecrawl (when `FIRECRAWL_BASE_URL` is set to a custom URL)
- Cloud Firecrawl (when using default URL with API key)

## API Workflow

### 1. Start Crawl

**Endpoint**: `POST /api/seo-check`

**Request**:
```json
{
  "url": "https://example.com"
}
```

**Response**:
```json
{
  "success": true,
  "jobId": "abc-123-def",
  "message": "クロール処理を開始しました"
}
```

### 2. Check Status

**Endpoint**: `GET /api/seo-check/status?jobId=abc-123-def`

**Response** (in progress):
```json
{
  "status": "scraping",
  "data": [],
  "total": 10,
  "completed": 3,
  "creditsUsed": 3
}
```

**Response** (completed):
```json
{
  "status": "completed",
  "data": [
    {
      "url": "https://example.com",
      "title": "Home Page",
      "content": "...",
      "metadata": {
        "title": "Home Page",
        "description": "Welcome to our website",
        "statusCode": 200
      }
    }
  ],
  "total": 10,
  "completed": 10,
  "creditsUsed": 10
}
```

## Firecrawl API Usage

### Single Page Scraping (v0/scrape)

```typescript
const response = await fetch(`${FIRECRAWL_BASE_URL}/v0/scrape`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    ...(API_KEY ? { 'Authorization': `Bearer ${API_KEY}` } : {})
  },
  body: JSON.stringify({
    url: 'https://example.com',
    pageOptions: {
      onlyMainContent: true,
      includeHtml: false,
    }
  })
});
```

### Multi-Page Crawling (v1/crawl)

```typescript
// Start crawl
const crawlRes = await fetch(`${FIRECRAWL_BASE_URL}/v1/crawl`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    ...(API_KEY ? { 'Authorization': `Bearer ${API_KEY}` } : {})
  },
  body: JSON.stringify({
    url: 'https://example.com',
    limit: 10,
    scrapeOptions: {
      formats: ['markdown'],
      onlyMainContent: true,
    }
  })
});

const { id: jobId } = await crawlRes.json();

// Poll for status
const statusRes = await fetch(`${FIRECRAWL_BASE_URL}/v1/crawl/${jobId}`, {
  headers: {
    ...(API_KEY ? { 'Authorization': `Bearer ${API_KEY}` } : {})
  }
});

const statusData = await statusRes.json();
```

## SEO Scoring Algorithm

The application calculates an SEO score (0-100) based on:

1. **Title Tags** (35 points)
   - Percentage of pages with proper title tags
   
2. **Meta Descriptions** (35 points)
   - Percentage of pages with meta descriptions
   
3. **Content Quality** (30 points)
   - Percentage of pages with substantial content (>100 characters)

### Score Interpretation

- **80-100**: Excellent SEO implementation
- **60-79**: Good, but room for improvement
- **0-59**: Needs significant SEO work

## User Flow

1. User enters website URL in hero section
2. Clicks "AI SEOスコアをチェック" button
3. System validates URL and starts crawl job
4. User is redirected to results page with job ID
5. Results page polls for status every 5 seconds
6. Progress bar shows crawl completion
7. Once completed, full analysis is displayed
8. User can review:
   - Overall SEO score
   - Page count
   - Title/description/content coverage
   - Individual page analysis

## Testing

### Test Firecrawl Connection

```bash
# Health check
curl http://43.206.139.47:3002/v0/health/liveness

# Test scrape
curl -X POST http://43.206.139.47:3002/v0/scrape \
  -H 'Content-Type: application/json' \
  -d '{"url": "https://example.com"}'
```

### Test API Endpoints

```bash
# Start crawl
curl -X POST http://localhost:3000/api/seo-check \
  -H 'Content-Type: application/json' \
  -d '{"url": "https://example.com"}'

# Check status
curl http://localhost:3000/api/seo-check/status?jobId=abc-123
```

## Error Handling

The application handles various error scenarios:

1. **Invalid URL**: Shows validation error in form
2. **Firecrawl not configured**: Returns 503 error
3. **Crawl failed**: Shows failure message on results page
4. **Network errors**: Displays user-friendly error messages

## Development

### Running Locally

```bash
# Install dependencies
npm install

# Set up environment
cp .env.local.example .env.local
# Edit .env.local with your Firecrawl URL

# Run development server
npm run dev
```

### Building for Production

```bash
# Build
npm run build

# Start production server
npm start
```

## Files Reference

- `components/HeroSection.tsx` - Main form component
- `app/api/seo-check/route.ts` - Start crawl endpoint
- `app/api/seo-check/status/route.ts` - Status polling endpoint
- `app/seo-results/page.tsx` - Results display page
- `app/page.tsx` - Home page (uses HeroSection)
- `.env.local.example` - Environment configuration template

## Limitations

- Currently crawls up to 10 pages per website
- Polls every 5 seconds for status updates
- Maximum wait time: 5 minutes (60 attempts)
- Self-hosted Firecrawl must be accessible from the application

## Future Enhancements

- [ ] Add more SEO metrics (keywords, images, links)
- [ ] Support deeper crawls (more pages)
- [ ] Export results as PDF
- [ ] Compare multiple websites
- [ ] Historical tracking of SEO scores
- [ ] AI-powered improvement suggestions

