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
import Perfil from "./components/Perfil";
import Loading from "./components/Loading";
import { NotificationContainer , NotificationManager} from 'react-notifications';

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
    if (!isClient) return; // Aguarda o componente ser montado

    const pesquisa = searchParams.get('pesquisa');
    const cMenu = searchParams.get('cMenu');
    console.log('Parâmetros:',cMenu , pesquisa)

    if (cMenu === null) {
      // Se cMenu não está presente, redireciona para cMenu=1
      router.push(`${pathname}?cMenu=1`, { scroll: false });
    } else if (pesquisa) {
      // Se pesquisa está presente, redireciona com cMenu=2
      router.push(`${pathname}?cMenu=2&pesquisa=${pesquisa}`, { scroll: false });
    }
  }, [searchParams, router, pathname, isClient]);

  if (!isClient) {
    return null;
  }

  const cMenu = searchParams.get('cMenu');
  const cArquivo = searchParams.get('cArquivo');
  const pesquisa = searchParams.get('pesquisa');
  const perfil = searchParams.get('perfil');

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
      { (cMenu && !cArquivo && !perfil) ?
          <PageInner cMenuUrl={parseInt(cMenu)} />
        :
          (cMenu && cArquivo) ?
            <CardDownloadAberto />
          : 
            (cMenu && perfil) ? 
              <Perfil />
            :
              <div 
                style={{
                  display: 'flex',
                  width: '100vw',
                  height: '60vh',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Loading
                  width={100}
                  height={100}
                />
              </div>
      }
      <Rodape />
      <NotificationContainer /> 
    </main>
  );
}
