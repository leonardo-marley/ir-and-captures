"use client";

import { useState } from "react";
import styles from "./CardDownloadAberto.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Fab, IconButton } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import LinkIcon from '@mui/icons-material/Link';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import TollIcon from '@mui/icons-material/Toll';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import GradientIcon from '@mui/icons-material/Gradient';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CardPerfil from "../CardPerfil";
import CardTags from "../CardTags";
import { NotificationContainer , NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

interface CardDownloadAbertoProps {
  codigo: number,
  isLiked: boolean,
  nome: string,
  urlDownload: string,
  qtdArquivos: number,
  cCategoria: number,
  dataCriacao: string,
  nomeCriador: string,
  imgPerfilCriador?: string,
  descricao?: string,
  plataforma?: string, 
  genero?: string, 
  textura?: string
}

export default function CardDownloadAberto() {
  const dadoMockado = {
    codigo: 1,
    isLiked: true,
    nome: 'Vintage Monster Tube Overdrive VT999',
    urlDownload: 'string',
    qtdArquivos: 12,
    cCategoria: 2,
    dataCriacao: '12/09/2024',
    nomeCriador: 'start789',
    imgPerfilCriador: './Banner1.jpg',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
    plataforma: 'NAM', 
    genero: 'Rock', 
    textura: 'Dry'
  }
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentUrl = typeof window !== 'undefined' ? window.location.host : '';
  const [dadosArquivo,setDadosArquivo] = useState<CardDownloadAbertoProps>(dadoMockado);

  const cMenu = searchParams.get('cMenu');

  const handleMenuClick = (codigo: string | null) => {
    router.push(`${pathname}?cMenu=${codigo}`, { scroll: false })
  };

  function Icone({ cCategoria }: any) {
    switch (cCategoria) {
      case 1:
        return (
          <GraphicEqIcon sx={{ fontSize: '13vw', maxWidth: '160px' }} />
        );
      case 2:
        return (
          <GradientIcon sx={{ fontSize: '13vw', maxWidth: '160px' }} />
        );
      case 3:
        return (
          <ShowChartIcon sx={{ fontSize: '13vw', maxWidth: '160px' }} />
        );
      case 4:
        return (
          <CreditCardIcon sx={{ transform: 'rotate(180deg)', fontSize: '13vw', maxWidth: '160px' }} />
        );
      case 5:
        return (
          <TollIcon sx={{ fontSize: '13vw', maxWidth: '160px' }} />
        );
      default:
        return (
          <TollIcon sx={{ fontSize: '13vw', maxWidth: '160px' }} />
        );
    }
  }

  const copyUrlToClipboard = () => {
    const params = new URLSearchParams(searchParams);

    if (navigator.clipboard && currentUrl) {
      navigator.clipboard.writeText(`${currentUrl}`+`${pathname}?${params.toString()}`).then(() => {
        NotificationManager.success('Link Copiado!', 'Arquivo');
      }, (err) => {
        console.error('Falha ao copiar a URL: ', err);
      });
    }
  };

  return (
    <div className={styles.containerCardAberto}>
      <div className={styles.containerInfo}>
        <div className={styles.headerInfo}>
          <div>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => handleMenuClick(cMenu)}
            >
              <ArrowBackIcon fontSize="large" />
            </IconButton>
          </div>

          <div className={styles.buttonsInfo}>
            <Fab
              //onClick={() => handleClickVerMais(2)}
              color="inherit"
              sx={!dadosArquivo?.isLiked ? {
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
                //border: '1px solid #9d2053',
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
                //border: '1px solid #9d2053',
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
                //border: '1px solid #9d2053',
                borderRadius: '4px',
                height: '42px',
                zIndex: 'auto',
                width: 'fit-content',
                padding: '.5rem 1rem'
              }}
            >
              <FileDownloadRoundedIcon />
            </Fab>
            <Fab
              onClick={copyUrlToClipboard}
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
                //border: '1px solid #9d2053',
                borderRadius: '4px',
                height: '42px',
                zIndex: 'auto',
                width: 'fit-content',
                padding: '.5rem 1rem'
              }}
            >
              <LinkIcon sx={{ transform: 'rotate(45deg)' }} />
            </Fab>
          </div>
        </div>

        <div className={styles.nomeInfo}>
          <Icone cCategoria={dadosArquivo?.cCategoria} />
          <h1>{dadosArquivo?.nome}</h1>
        </div>

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
          >{dadosArquivo?.qtdArquivos}&nbsp; Arquivos</div>}

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
              marginTop: '.5rem',
              alignItems: 'center'
            }}
          >{dadosArquivo?.plataforma}</div>}
        </div>

        <p style={{padding: '1rem 2rem'}}>{dadosArquivo?.dataCriacao}</p>

        <div style={{padding: '0 2rem'}}>
          <CardPerfil nome={dadosArquivo?.nomeCriador} urlImagem={dadosArquivo?.imgPerfilCriador}/>
        </div>
      </div>

      <div className={styles.containerDescricao}>
        <p style={{ fontSize: 'large' }}><b>Descrição</b></p>
        <p>{dadosArquivo?.descricao}</p>
        <p style={{ fontSize: 'large' }}><b>Tags</b></p>
        <div style={{display: 'flex', gap: '.5rem'}}>
          <CardTags nome={dadosArquivo?.textura}/>
          <CardTags nome={dadosArquivo?.genero}/>
        </div>
        <p style={{ fontSize: 'large' }}><b>Lincença</b></p>
        <p ><b>IR and Captures:</b>&nbsp;&nbsp;Você pode baixar e carregar o arquivo de dados no software, além de usar ou publicar os resultados gerados por ele, sem precisar pagar nada. No entanto, não é permitido enviar, republicar ou distribuir o arquivo de dados sem a permissão expressa do autor.</p>
      </div>

      <NotificationContainer /> 
    </div>
  );
}