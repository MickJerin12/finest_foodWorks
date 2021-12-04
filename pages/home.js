import Image from "next/image";
import styles from "../styles/Home.module.css";

const home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src="/mainLogoFF.png"
          width={150}
          height={50}
          alt="logo"
          className={styles.logo}
        ></Image>
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
            <Image
              src="/phoneIcon.png"
              width={24}
              height={24}
              alt="contactIcon"
              className={styles.logo}
            ></Image>
            <span className={styles.phoneNumber}> 8779444199</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default home;
