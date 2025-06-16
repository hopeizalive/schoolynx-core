import { Suspense } from 'react';
import Loading from '../loading';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen">
        {children}
      </div>
    </Suspense>
  );
} 