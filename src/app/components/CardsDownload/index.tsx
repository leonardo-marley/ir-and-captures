// src/components/Loading.tsx

"use client";

import { useEffect, useState } from "react";
import styles from "./cardsDownload.module.css";
import GradientIcon from '@mui/icons-material/Gradient';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

interface CardsProps {
    codigo?: number,
    nome?: string
}

export default function CardsDownload(props: CardsProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [])

  return (
    <>
      { isClient &&
        <main 
            className={styles.cardContainer}
        >
            <div className={styles.cardHeader}>
                <p style={{display: 'flex', alignItems: 'center', gap: '.5rem'}}><GradientIcon sx={{color: '#fff'}}/><b>Pedal</b></p>
                <p>12 Modelos</p>
            </div>

            <div className={styles.cardContent}>
                <h2>Browne Dual Protein Overdrive</h2>
                <div 
                    style={{
                        display: 'flex', 
                        borderRadius: 50, 
                        backgroundColor: '#9d2053', 
                        color: '#fff', 
                        padding: '.3rem .5rem',
                        width: 'fit-content', 
                        fontSize: '11px', 
                        marginTop: '.5rem'
                    }}
                >NAM</div>
            </div>

            <div className={styles.cardButtons}>
                <button><ThumbUpAltIcon className={styles.icon}/><p>2</p></button>
                <button><FileDownloadRoundedIcon className={styles.icon}/><p>12</p></button>
            </div>

            <div className={styles.cardFooter}>
                <p>start789</p>
                <p>2 dias atrás</p>
            </div>
        </main>
      }
    </>
  );
}
