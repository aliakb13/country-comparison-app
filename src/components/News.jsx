import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../features/news/newsSlice";
import Skeleton from "./Skeleton";
import CardNews from "./CardNews";

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
    return <Skeleton />;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  const prefix = "https://nytimes.com/";

  return (
    <section className="mt-5 px-10 py-10">
      <h2 className="nunito-sans-bold text-2xl">
        HOTNEWS <i className="fa-solid fa-fire"></i>
      </h2>
      <div className="mt-5">
        {data.length &&
          data.slice(0, 1).map((val) => (
            <div className="flex gap-10" key={0}>
              <img
                src={`${prefix}${val.multimedia[0].url}`}
                alt={val.snippet}
                className="h-50 rounded-lg"
              />
              <div className="flex flex-col gap-8">
                <p className="poppins-regular">12 minutes read</p>
                <div className="flex flex-col gap-3 text-">
                  <p className="text-[#1D4ED8]">{val.source}</p>
                  <p className="poppins-regular ">{val.byline.original}</p>
                </div>

                <h2 className="nunito-sans-bold text-xl">{val.snippet}</h2>
                <p className="nunito-sans-bold">
                  {val.lead_paragraph} Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Esse id error consectetur vero, dolorum
                  deserunt, quaerat iure, alias commodi eligendi non voluptatum
                  ducimus nobis doloribus dicta voluptatibus quas molestiae
                  mollitia. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Commodi sequi cumque laborum quam est earum assumenda
                  quidem doloribus quibusdam. Perspiciatis, porro nisi odio
                  rerum praesentium eius cumque rem veritatis laboriosam?
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="mt-10">
        <h2 className="nunito-sans-bold text-2xl">Latest News</h2>
        <div className="grid grid-cols-3 gap-x-14 gap-y-10 mt-8">
          {data.length &&
            data
              .slice(1, data.length)
              .map((value, index) => <CardNews key={index} data={value} />)}
        </div>
      </div>
    </section>
  );
}
