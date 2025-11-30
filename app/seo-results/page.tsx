import { Suspense } from "react";
import SEOResultsClient from "./SEOResultsClient";

export const dynamic = "force-dynamic";

export default function SEOResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#3B82F6] mx-auto mb-4"></div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  ウェブサイトを解析中...
                </h1>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <SEOResultsClient />
    </Suspense>
  );
}
