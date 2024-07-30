"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import Menu from "./components/Menu";
import Rodape from "./components/Rodape";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    if (searchParams.size === 0) {
      router.push(`${pathname}?cMenu=1`, { scroll: false })
    }

  }, [isClient, router]);

  if (!isClient) {
    return null;
  }

  const cMenu = searchParams.get('cMenu');

  interface PageInnerProps {
    cMenuUrl: number;
  }

  function PageInner({ cMenuUrl }:PageInnerProps) {
    switch (cMenuUrl) {
      case 1:
        return (
          <div className={styles.containerConteudo}>
            <h1>Home</h1>
          </div>
        );
      case 2:
        return (
          <div className={styles.containerConteudo}>
            <h1>Downloads</h1>
          </div>
        );
      case 3:
        return (
          <div className={styles.containerConteudo}>
            <h1>Comunidade</h1>
          </div>
        );
      case 4:
        return (
          <div className={styles.containerConteudo}>
            <h1>Recursos</h1>
          </div>
        );
      case 5:
        return (
          <div className={styles.containerConteudo}>
            <h1>Sobre</h1>
          </div>
        );
      case 6:
        return (
          <div className={styles.containerConteudo}>
            <h1>Contato</h1>
          </div>
        );
      default:
        return (
          <div className={styles.containerConteudo}>
            <h1>Página não encontrada</h1>
          </div>
        );
    }
  }

  return (
    <main className={styles.main} onClick={() => console.log(typeof cMenu)}>
      <Menu />
      { cMenu && <PageInner cMenuUrl={parseInt(cMenu)} />}
      <Rodape />
    </main>
  );
}
