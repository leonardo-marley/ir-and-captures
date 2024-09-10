import { useState } from "react";
import styles from "./SobreInner.module.css";

export default function SobreInner() {
  
  return (
    <div className={styles.containerSobre}>
        <div className={styles.containerTexto}>
            <h1>Sobre o IRs and Captures</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Este projeto foi criado para músicos e entusiastas que buscam explorar e compartilhar arquivos de Impulse Responses (IRs) e capturas para pedais de guitarra. Nossa plataforma permite que os usuários façam upload e download de arquivos, oferecendo um espaço colaborativo para a criação de timbres únicos. Além disso, a comunidade integrada facilita a comunicação entre os membros, possibilitando discussões, dicas e o intercâmbio de experiências. Aqui, você encontra tudo o que precisa para expandir suas possibilidades sonoras e conectar-se com outros músicos apaixonados.</p>
        </div>
    </div>
  );
}