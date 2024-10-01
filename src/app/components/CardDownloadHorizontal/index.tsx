"use client";

import Link from 'next/link';
import Image from 'next/image';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import GradientIcon from '@mui/icons-material/Gradient';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Fab, IconButton } from "@mui/material";
import TollIcon from '@mui/icons-material/Toll';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { NotificationContainer , NotificationManager} from 'react-notifications';
import Tooltip from '@mui/material/Tooltip';

// Components //
import styles from './CardDownloadHorizontal.module.css'
import { useEffect, useState } from 'react';


export interface CardDownloadHorizontalProps {
  codigo: number,
  dataUpload?: string,
  nome?: string,
  isLiked?: boolean,
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

interface CardDownloadHorizontalCompProps {
  dados: CardDownloadHorizontalProps,
  key: number,
  pesquisa?: string
}


export default function CardDownloadHorizontal(props: CardDownloadHorizontalCompProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLiked, setIsLiked] = useState<any>();

  useEffect(() => {
    if (props) {
      setIsLiked(props.dados?.isLiked);
    }
  }, [props])

  const handleClickLike = (codigo: number) => {
    if (!isLiked) {
      setIsLiked(true);
      NotificationManager.success('Curtiu!','Arquivo');
    } else {
      setIsLiked(false);
      NotificationManager.success('Deixou de Curtir!','Arquivo');
    }
  };

  function Icone({ cCategoria }: any) {
    switch (cCategoria) {
      case 1:
        return (
          <GraphicEqIcon sx={{ fontSize: '10vw', maxWidth: '120px', height: 'fit-content' }} />
        );
      case 2:
        return (
          <GradientIcon sx={{ fontSize: '10vw', maxWidth: '120px', height: 'fit-content' }} />
        );
      case 3:
        return (
          <ShowChartIcon sx={{ fontSize: '10vw', maxWidth: '120px', height: 'fit-content' }} />
        );
      case 4:
        return (
          <CreditCardIcon sx={{ transform: 'rotate(180deg)', fontSize: '10vw', maxWidth: '120px', height: 'fit-content' }} />
        );
      case 5:
        return (
          <TollIcon sx={{ fontSize: '10vw', maxWidth: '120px', height: 'fit-content' }} />
        );
      default:
        return (
          <TollIcon sx={{ fontSize: '10vw', maxWidth: '120px', height: 'fit-content' }} />
        );
    }
  }

  const voltarAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  const handleMenuClick = (codigo: number) => {
    router.push(`${pathname}/?cMenu=${searchParams.get('cMenu')}&cArquivo=${codigo}`, { scroll: false });
    voltarAoTopo();
  };

  return (
    <div className={styles.containerCollection} >
      <a style={{display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', padding: '8px 0'}}>
        <div className={styles.containerCollectionIcon} onClick={() => handleMenuClick(props.dados.codigo)}>
          <Icone cCategoria={props.dados.cCategoria} />
        </div>

        <div className={styles.containerCollectionContent} onClick={() => handleMenuClick(props.dados.codigo)}>
          <Tooltip title={props.dados.nome}>
            <h3 title={props.dados.nome} className={styles.titleCard}>
              {props.dados.nome}
            </h3>
          </Tooltip>
          <div className={styles.categoriaInfo}>
            {<div
              style={{
                display: 'flex',
                borderRadius: 50,
                backgroundColor: '#9d2053',
                color: '#fff',
                padding: '.4rem .5rem .3rem .5rem',
                width: 'fit-content',
                fontSize: 'small',
                fontWeight: 500,
                marginTop: '.5rem'
              }}
            >{props.dados.qtdArquivos}&nbsp; Arquivos</div>}

            {props.dados.nomePlataforma && <div
              style={{
                display: 'flex',
                borderRadius: 50,
                backgroundColor: '#9d2053',
                color: '#fff',
                padding: '.4rem .5rem .3rem .5rem',
                width: 'fit-content',
                fontSize: 'small',
                fontWeight: 500,
                marginTop: '.5rem',
                alignItems: 'center'
              }}
            >{props.dados.nomePlataforma}</div>}
          </div>
          <div className={styles.containerCollectionContentArticle}>
            <div className={styles.containerProfilePicsArticle}
              style={
                { display: "grid" }}
            >
              {
                props.dados?.dataUpload
              }
            </div>
          </div>
        </div>
      </a>
      <div className={styles.containerButtons}>
        <Fab
          onClick={() => handleClickLike(props.dados.codigo)}
          color="inherit"
          sx={!isLiked ? {
            '&:hover': {
              backgroundColor: '#9d2053',
              color: '#fff',
              fontWeight: 600,
              width: 'fit-content',
              padding: '.5rem 1rem'
            },
            fontSize: '14px',
            fontWeight: 600,
            gap: '1rem',
            backgroundColor: '#fff',
            border: '1px solid #9d2053',
            color: '#9d2053',
            justifyContent: 'center',
            boxShadow: 'none',
            borderRadius: '4px',
            height: '42px',
            zIndex: 'auto',
            width: 'fit-content',
            padding: '.5rem 1rem'
          } : {
            '&:hover': {
              backgroundColor: '#9d2053',
              color: '#fff',
              fontWeight: 600,
              width: 'fit-content',
              padding: '.5rem 1rem'
            },
            fontSize: '14px',
            fontWeight: 600,
            gap: '1rem',
            backgroundColor: '#9d2053',
            color: '#fff',
            justifyContent: 'center',
            boxShadow: 'none',
            borderRadius: '4px',
            height: '42px',
            zIndex: 'auto',
            width: 'fit-content',
            padding: '.5rem 1rem'
          }}
        >
          <ThumbUpAltIcon />
        </Fab>
        <Fab
          //onClick={() => handleClickVerMais(2)}
          color="inherit"
          sx={{
            '&:hover': {
              backgroundColor: '#9d2053',
              color: '#fff',
              fontWeight: 600,
              width: 'fit-content',
              padding: '.5rem 1rem'
            },
            fontSize: '14px',
            fontWeight: 600,
            gap: '1rem',
            backgroundColor: '#fff',
            border: '1px solid #9d2053',
            color: '#9d2053',
            justifyContent: 'center',
            boxShadow: 'none',
            borderRadius: '4px',
            height: '42px',
            zIndex: 'auto',
            width: 'fit-content',
            padding: '.5rem 1rem'
          }}
        >
          <FileDownloadRoundedIcon />
        </Fab>
      </div>
    </div>
  )
}
