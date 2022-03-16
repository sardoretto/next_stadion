import axios from "axios";
import { useRouter } from "next/router";

function StadionDetailPage({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return "";
  }
  return <div>{data.title}</div>;
}

export default StadionDetailPage;

export const getStaticProps = async (context) => {
  const { data } = await axios.get(
    `http://localhost:3000/products/${context.params.id}`
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
