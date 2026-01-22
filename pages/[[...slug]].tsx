import dynamic from 'next/dynamic';

// Force client-side rendering to keep behavior identical to the old Vite SPA.
const NextApp = dynamic(() => import('@/NextApp'), { ssr: false });

export default function CatchAllPage() {
  return <NextApp />;
}
