import styles from "../styles/layout.module.scss";
import Navbar from "../components/molecule/Navbar";
import TableOfContents from "../components/molecule/TableofContents";
import BlogContainer from "../components/organisms/BlogContainer";

export default function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <header>
        <Navbar />
      </header>
      <main>
        <aside>
          <TableOfContents />
        </aside>
        <article>
          <BlogContainer />
        </article>
      </main>
    </div>
  );
}