import Image from "next/image";
import styles from "./page.module.css";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <main className={styles.main}>
      <Menu />
      <div className={styles.painel}>
        <h1>Painel</h1>
      </div>
    </main>
  );
}
