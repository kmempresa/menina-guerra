import type { NextPage } from "next";
import Image from "next/image";
import styles from "./tipo-de-arquivo1.module.css";

export type TipoDeArquivo1Type = {
  className?: string;

  /** Variant props */
  nome?: string;
};

const TipoDeArquivo1: NextPage<TipoDeArquivo1Type> = ({
  className = "",
  nome = "Template",
}) => {
  return (
    <button
      className={[styles.tipoDeArquivo, className].join(" ")}
      data-nome={nome}
    >
      <div className={styles.status}>
        <Image
          className={styles.pieChartFillIcon}
          width={32}
          height={32}
          sizes="100vw"
          alt=""
          src="/piechartfill.svg"
        />
        <div className={styles.dashboard}>Dashboard</div>
      </div>
    </button>
  );
};

export default TipoDeArquivo1;
