"use client";

import {useEffect} from "react";
import {initMewsDistributor} from "@/lib/mews";

export function MewsDistributor() {
  useEffect(() => {
    initMewsDistributor();
  }, []);

  return null;
}
