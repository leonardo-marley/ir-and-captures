"use client";

import Image from "next/image";
import styles from "./menu.module.css";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from "react";

export default function Menu() {
  const [alignment, setAlignment] = React.useState('home');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <main className={styles.main}>
      <Image
        src={'/logo.png'}
        width={206}
        height={200}
        alt="Logo"
        className={styles.imgLogo}
      />
      <div className={styles.menu}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{color: 'black'}}
        >
          <ToggleButton sx={{fontWeight: 800}} value="home">HOME</ToggleButton>
          <ToggleButton sx={{fontWeight: 800}} value="teste1">TESTE</ToggleButton>
          <ToggleButton sx={{fontWeight: 800}} value="teste2">TESTE</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </main>
  );
}
