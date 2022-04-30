import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch(
    'https://akthedesigner.com/admin/wp-json/wp/v2/portfolios?_embos'
  );
  const data = await res.json();

  return {
    props: { posts: data },
  };
};

const Home = ({ posts }) => {
  console.log(posts);

  return (
    <main>
      <Head>
        <title>Portfolio</title>
      </Head>
      {posts.map((post) => (
        <Link href={'/ninjas/' + post.id} key={post.id}>
          <a className={styles.single}>
            <img
              src={post.x_featured_media_original}
              alt={post.title.rendered}
              width="100%"
              layout="responsive"
            />
            <h2>{post.title.rendered}</h2>

            {/* <div
              className="text-container"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            /> */}
          </a>
        </Link>
      ))}
    </main>
  );
};

export default Home;
