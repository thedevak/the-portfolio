import Head from 'next/head';
import styles from '../../styles/Portfoliosingle.module.css';

export default function Blog({ data }) {
  return (
    <div>
      {data.map((post, index) => {
        return (
          <div key={index}>
            <Head>
              <title>{post['yoast_head_json']['title']}</title>
              <meta
                name="description"
                content={post['yoast_head_json']['description']}
              />
              <meta name="title" content={post['yoast_head_json']['title']} />
              <meta
                name="description"
                content={post['yoast_head_json']['description']}
              />
              <meta
                http-equiv="Content-Type"
                content="text/html; charset=utf-8"
              />
              <meta name="language" content="English" />
            </Head>
            <h1 className={styles.porttitle}>{post['title']['rendered']}</h1>
            <div
              className="text-container"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(
    `https://akthedesigner.com/admin/wp-json/wp/v2/portfolios?_embed&slug=${id}`
  );
  const data = await res.json();
  return { props: { data } };
}
