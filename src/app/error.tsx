"use client";

import React from "react";

const Error = ({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return <div>Error: {error.digest}</div>;
};

export default Error;
