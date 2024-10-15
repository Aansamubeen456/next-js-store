import React from 'react';
import { Skeleton } from '../ui/skeleton';

function LoadingTable({ rows = 5 }: { rows?: number }) {
  const rowTable = Array.from({ length: rows }, (_, index) => {
    return (
      <div key={index} className="mb-4">
        <Skeleton className="h-8 w-full rounded" />
      </div>
    );
  });
  return <>{rowTable}</>;
}

export default LoadingTable;
