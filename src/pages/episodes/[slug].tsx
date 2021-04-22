import { GetStaticPaths, GetStaticProps } from "next";
import EpisodeScreen from "../../components/screens/EpisodeScreen";
import {
  Episode,
  formatPublishedAt,
  secondsToDuration,
} from "../../entities/Episode";
import { apiService } from "../../services/apiService";

export type EpisodePageProps = {
  episode: Episode;
};

export default function EpisodePage({ episode }: EpisodePageProps) {
  return <EpisodeScreen episode={episode} />;
}

export const getStaticProps: GetStaticProps<EpisodePageProps> = async ({
  params,
}) => {
  const { data } = await apiService.get(`/episodes/${params.slug}`);
  const episode = {
    ...data,
    published_at: formatPublishedAt(data.published_at),
    duration: secondsToDuration(data.file.duration),
  };

  return {
    props: { episode },
    revalidate: 3 * 24 * 60 * 60, // 3 days
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apiService.get(`/episodes`);
  const slugs: string[] = data.map((episode) => episode.id);

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
};
