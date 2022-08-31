import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAuthorVideos } from "../../features/videos/videosSlice";
import Loading from "../ui/Loading";
import VideoGridItem from "./VideoGridItem";

export default function AuthorGrid() {
  const dispatch = useDispatch();
  const { authorVideos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );
  const { author } = useParams();

  useEffect(() => {
    dispatch(fetchAuthorVideos(author));
  }, [dispatch, author]);

  // decide what to render
  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && authorVideos?.length === 0) {
  }

  if (!isError && !isLoading && authorVideos?.length > 0) {
    content = authorVideos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));
  }

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
}
