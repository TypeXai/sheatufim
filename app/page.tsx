import { Suspense } from "react";
import { FullProposalRtlCustomFonts } from "@/components/full-proposal-rtl-custom-fonts";

// Add loading component
function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-slate-900"></div>
        <p className="mt-4 text-slate-600">טוען...</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <FullProposalRtlCustomFonts />
    </Suspense>
  );
}
