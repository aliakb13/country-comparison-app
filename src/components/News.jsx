import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../features/news/newsSlice";
import Skeleton from "./Skeleton";
import CardNews from "./CardNews";
import constUrl from "../constants";

export default function News() {
  const { data, isLoading, errorMessage } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchNews(constUrl.nyt.url));
    }
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton />;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  const prefix = constUrl.nyt.prefix;

  return (
    <section className="mt-5 px-10 py-10 bg-[#F9FAFB]">
      <h2 className="nunito-sans-bold text-2xl">
        HOTNEWS <i className="fa-solid fa-fire"></i>
      </h2>
      <div className="mt-5 bg-[#1E1E2F] rounded-xl p-8">
        {data.length &&
          data.slice(0, 1).map((val) => (
            <div className="flex gap-10" key={0}>
              <img
                src={`${prefix}${val.multimedia[0].url}`}
                alt={val.snippet}
                className="h-50 rounded-lg"
              />
              <div className="flex flex-col gap-6 text-[#B3B3B3] p-5">
                <a
                  href={val.web_url}
                  className="nunito-sans-bold text-xl text-white hover:text-[#4F46E5]"
                  target="_blank"
                >
                  {val.snippet}
                </a>
                <p className="nunito-sans-bold text-justify">
                  {val.lead_paragraph} Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Beatae aperiam porro consequuntur
                  consectetur accusamus nostrum, autem deleniti ullam atque
                  molestias asperiores unde ea perferendis tenetur blanditiis
                  eaque perspiciatis, odit laborum!
                </p>
                <div className="flex flex-col gap-5">
                  <p className="text-white">{val.source}</p>
                  <p className="poppins-regular">
                    {val.byline.original} - 12 minutes reads
                  </p>
                </div>
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
