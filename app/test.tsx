"use client";

import { useAuthenticated } from "@nhost/react";

export default function Test() {
  const isAuthenticated = useAuthenticated();

  return <>{isAuthenticated ? <h1>Yes</h1> : <h1>No</h1>}</>;
}
