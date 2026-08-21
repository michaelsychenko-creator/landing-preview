"use client";

import {useEffect} from "react";
import Script from "next/script";
import {initMewsDistributor} from "@/lib/mews";

const MEWS_DISTRIBUTOR_SRC = "https://api.mews.com/distributor/distributor.min.js";

export function MewsDistributor() {
  useEffect(() => {
    initMewsDistributor();
  }, []);

  return (
    <Script
      src={MEWS_DISTRIBUTOR_SRC}
      strategy="afterInteractive"
      onLoad={() => initMewsDistributor()}
    />
  );
}
