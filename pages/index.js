import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerImageContainer}>
          <Image
            src="/ffLogo.png"
            alt="logo"
            className={styles.logo}
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
      </div>
      <div className={styles.bodyWrapper}>
        <div className={styles.body}>
          <span className={styles.label}>WEBSITE UNDER CONSTRUCTION</span>
        </div>
        <div className={styles.secondaryBody}></div>
      </div>
      <div className={styles.footer}>
        <div className={styles.textWrapper}>
          <span className={styles.footerLabel}>For queries contact us on</span>
          <span className={styles.emailAddress}>info@finestfoodworks.com</span>
        </div>
        <div className={styles.addressWrapper}>
          <span className={styles.address}>
            506, Zion, Sector 10, Kharghar, Navi Mumbai.
          </span>
          <span className={styles.numberWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src="/phoneIcon.png"
                alt="contactIcon"
                className={styles.logo}
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
            <span className={styles.phoneNumber}> 022-69099138</span>
          </span>
        </div>
      </div>
    </div>
  );
}
