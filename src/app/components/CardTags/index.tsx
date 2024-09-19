import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TagIcon from '@mui/icons-material/Tag';

interface CardTagsProps {
  nome?: string
}

export default function CardTags(props: CardTagsProps) {
  return (
      <Chip
        avatar={
          <TagIcon
            style={{
              color: '#fff'
            }}
          />
        }
        label={`${props.nome ? props.nome : 'Todos'}`}
        variant="outlined"
        sx={{
          backgroundColor: '#9d2053',
          color: '#fff',
          borderRadius: '4px',
          border: 'none',
          fontWeight: 600
        }}
      />
  );
}