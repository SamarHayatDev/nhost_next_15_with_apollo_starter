"use client";

import { nhost } from "@/lib/nhost";
import { NhostProvider } from "@nhost/nextjs";

const NhostProviderContext = ({ children }: any) => {
  return <NhostProvider nhost={nhost}>{children}</NhostProvider>;
};

export default NhostProviderContext;
