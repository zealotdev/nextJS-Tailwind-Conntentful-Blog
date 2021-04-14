import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import Navigation from './../components/Navigation';
import { fetchNavigationEntries } from '../utils/fetchNavigationEntries';

export default function Home({ links }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zeal-Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation links={links} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch Top navigation links
  const links = await fetchNavigationEntries();

  return {
    props: {
      links,
    },
  };
}
