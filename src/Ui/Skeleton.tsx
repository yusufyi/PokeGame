import React from "react";
import { Skeleton, Card } from "@nextui-org/react";

export const SkeletonList = () => {
  return (
    <Card className="space-y-5 p-4 " radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-3 rounded-lg bg-default-200"></div>
      </Skeleton>
    </Card>
  );
};
