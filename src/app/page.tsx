"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Menu from "./components/Menu";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [])

  return (
    <>
      { isClient &&
        <main className={styles.main}>
          <Menu />
          <div className={styles.painel}>
          </div>
        </main>
      }
    </>
  );
}
