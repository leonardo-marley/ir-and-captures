import { useState } from "react";
import styles from "./ContatoInner.module.css";
import TextField from '@mui/material/TextField';
import { Button, styled } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Image from "next/image";

export default function ContatoInner() {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
  }

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
  );
}