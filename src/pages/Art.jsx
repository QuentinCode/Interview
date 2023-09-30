import { useState, useEffect } from "react";
import "../styles/Art.css";

export default function Art() {
  const [APIState, setAPIState] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  useEffect(() => {
    setAPIState({ ...APIState, loading: true });
    fetch(
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL566HzkdudLn48so44uqPM0yNV3LrWIGm&maxResults=22&key=AIzaSyD301tzIsLc9qG_wlfk9zjOu7GMS7M6r10"
    )
      .then((res) => res.json())
      .then((data) => {
        setAPIState({ loading: false, error: false, data: data });
      });
  }, []);

  return (
    <section className="art">
      <ul className="listContainer">
        {APIState.data?.items.map((item) => {
          const { id, snippet = {} } = item;
          const { title, thumbnails = {}, resourceId } = snippet;
          const { medium = {} } = thumbnails;
          return (
            <li key={id}>
              <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank">
                <h3 className="title">{title}</h3>
                <p>
                  <img
                  className="thumbnail"
                    width={medium.width}
                    height={medium.height}
                    src={medium.url}
                    alt=""
                  />
                </p>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
