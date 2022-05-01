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
  // console.log(posts);

  return (
    <main>
      <Head>
        <title>Portfolio</title>
      </Head>

      <div className={styles.intro}>
        <h1>Hi! I'm Your Name</h1>
        <h2>Designer . Animator . Illustrator</h2>
      </div>

      <div className={styles.portgrid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.portcard}>
            <Link href={`/portfolios/${post['slug']}`}>
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
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
