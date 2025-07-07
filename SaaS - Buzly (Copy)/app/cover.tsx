import type { NextPage } from "next";
import Image from "next/image";
import TipoDeArquivo from "../components/tipo-de-arquivo";
import styles from "./cover.module.css";

const Cover: NextPage = () => {
  return (
    <div className={styles.cover}>
      <div className={styles.coverInner}>
        <header className={styles.logotipoParent}>
          <Image
            className={styles.logotipoIcon}
            loading="lazy"
            width={280}
            height={57.2}
            sizes="100vw"
            alt=""
            src="/logotipo@2x.png"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.contentParent}>
              <div className={styles.content}>
                <h1 className={styles.buzly}>Buzly</h1>
              </div>
              <div className={styles.detalhes}>
                <div className={styles.tipoDeArquivo}>
                  <h2 className={styles.owner}>Owner</h2>
                  <Image
                    className={styles.ownersIcon}
                    loading="lazy"
                    width={96}
                    height={96}
                    sizes="100vw"
                    alt=""
                    src="/owners@2x.png"
                  />
                </div>
                <TipoDeArquivo
                  tipoDeArquivo="Tipo de arquivo"
                  nome="Dashboard"
                />
                <TipoDeArquivo tipoDeArquivo="Status" nome="Construção" />
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className={styles.background}>
        <Image
          className={styles.logoInsanyIcon}
          loading="lazy"
          width={96}
          height={100}
          sizes="100vw"
          alt=""
          src="/logoinsany.svg"
        />
      </div>
    </div>
  );
};

export default Cover;
