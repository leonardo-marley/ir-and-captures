"use client";

import { useState } from "react";
import styles from "./Perfil.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Fab, IconButton } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AddIcon from '@mui/icons-material/Add';
import TollIcon from '@mui/icons-material/Toll';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import GradientIcon from '@mui/icons-material/Gradient';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CardPerfil from "../CardPerfil";
import CardDownloadHorizontal from "../CardDownloadHorizontal";
import { NotificationContainer , NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

interface CardDownloadAbertoProps {
  codigo: number,
  isSeguindo: boolean,
  nome: string,
  urlDownload: string,
  qtdArquivos: number,
  cCategoria: number,
  dataCriacao: string,
  nomeCriador: string,
  imgPerfil?: string,
  descricao?: string,
  plataforma?: string, 
  genero?: string, 
  textura?: string
}

export default function Perfil() {
  const dadoMockado = {
    codigo: 1,
    isSeguindo: false,
    nome: 'start789',
    urlDownload: 'string',
    qtdArquivos: 12,
    cCategoria: 2,
    dataCriacao: '12/09/2024',
    nomeCriador: 'start894',
    imgPerfil: './Banner1.jpg',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
    plataforma: 'NAM', 
    genero: 'Rock', 
    textura: 'Dry'
  }

  const cardArquivos: any = [
    {
      codigo: 1,
      dataUpload: '08/09/2024',
      loginCriador: 'start789',
      nome: 'Vintage Monster Tube Overdrive VT999',
      cCategoria: 2,
      categoriaNome: 'Pedal',
      nomePlataforma: 'NAM',
      cPlataforma: 2,
      genero: 1,
      textura: 2,
      qtdArquivos: 5,
      likes: 12,
      qtdDownloads: 7,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 2,
      dataUpload: '18/07/2024',
      loginCriador: 'cleitinho',
      nome: 'Vintage Monster Tube Overdrive VT999',
      cCategoria: 3,
      categoriaNome: 'IRs',
      nomePlataforma: '',
      cPlataforma: -1,
      genero: 2,
      textura: 3,
      qtdArquivos: 15,
      likes: 22,
      qtdDownloads: 17,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 3,
      dataUpload: '23/07/2024',
      loginCriador: 'scoob',
      nome: 'Crate GX-65 (Palmer Macht402 Power Amp)',
      cCategoria: 4,
      categoriaNome: 'Amps',
      nomePlataforma: 'PROTEUS',
      cPlataforma: 3,
      genero: 3,
      textura: 4,
      qtdArquivos: 16,
      likes: 15,
      qtdDownloads: 11,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 4,
      dataUpload: '11/09/2024',
      loginCriador: 'start789',
      nome: 'Browne Dual Protein Overdrive',
      cCategoria: 2,
      categoriaNome: 'Pedal',
      nomePlataforma: 'AIDA-X',
      cPlataforma: 1,
      genero: 1,
      textura: 2,
      qtdArquivos: 9,
      likes: 17,
      qtdDownloads: 12,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 5,
      dataUpload: '08/09/2024',
      loginCriador: 'start789',
      nome: 'Vintage Monster Tube Overdrive VT999',
      cCategoria: 2,
      categoriaNome: 'Pedal',
      nomePlataforma: 'NAM',
      cPlataforma: 2,
      genero: 1,
      textura: 2,
      qtdArquivos: 5,
      likes: 2,
      qtdDownloads: 7,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    {
      codigo: 6,
      dataUpload: '10/09/2024',
      loginCriador: 'yure',
      nome: 'youtube Overdrive VT99900000',
      cCategoria: 3,
      categoriaNome: 'IRs',
      nomePlataforma: 'NAM',
      cPlataforma: 2,
      genero: 1,
      textura: 2,
      qtdArquivos: 5,
      likes: 2,
      qtdDownloads: 7,
      downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    },
    // {
    //   codigo: 7,
    //   dataUpload: '10/09/2024',
    //   loginCriador: 'yure',
    //   nome: 'youtube Overdrive VT99900000',
    //   cCategoria: 3,
    //   categoriaNome: 'IRs',
    //   nomePlataforma: 'NAM',
    //   cPlataforma: 2,
    //   genero: 1,
    //   textura: 2,
    //   qtdArquivos: 5,
    //   likes: 2,
    //   qtdDownloads: 7,
    //   downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    // },
    // {
    //   codigo: 8,
    //   dataUpload: '10/09/2024',
    //   loginCriador: 'yure',
    //   nome: 'youtube Overdrive VT99900000',
    //   cCategoria: 3,
    //   categoriaNome: 'IRs',
    //   nomePlataforma: 'NAM',
    //   cPlataforma: 2,
    //   genero: 1,
    //   textura: 2,
    //   qtdArquivos: 5,
    //   likes: 2,
    //   qtdDownloads: 7,
    //   downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    // },
    // {
    //   codigo: 9,
    //   dataUpload: '10/09/2024',
    //   loginCriador: 'yure',
    //   nome: 'youtube Overdrive VT99900000',
    //   cCategoria: 3,
    //   categoriaNome: 'IRs',
    //   nomePlataforma: 'NAM',
    //   cPlataforma: 2,
    //   genero: 1,
    //   textura: 2,
    //   qtdArquivos: 5,
    //   likes: 2,
    //   qtdDownloads: 7,
    //   downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    // },
    // {
    //   codigo: 10,
    //   dataUpload: '10/09/2024',
    //   loginCriador: 'yure',
    //   nome: 'youtube Overdrive VT99900000',
    //   cCategoria: 3,
    //   categoriaNome: 'IRs',
    //   nomePlataforma: 'NAM',
    //   cPlataforma: 2,
    //   genero: 1,
    //   textura: 2,
    //   qtdArquivos: 5,
    //   likes: 2,
    //   qtdDownloads: 7,
    //   downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    // },
    // {
    //   codigo: 11,
    //   dataUpload: '10/09/2024',
    //   loginCriador: 'yure',
    //   nome: 'youtube Overdrive VT99900000',
    //   cCategoria: 3,
    //   categoriaNome: 'IRs',
    //   nomePlataforma: 'NAM',
    //   cPlataforma: 2,
    //   genero: 1,
    //   textura: 2,
    //   qtdArquivos: 5,
    //   likes: 2,
    //   qtdDownloads: 7,
    //   downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    // },
    // {
    //   codigo: 12,
    //   dataUpload: '10/09/2024',
    //   loginCriador: 'yure',
    //   nome: 'youtube Overdrive VT99900000',
    //   cCategoria: 3,
    //   categoriaNome: 'IRs',
    //   nomePlataforma: 'NAM',
    //   cPlataforma: 2,
    //   genero: 1,
    //   textura: 2,
    //   qtdArquivos: 5,
    //   likes: 2,
    //   qtdDownloads: 7,
    //   downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    // },
    // {
    //   codigo: 13,
    //   dataUpload: '10/09/2024',
    //   loginCriador: 'yure',
    //   nome: 'youtube Overdrive VT99900000',
    //   cCategoria: 3,
    //   categoriaNome: 'IRs',
    //   nomePlataforma: 'NAM',
    //   cPlataforma: 2,
    //   genero: 1,
    //   textura: 2,
    //   qtdArquivos: 5,
    //   likes: 2,
    //   qtdDownloads: 7,
    //   downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    // },
    // {
    //   codigo: 14,
    //   dataUpload: '10/09/2024',
    //   loginCriador: 'yure',
    //   nome: 'youtube Overdrive VT99900000',
    //   cCategoria: 3,
    //   categoriaNome: 'IRs',
    //   nomePlataforma: 'NAM',
    //   cPlataforma: 2,
    //   genero: 1,
    //   textura: 2,
    //   qtdArquivos: 5,
    //   likes: 2,
    //   qtdDownloads: 7,
    //   downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    // },
    // {
    //   codigo: 15,
    //   dataUpload: '10/09/2024',
    //   loginCriador: 'yure',
    //   nome: 'youtube Overdrive VT99900000',
    //   cCategoria: 3,
    //   categoriaNome: 'IRs',
    //   nomePlataforma: 'NAM',
    //   cPlataforma: 2,
    //   genero: 1,
    //   textura: 2,
    //   qtdArquivos: 5,
    //   likes: 2,
    //   qtdDownloads: 7,
    //   downloadURL: "https://drive.google.com/uc?export=download&id=197RRsKjPCR5jYNFBFPsSDABme2Ryk-aq"
    // },
  ]
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentUrl = typeof window !== 'undefined' ? window.location.host : '';
  const [dadosPerfil,setDadosPerfil] = useState<CardDownloadAbertoProps>(dadoMockado);
  const [statusConexao,setStatusConexao] = useState<boolean>(dadoMockado?.isSeguindo);
  const [arquivosUser, setArquivosUser] = useState(cardArquivos);

  const cMenu = searchParams.get('cMenu');
  const perfil = searchParams.get('perfil');

  const voltarAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Opcional: para um scroll suave
    });
  };

  const handleMenuClick = () => {
    router.back();
  };

  const handleVerTodosArtigos = () => {
    router.push(`${pathname}?cMenu=${cMenu}&pesquisa=${perfil}`, { scroll: false });
    voltarAoTopo();
  };

  const handleSeguir = () => {
    if (statusConexao){
      NotificationManager.success('Deixou de Seguir!', 'Perfil');
    } else {
      NotificationManager.success('Seguindo!', 'Perfil');
    }
    setStatusConexao(!statusConexao);
  };

  return (
    <div className={styles.containerCardAberto}>
      <div className={styles.containerInfo}>
        <div className={styles.headerInfo}>
          <div>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => handleMenuClick()}
            >
              <ArrowBackIcon fontSize="large" />
            </IconButton>
          </div>

          <div className={styles.buttonsInfo}>
            <Fab
              onClick={handleSeguir}
              color="inherit"
              sx={!statusConexao ? {
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
              {!statusConexao ? 'Seguir' : 'Seguindo'}{!statusConexao && <AddIcon />}
            </Fab>
          </div>
        </div>

        <div className={styles.nomeInfo}>
          <div style={{padding: '1rem'}}>
            <CardPerfil 
              nome={dadosPerfil?.nome} 
              urlImagem={dadosPerfil?.imgPerfil}
              isPerfil
            />
          </div>
        </div>

        <div className={styles.categoriaInfo}>
          {
            <IconButton
              size="large"
              color="inherit"
            >
              <InstagramIcon fontSize="large"/>
            </IconButton>
          }

          {<IconButton
              size="large"
              color="inherit"
            >
              <YouTubeIcon fontSize="large"/>
            </IconButton>}
        </div>

        <p style={{ fontSize: 'large', padding: '0 2rem' }}><b>Sobre</b></p>
        <p style={{ fontSize: 'large', padding: '0 2rem' }}>{dadosPerfil?.descricao}</p>
      </div>

      <div className={styles.containerDescricao}>
        <p style={{ fontSize: 'large' }}><b>Arquivos({arquivosUser?.length > 0 && arquivosUser?.length})</b></p>
        <div className={styles.containerCardsDownload} style={ arquivosUser?.length === 0 ? 
            {display: 'grid', gap: '.5rem', width: '100%', justifyContent: 'center'}
          :
            {display: 'grid', gap: '.5rem', gridTemplateRows: '1fr 1fr 1fr 1fr', overflowY: 'hidden'}}>
          {arquivosUser?.length > 0 ?
            arquivosUser?.slice(0, 4).map((item:any) => (
              <div onClick={() => {console.log('Click')}}>
                <CardDownloadHorizontal
                  dados={item}
                  key={item.codigo}
                />
              </div>
            ))
            :
            <p style={{display: 'flex',width: '100%', textAlign: 'center'}}><b>Nenhum arquivo enviado.</b></p>
          }
        </div>

        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
          <Fab
            onClick={() => handleVerTodosArtigos()}
            color="inherit"
            sx={{'&:hover': {
              backgroundColor: '#9d2053',
              color: '#fff',
              fontWeight: 600,
              width: 'fit-content',
              padding: '.5rem 2rem'
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
              padding: '.5rem 2rem'
              }}
          >
            Ver Todos
          </Fab>
        </div>

        <p style={{ fontSize: 'large' }}><b>Seguidores</b></p>
        <div style={{display: 'flex', gap: '.5rem'}}>
          <CardPerfil nome={'Yauro'} urlImagem={'dadosArquivo?.imgPerfilCriador'}/>
          <CardPerfil nome={'Romanel'} urlImagem={'dadosArquivo?.imgPerfilCriador'}/>
        </div>
        <p style={{ fontSize: 'large' }}><b>Seguindo</b></p>
        <div style={{display: 'flex', gap: '.5rem'}}>
          <CardPerfil nome={'Yauro'} urlImagem={'dadosArquivo?.imgPerfilCriador'}/>
          <CardPerfil nome={'Romanel'} urlImagem={'dadosArquivo?.imgPerfilCriador'}/>
        </div>
      </div>

      <NotificationContainer /> 
    </div>
  );
}