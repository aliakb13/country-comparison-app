import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../features/news/newsSlice";

export default function News() {
  const { data, isLoading, errorMessage } = useSelector((state) => state.news);

  const dispatch = useDispatch();
  const key = import.meta.env.VITE_API_NYT_KEY;
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=peace&api-key=${key}`;

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchNews(url));
    }
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <>
      <div>
        {data.length ? (
          data.map((value, index) => (
            <div key={`news-${index}`}>
              <p>{value.snippet}</p>
              <a href={value.web_url}>Read more</a>
            </div>
          ))
        ) : (
          <p>kosong</p>
        )}
      </div>
    </>
  );
}
