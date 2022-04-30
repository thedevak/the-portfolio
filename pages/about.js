import Head from 'next/head';
import Post from '../components/post.js';

function About() {
  return (
    <div>
      <Head>
        <title>About Me</title>
      </Head>
      <main>
        <h1>About</h1>
        <Post />
      </main>
    </div>
  );
}

export default About;
