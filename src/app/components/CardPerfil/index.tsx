import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function CardPerfil() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        avatar={
          <Avatar 
            alt="Natan" 
            src="./Banner1.jpg" 
            style={{
              width: '50px',
              height: '50px',
              fontSize:'28px',
              backgroundColor: '#341931',
              color: '#fff'
            }}
          />
        }
        label="Natan Lemos"
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
    </Stack>
  );
}