// src/app/not-found.tsx
import Link from 'next/link';
import { Suspense } from 'react';

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-4xl font-bold">Page Not Found</h2>
        <p>Could not find the requested resource on HH Consulting.</p>
        <Link href="/" className="text-blue-600 underline mt-4">
          Return Home
        </Link>
      </div>
    </Suspense>
  );
}