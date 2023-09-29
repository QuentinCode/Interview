import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [APIState, setAPIState] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  useEffect(() => {
    setAPIState({ ...APIState, loading: true });
    fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL566HzkdudLn48so44uqPM0yNV3LrWIGm&key=AIzaSyD301tzIsLc9qG_wlfk9zjOu7GMS7M6r10")
      .then((res) => res.json())
      .then((data) => {
        setAPIState({ loading: false, error: false, data: data });
      });
      
  }, []);
  console.log(APIState.data);

  let content;
  if (APIState.loading) {
    content = <div>Loading...</div>;
  } else if (APIState.error) {
    content = <div>Oops! Something went wrong</div>;
  } else if (APIState.data?.length > 0) {
    content = <ul>
      {APIState.data.items.map((data) => {
        return <li key={data.id}>
          <span>{data.snippet.description}</span>
        </li>
      })}
    </ul>
  } else if (APIState.data?.length === 0) {
    content = <div>No data found</div>;
  }

  return (
    <>
      <h1>React App</h1>
      {content}
    </>
  );
}

export default App;