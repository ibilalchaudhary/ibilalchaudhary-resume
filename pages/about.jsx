import styles from "../styles/HomePage.module.css";
const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={styles.aboutTitle}>Why hire me for your next project?</h1>
      <h6 className={styles.paara}>
        I'm a Web Developer and UI/UX Designer from Samundri, Pakistan, working
        in web development. I enjoy turning complex problems into simple,
        beautiful and intuitive solutions.
      </h6>
      <h6 className={styles.paara}>
        My job is to build your website so that it is functional and
        user-friendly but at the same time attractive. Moreover, I add a
        personal touch to your product and make sure that it is eye-catching and
        easy to use. My aim is to bring across your message and identity in the
        most creative way.
      </h6>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
