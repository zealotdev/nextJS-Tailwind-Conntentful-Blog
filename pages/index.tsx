import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import Navigation from './../components/Navigation';
import Layout from './../components/Layout';

import { fetchNavigationEntries } from '../utils/fetchNavigationEntries';
import { fetchTodayPickPost } from '../utils/fetchTodayPickPost';
import { fetchCategory } from '../utils/fetchCategory';

export default function Home({ links, todaysPick, categories }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zeal-Blog</title>
        <link rel="icon" href="/zeal-logo.svg" />
      </Head>

      <main>
        <Navigation links={links} />
        <Layout todaysPick={todaysPick} categories={categories} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch Top navigation links
  const links = await fetchNavigationEntries();

  // Fetch Today's Editor Pick
  const todaysPick = await fetchTodayPickPost();

  // Fetch all Categories
  const categories = await fetchCategory();

  return {
    props: {
      links,
      todaysPick,
      categories,
    },
  };
}
