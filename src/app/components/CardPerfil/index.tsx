import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface CardPerfilProps {
  nome: string,
  urlImagem?: string
}

export default function CardPerfil(props: CardPerfilProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePerfilClick = (nome: string) => {
    router.push(`${pathname}/?cMenu=${searchParams.get('cMenu')}&perfil=${nome}`, { scroll: false })
  };

  return (
    <Stack direction="row" spacing={1} >
      <div onClick={() => handlePerfilClick(props.nome)}>
        <Chip
          avatar={
            <Avatar 
              alt={props.nome} 
              src={props.urlImagem} 
              style={{
                width: '50px',
                height: '50px',
                fontSize:'28px',
                backgroundColor: '#341931',
                color: '#fff'
              }}
            />
          }
          label={props.nome}
          variant="outlined"
          sx={{
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
          }}
        />
      </div>
    </Stack>
  );
}