import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

function Loading() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-4">
      <LoadingCard />
      <LoadingCard />
    </div>
  );
}

const LoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <Skeleton className="w-[150px] h-4 mb-2" />
            <Skeleton className="w-[150px] h-4 " />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div></div>
      </CardContent>
    </Card>
  );
};
export default Loading;
