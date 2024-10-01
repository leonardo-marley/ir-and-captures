import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface CardPerfilProps {
  nome: string,
  urlImagem?: string,
  isPerfil?: boolean
}

export default function CardPerfil(props: CardPerfilProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePerfilClick = (nome: string) => {
    router.push(`${pathname}/?cMenu=${searchParams.get('cMenu')}&perfil=${nome}`, { scroll: false });
    voltarAoTopo();
  };

  const voltarAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Opcional: para um scroll suave
    });
  };

  return (
    <Stack direction="row" spacing={1} >
        <div onClick={() => handlePerfilClick(props.nome)}>
          <Chip
            avatar={
              <Avatar 
                alt={props.nome} 
                src={props.urlImagem} 
                style={!props.isPerfil ? {
                  width: '50px',
                  height: '50px',
                  fontSize:'28px',
                  backgroundColor: '#341931',
                  color: '#fff',
                  borderRadius: '4px'
                }:{
                  width: '13vw',
                  maxWidth: '160px',
                  minWidth: '160px',
                  height: '13vw',
                  maxHeight: '160px',
                  minHeight: '160px',
                  fontSize:'28px',
                  backgroundColor: '#341931',
                  color: '#fff',
                  borderRadius: '4px'
                }}
              />
            }
            label={props.nome}
            variant="outlined"
            sx={!props.isPerfil ? {
              minWidth: '140px',
              width: 'fit-content',
              height: '70px',
              borderRadius: '4px',
              fontSize:'large',
              borderColor: '#341931',
              cursor: 'pointer',
              justifyContent: 'space-between',
              padding: '.5rem',
              '&:hover': {
                borderColor: '#9d2053',
                backgroundColor: '#9d205340'
              }
            }: {
              display: 'grid',
              minWidth: '140px',
              width: '100%',
              height: '70px',
              borderRadius: '4px',
              fontSize: '2em',
              fontWeight: 'bold', 
              lineHeight: 1.2, 
              marginTop: '-3rem', 
              border: 'none',
              alignItems: 'center',
              justifyItems: 'center',
              justifyContent: 'center',
              gap: '2rem'
            }}
          />
        </div>
    </Stack>
  );
}