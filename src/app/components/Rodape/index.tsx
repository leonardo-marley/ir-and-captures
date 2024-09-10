"use client";

import Image from "next/image";
import styles from "./rodape.module.css";
import { useEffect, useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Rodape() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [])

  return (
    <>
      { isClient &&
        <footer className={styles.rodape}>
          <div className={styles.container}>
            <div className={styles.colunaContato}>
                <nav className={styles.contato} >Home </nav>
                <nav className={styles.contato}>Downloads </nav>
                <nav className={styles.contato}>Contato </nav>
                <nav className={styles.contato}>Sobre </nav>
              </div>
            <div className={styles.coluna}>
              {/* <h2>Redes Sociais</h2> */}
                <span className={styles.redes} >< FacebookIcon/> 
                </span>
                <span className={styles.redes} >< InstagramIcon />
                </span>
                <span className={styles.redes} >< XIcon /> 
                </span>
            </div>
              <div className={styles.direitos}>
                <span>Copyright &copy; 2024 IR and Captures</span>
              </div>
          </div>
        </footer>
      }
    </>
  );
}