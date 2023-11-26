"use client";
import { useState, useEffect, Suspense } from "react";
let delay = 2000
const DelayedLoading = ({ delay }) => {
    const [ready, setReady] = useState(false);
    useEffect(() => {
      setTimeout(() => setReady(true), delay);
    }, []);
    return ready;
  };

const SmartLoader = ({ children }) => (
      <Suspense fallback={<DelayedLoading delay={1000} />}>{children}</Suspense>
);
export default DelayedLoading