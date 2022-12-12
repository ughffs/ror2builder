import Head from 'next/head';
import Layout from '../components/layout/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';

type Post = {
  title: string,
  date: Date,
  content: string
}

export default function Home({ allPostsData }: any) {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello my name is Grug</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
