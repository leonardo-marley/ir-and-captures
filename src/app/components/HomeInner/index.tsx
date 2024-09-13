import { useState } from "react";
import styles from "./HomeInner.module.css";
import Caroussel  from "./../Caroussel/Index";
import CardsDownload from "../CardsDownload";
import Loading from "../Loading";
import { Button, Fab, styled } from "@mui/material";
import TextField from '@mui/material/TextField';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function HomeInner() {
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
      cPlataforma: 0,
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
    {
      codigo: 7,
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
    {
      codigo: 8,
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
    }
  ]
  const router = useRouter();
  const pathname = usePathname();
  const [arquivosRecentes, setArquivosRecentes] = useState<any[]>(cardArquivos);

  const handleClickVerMais = (codigo: number) => {
    router.push(`${pathname}?cMenu=${codigo}`, { scroll: false })
  };

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#000000',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E0E3E7',
      },
      '&:hover fieldset': {
        borderColor: '#B2BAC2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#341931',
      },
    },
    });
  
  return (
    <div className={styles.containerHome}>
      <Caroussel/>
      <div className={styles.containerCards}>

        <div className={styles.cardsHeader}>
          <h2>Últimos Arquivos</h2>
          <Fab
            onClick={() => handleClickVerMais(2)}
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
            Ver Mais
          </Fab>
        </div>

        <div className={styles.cardsDownloads}>
          { arquivosRecentes ?
              arquivosRecentes.map((item:any) => (
                <CardsDownload
                  key={item.codigo}
                  codigo={item.codigo}
                  dataUpload={item.dataUpload}
                  loginCriador={item.loginCriador}
                  nome={item.nome}
                  cCategoria={item.cCategoria}
                  categoriaNome={item.categoriaNome}
                  nomePlataforma={item.nomePlataforma}
                  cPlataforma={item.cPlataforma}
                  genero={item.genero}
                  textura={item.textura}
                  qtdArquivos={item.qtdArquivos}
                  likes={item.likes}
                  qtdDownloads={item.qtdDownloads}
                />
              ))
              :
              <Loading
                width={100}
                height={100}
              />
            }
        </div>
      </div>

      <div className={styles.containerSugestao}>
        <div className={styles.textoSugestao}>
          <h1>Queremos saber</h1>
          <h1>sua opinião!</h1>
          <h3>Seu anônimato é garantido.</h3>
        </div>

        <Image
          src={'/sugestao.png'}
          width={180}
          height={180}
          alt="Logo"
          className={styles.imgLogo}
        />

        <div className={styles.caixinha}>
          <p><b>Caixinha de Sugestões</b></p>
          <CssTextField
            id="outlined-multiline-static"
            label="Mensagem"
            multiline
            rows={3}
          />

          <Button
            //onClick={handleProfileMenuOpen}
            color="inherit"
            sx={{'&:hover': {
              backgroundColor: '#9d2053',
              border: '1px solid #9d2053',
              color: '#fff'
            }, 
              fontSize: '14px', 
              fontWeight: 600, 
              gap: '.5rem', 
              backgroundColor: '#fff',
              color: '#9d2053',
              border: '1px solid #9d2053'
              }}
          >
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
}