"use client";

import Image from "next/image";
import styles from "./rodape.module.css";
import { useEffect, useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Rodape() {
  const router = useRouter();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  const voltarAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  const handleClickMenu = (codigo: number) => {
    router.push(`${pathname}?cMenu=${codigo}`, { scroll: false });
    voltarAoTopo();
  };

  useEffect(() => {
    setIsClient(true);
  }, [])

  return (
    <>
      { isClient &&
        <footer className={styles.rodape}>
          <div className={styles.container}>
            <div className={styles.colunaContato}>
                <nav className={styles.contato} onClick={() => handleClickMenu(1)} >Home </nav>
                <nav className={styles.contato} onClick={() => handleClickMenu(2)}>Downloads </nav>
                <nav className={styles.contato} onClick={() => handleClickMenu(4)}>Sobre </nav>
                <nav className={styles.contato} onClick={() => handleClickMenu(5)}>Contato </nav>
              </div>
            <div className={styles.coluna}>
              {/* <h2>Redes Sociais</h2> */}
                <span className={styles.redes} >< FacebookIcon/> 
                </span>
                <span className={styles.redes} >< InstagramIcon />
                </span>
                <span className={styles.redes} >< YouTubeIcon /> 
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