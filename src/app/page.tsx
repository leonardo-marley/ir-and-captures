"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import Menu from "./components/Menu";
import Rodape from "./components/Rodape";
import HomeInner  from "./components/HomeInner/index";
import DownloadInner from "./components/DownloadInner";
import ComunidadeInner from "./components/ComunidadeInner";
import SobreInner from "./components/SobreInner";
import ContatoInner from "./components/ContatoInner";
import CardDownloadAberto from "./components/CardDownloadAberto";

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
  const cArquivo = searchParams.get('cArquivo');
  const pesquisa = searchParams.get('pesquisa');

  interface PageInnerProps {
    cMenuUrl: number;
  }

  function PageInner({ cMenuUrl }:PageInnerProps) {
    switch (cMenuUrl) {
      case 1:
        return (
          <div className={styles.containerConteudo}>
            <HomeInner />
          </div>
        );
      case 2:
        return (
          <div className={styles.containerConteudo}>
            <DownloadInner pesquisa={pesquisa?.toString()}/>
          </div>
        );
      case 3:
        return (
          <div className={styles.containerConteudo}>
            <ComunidadeInner />
          </div>
        );
      case 4:
        return (
          <SobreInner />
        );
      case 5:
        return (
          <div className={styles.containerConteudo}>
            <ContatoInner />
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
    <main className={styles.main} >
      <Menu />
      { (cMenu && !pesquisa && !cArquivo) ?
          <PageInner cMenuUrl={parseInt(cMenu)} />
        :
          pesquisa ? 
            <PageInner cMenuUrl={2} />
          :
          cMenu && <CardDownloadAberto />
      }
      <Rodape />
    </main>
  );
}
