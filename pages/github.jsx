import styles from "../styles/HomePage.module.css";
const github = () => {
  return (
    <>
      <h1>Github Profile</h1>
      <h1 className={styles.aboutTitle}>ID: ibilalchaudhary</h1>
      <h6 className={styles.paara}>
        Working at: Haramosh Studios as a React Developer
      </h6>
      <h6 className={styles.paara}>
        React.js, React Native, PWA React, JavaScript, Illustrator, Photoshop,
        Next.js, Gitsby.js, Remix.js
      </h6>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Github Details" },
  };
}

export default github;
