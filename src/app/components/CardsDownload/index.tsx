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
import { NotificationContainer , NotificationManager} from 'react-notifications';
import Tooltip from '@mui/material/Tooltip';

interface CardsProps {
    codigo: number,
    dataUpload?: string,
    loginCriador?: string,
    isLiked?: boolean,
    isDownloaded?: boolean,
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
  const [isLiked, setIsLiked] = useState<any>(null);
  const [qtdLikes, setQtdLikes] = useState<any>(null);
  const [qtdDownloads, setQtdDownloads] = useState<any>(null);
  const [isDownloaded, setIsDownloaded] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
  }, [])

  useEffect(() => {
    if (props) {
      setIsLiked(props?.isLiked);
      setQtdLikes(props?.likes);
      setQtdDownloads(props?.qtdDownloads);
      setIsDownloaded(props?.isDownloaded);
    }
  }, [props])

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

  const handleClickLike = (codigo: number) => {
    if (!isLiked) {
      setIsLiked(true);
      setQtdLikes(qtdLikes+1);
      NotificationManager.success('Curtiu!','Arquivo');
    } else {
      setIsLiked(false);
      setQtdLikes(qtdLikes-1);
      NotificationManager.success('Deixou de Curtir!','Arquivo');
    }
  };

  const handleClickDownload = (codigo: number) => {
    if (!isDownloaded) {
      setQtdDownloads(qtdDownloads + 1);
    } else {
      setQtdDownloads(qtdDownloads - 1);
    }
  };

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
                  <Tooltip title={props.nome}>
                    <h3 >{props.nome}</h3>
                  </Tooltip>
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
                <button onClick={() => handleClickLike(props.codigo)}>
                  <ThumbUpAltIcon className={styles.icon} sx={isLiked ? {color: '#9d2053'} : {}}/>
                  <p >{qtdLikes}</p>
                </button>
                <button onClick={() => handleClickDownload(props.codigo)}>
                  <a href={`https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq`}>
                    <FileDownloadRoundedIcon 
                      className={styles.icon}
                    />
                      <p>{qtdDownloads}</p>
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
