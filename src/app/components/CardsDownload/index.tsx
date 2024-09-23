// src/components/Loading.tsx

"use client";

import { useEffect, useState } from "react";
import styles from "./cardsDownload.module.css";
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import GradientIcon from '@mui/icons-material/Gradient';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface CardsProps {
    codigo: number,
    dataUpload?: string,
    loginCriador?: string,
    nome?: string,
    cCategoria?: number,
    categoriaNome?: string,
    nomePlataforma?: string,
    cPlataforma?: number,
    genero?: number,
    textura?: number,
    qtdArquivos?: number,
    likes?: number,
    qtdDownloads?: number,
    downloadURL?: string
}

export default function CardsDownload(props: CardsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [])

  const voltarAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Opcional: para um scroll suave
    });
  };

  const handleMenuClick = (codigo: number) => {
    router.push(`${pathname}/?cMenu=${searchParams.get('cMenu')}&cArquivo=${codigo}`, { scroll: false });
    voltarAoTopo();
  };

  function Icon({ codigo }: any) {
    switch (codigo) {
      case 1:
        return (
          <GraphicEqIcon sx={{color: '#fff'}}/>
        );
      case 2:
        return (
          <GradientIcon sx={{color: '#fff'}}/>
        );
      case 3:
        return (
          <ShowChartIcon sx={{color: '#fff'}}/>
        );
      case 4:
        return (
          <CreditCardIcon sx={{color: '#fff',transform: 'rotate(180deg)'}}/>
        );
      case 5:
        return (
          <GraphicEqIcon sx={{color: '#fff'}}/>
        );
      default:
        return (
          <GraphicEqIcon sx={{color: '#fff'}}/>
        );
    }
  }

  return (
    <>
      { isClient &&
        <main 
            className={styles.cardContainer}
        >
            <div className={styles.cardHeader}>
                <p style={{display: 'flex', alignItems: 'center', gap: '.5rem'}}><Icon codigo={props.cCategoria}/><b>{props.categoriaNome}</b></p>
                <p>{props.qtdArquivos} Arquivos</p>
            </div>

              <div className={styles.cardContent}
                onClick={() => handleMenuClick(props?.codigo)}
              >
                  <h3>{props.nome}</h3>
                  {props?.nomePlataforma !== '' && <div 
                      style={{
                          display: 'flex', 
                          borderRadius: 50, 
                          backgroundColor: '#9d2053', 
                          color: '#fff', 
                          padding: '.3rem .5rem',
                          width: 'fit-content', 
                          fontSize: '11px', 
                          marginTop: '.5rem'
                      }}
                  >{props.nomePlataforma}</div>}
              </div>

            <div className={styles.cardButtons}>
                <button><ThumbUpAltIcon className={styles.icon}/><p>{props.likes}</p></button>
                <button >
                  <a href={`https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq`}>
                    <FileDownloadRoundedIcon 
                      className={styles.icon}
                    />
                      <p>{props.qtdDownloads}</p>
                  </a>
                </button>
            </div>

            <div className={styles.cardFooter}>
                <p>{props.loginCriador}</p>
                <p>{props.dataUpload}</p>
            </div>
        </main>
      }
    </>
  );
}
