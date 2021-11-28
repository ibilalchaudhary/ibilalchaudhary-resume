import styles from "../styles/ContactCode.module.css";

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{" "}
        <a
          href="https://ibilalchaudhary-resume.web.app"
          target="_blank"
          rel="noopener"
        >
          ibilalchaudhary-resume.web.app
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{" "}
        <a
          href="https://https://download-in.web.app/"
          target="_blank"
          rel="noopener"
        >
          https://download-in.web.app/
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{" "}
        <a
          href="mailto:ibilalchaudhary@gmail.com"
          target="_blank"
          rel="noopener"
        >
          ibilalchaudhary@gmail.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{" "}
        <a
          href="https://github.com/ibilalchaudhary"
          target="_blank"
          rel="noopener"
        >
          ibilalchaudhary
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/ibilalchaudhary/"
          target="_blank"
          rel="noopener"
        >
          ibilalchaudhary
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;twitter:{" "}
        <a
          href="https://www.twitter.com/ibilalchaudhry"
          target="_blank"
          rel="noopener"
        >
          ibilalchaudhry
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;instagram:{" "}
        <a
          href="https://www.instagram.com/ibilalchaudhary"
          target="_blank"
          rel="noopener"
        >
          ibilalchaudhary
        </a>
        ;
      </p>

      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
