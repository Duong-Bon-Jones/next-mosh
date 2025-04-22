import React from "react";

interface OptionalProductRouteProps {
  params: Promise<{
    optionalSlug?: string[];
  }>;
}

const OptionalProductRoute = async ({ params }: OptionalProductRouteProps) => {
  const { optionalSlug } = await params;
  return <div>OptionalProductRoute: {optionalSlug?.join(" => ")}</div>;
};

export default OptionalProductRoute;
