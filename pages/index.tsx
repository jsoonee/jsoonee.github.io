import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/home.module.scss';

import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Main from '../components/main';

const Home: NextPage = () => {
  return (
    <div className={styles.app}>
      <Head>
        <title>blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default Home;