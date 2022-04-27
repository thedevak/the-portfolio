import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://sabkuchyahin.com/wp-json/wp/v2/posts/');
  const data = await res.json();

  return {
    props: { posts: data },
  };
};

const Home = ({ posts }) => {
  console.log(posts);

  return (
    <div>
      <h1>All Post</h1>
      {posts.map((post) => (
        <Link href={'/ninjas/' + post.id} key={post.id}>
          <a className={styles.single}>
            <img
              src={post.jetpack_featured_media_url}
              alt={post.title.rendered}
              width="150px"
            />
            <h5>{post.title.rendered}</h5>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Home;
