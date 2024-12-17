"use client";

import { useAuthenticated } from "@nhost/react";

export default function Test() {
  const isAuthenticated = useAuthenticated();

  return <>{isAuthenticated ? <h1>Authenticated</h1> : <h1>Not</h1>}</>;
}
