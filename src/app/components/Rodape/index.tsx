"use client";

import Image from "next/image";
import styles from "./rodape.module.css";
import { useEffect, useState } from "react";

export default function Rodape() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [])

  return (
    <>
      { isClient &&
        <main className={styles.main}>
          <h1>Rodapé</h1>
        </main>
      }
    </>
  );
}
