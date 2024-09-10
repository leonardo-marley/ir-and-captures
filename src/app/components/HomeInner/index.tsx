import { useState } from "react";
import styles from "./HomeInner.module.css";
import Caroussel  from "./../Caroussel/Index";

export default function HomeInner() {
  
  return (
    <div className={styles.containerHome}>
        <Caroussel/>
    </div>
  );
}