"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import Menu from "./components/Menu";
import Rodape from "./components/Rodape";
import TextField from '@mui/material/TextField';
import { styled } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Loading from "./components/Loading";

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

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
  }

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
            <div className={styles.containerHome}>
              <h1>Home</h1>
              <Loading 
                width={100}
                height={100}
              />
            </div>
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
            <h1>Sobre</h1>
          </div>
        );
      case 5:
        return (
          <div className={styles.containerConteudo}>
            <div className={styles.containerContato}>
              <div className={styles.containerForm}>
                <h1 style={{marginBottom: '1rem', color: '#000000' }}>Contate-nos</h1>
                <CssTextField
                  required
                  id="outlined-required"
                  label="Nome"
                />
                <CssTextField
                  required
                  id="outlined-required"
                  label="E-mail"
                />
                <CssTextField
                  id="outlined-multiline-static"
                  label="Mensagem"
                  multiline
                  rows={5}
                />
                <LoadingButton
                  onClick={handleClick}
                  endIcon={<SendIcon />}
                  loading={loading}
                  loadingPosition="end"
                  variant="contained"
                  sx={{backgroundColor: '#9d2053','&:hover': {
                    backgroundColor: '#341931',
                  }}}
                >
                  <span>Enviar</span>
                </LoadingButton>
              </div>

              <Image
                src={'/imgContato.png'}
                width={450}
                height={450}
                alt="Logo"
                className={styles.imgContato}
              />
            </div>
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
