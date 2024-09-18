import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TagIcon from '@mui/icons-material/Tag';

export default function CardTags() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        avatar={
          <TagIcon
            style={{
              color: '#fff'
            }}
          />
        }
        label="Rock"
        variant="outlined"
        sx={{
          backgroundColor: '#9d2053',
          color: '#fff',
          borderRadius: '4px',
          border: 'none'
        }}
      />
      <Chip
        avatar={
          <TagIcon
            style={{
              color: '#fff'
            }}
          />
        }
        label="Fuzzy"
        variant="outlined"
        sx={{
          backgroundColor: '#9d2053',
          color: '#fff',
          borderRadius: '4px',
          border: 'none'
        }}
      />
    </Stack>
  );
}