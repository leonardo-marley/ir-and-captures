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
                <nav>
                  <p className={styles.contato} >Home</p>
                </nav>
                <nav>
                  <p className={styles.contato}>Downloads</p>
                </nav>
                <nav>
                  <p className={styles.contato}>Contato</p>
                </nav>
                <nav>
                  <p className={styles.contato}>Sobre</p>
                </nav>
              </div>
            <div className={styles.coluna}>
              {/* <h2>Redes Sociais</h2> */}
                <span>
                  <p className={styles.redes} >< FacebookIcon/> 
                  </p>
                </span>
                <span>
                  <p className={styles.redes} >< InstagramIcon /> 
                  </p>
                </span>
                <span>
                  <p className={styles.redes} >< XIcon /> 
                  </p>
                </span>
            </div>
              <div className={styles.direitos}>
                <p>Copyright &copy; 2024 IR and Captures</p>
              </div>
          </div>
        </footer>
      }
    </>
  );
}