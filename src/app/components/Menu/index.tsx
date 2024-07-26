import Image from "next/image";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <main className={styles.main}>
      <Image
        src={'/logo.png'}
        width={206}
        height={200}
        alt="Logo"
        className={styles.imgLogo}
      />
    </main>
  );
}
