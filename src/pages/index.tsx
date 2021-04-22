import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { GetStaticProps } from "next";
import HomeScreen from "../components/screens/HomeScreen";
import { Episode, formatPublishedAt, secondsToDuration } from "../entities/Episode";
import { apiService } from "../services/apiService";

type HomePageProps = {
  episodes: Episode[];
};

export default function HomePage({ episodes }: HomePageProps) {
  return <HomeScreen episodes={episodes} />;
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const response = await apiService.get("episodes", {
    params: { _limit: 12, _sort: "published_at", _order: "desc" },
  });
  const episodes: Episode[] = response.data.map((e) => ({
    ...e,
    published_at: formatPublishedAt(e.published_at),
    duration: secondsToDuration(e.file.duration),
  }));

  const _8hours = 8 * 60 * 60;
  return {
    props: {
      episodes,
    },
    revalidate: _8hours,
  };
};
