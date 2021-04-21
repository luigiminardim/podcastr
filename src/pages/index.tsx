import { GetStaticProps } from "next";
import Header from "../components/shared/Header";

export default function HomePage({ episodes }) {
  return <>{JSON.stringify(episodes)}</>;
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();
  const _8hours = 8 * 60 * 60;
  return {
    props: {
      episodes: data,
    },
    revalidate: _8hours,
  };
};
