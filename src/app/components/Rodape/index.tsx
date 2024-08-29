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
            <div className={styles.coluna}>
              <h2>Redes Sociais</h2>
              <ul>
                <li>
                  <a className={styles.redes} href="#">< FacebookIcon/> Facebook
                  </a>
                </li>
                <li>
                  <a className={styles.redes} href="#">< InstagramIcon /> Instagram
                  </a>
                </li>
                <li>
                  <a className={styles.redes} href="#">< XIcon /> Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.coluna}>
              <h2>Contato ou Informações</h2>
              <ul className={styles.listaContato}>
                <li>
                  <a className={styles.contato} href="#">< MailOutlineIcon /> email@email.com</a>
                </li>
                <li>
                  <a className={styles.contato}>< LocalPhoneIcon />(21) 4002-8922</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.direitos}>
            <p>IR and Captures &copy; 2024</p>
          </div>
        </footer>
      }
    </>
  );
}