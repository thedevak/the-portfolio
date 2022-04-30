export const getStaticPaths = async () => {
  const res = await fetch(
    'https://akthedesigner.com/admin/wp-json/wp/v2/portfolios'
  );
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    'https://akthedesigner.com/admin/wp-json/wp/v2/portfolios/' + id
  );
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.id}</h1>
      <h1>{ninja.title.rendered}</h1>
      <div
        className="text-container"
        dangerouslySetInnerHTML={{ __html: ninja.content.rendered }}
      />
    </div>
  );
};

export default Details;
