import type { NextPage } from "next";
import TipoDeArquivo1 from "./tipo-de-arquivo1";
import styles from "./tipo-de-arquivo.module.css";

export type TipoDeArquivoType = {
  className?: string;
  tipoDeArquivo?: string;
  nome?: string;
};

const TipoDeArquivo: NextPage<TipoDeArquivoType> = ({
  className = "",
  tipoDeArquivo,
  nome,
}) => {
  return (
    <div className={[styles.tipoDeArquivo, className].join(" ")}>
      <h2 className={styles.tipoDeArquivo1}>{tipoDeArquivo}</h2>
      <TipoDeArquivo1 nome={nome} />
    </div>
  );
};

export default TipoDeArquivo;
