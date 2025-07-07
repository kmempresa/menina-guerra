import type { NextPage } from "next";
import Image from "next/image";
import styles from "./status-cover.module.css";

export type StatusCoverType = {
  className?: string;

  /** Variant props */
  nome?: string;
};

const StatusCover: NextPage<StatusCoverType> = ({
  className = "",
  nome = "Em espera",
}) => {
  return (
    <button
      className={[styles.statusCover, className].join(" ")}
      data-nome={nome}
    >
      <div className={styles.status}>
        <Image
          className={styles.vectorIcon}
          width={32}
          height={21.3}
          sizes="100vw"
          alt=""
          src="/vector.svg"
        />
        <div className={styles.construo}>Construção</div>
      </div>
    </button>
  );
};

export default StatusCover;
