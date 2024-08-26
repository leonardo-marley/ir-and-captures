// src/components/Loading.tsx

"use client";

import { useEffect, useState } from "react";
import styles from "./loading.module.css";

interface LoadingProps {
    width: number,
    height: number
}

export default function Loading(props: LoadingProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [])

  return (
    <>
      { isClient &&
        <main 
            className={styles.loadingContainer}
            style={{
                width: `${props.width}px`,
                height: `${props.height}px`
            }}
        >
            <div className={styles.ampulhetaContainer}>
                <div className={styles.ampulheta}>
                    <div className={styles.top}></div>
                    <div className={styles.bottom}></div>
                    <div className={styles.sand}></div>
                </div>
            </div>
            <div className={styles.loadingText}>
                Carregando<span className={styles.dot}>.</span>
                <span className={styles.dot}>.</span>
                <span className={styles.dot}>.</span>
            </div>
        </main>
      }
    </>
  );
}
