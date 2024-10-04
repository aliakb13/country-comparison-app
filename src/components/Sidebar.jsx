import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";
import MiniCard from "./MiniCard";

export default function Sidebar() {
  const { data, isLoading, errorMessage } = useSelector((state) => state.news);

  return (
    <section>
      {data.length ? (
        <div className="flex flex-col gap-10">
          <h2 className="nunito-sans-bold text-xl">News</h2>
          <div className="w-4/5 flex flex-col gap-5">
            {data.slice(0, 4).map((val, index) => (
              <MiniCard key={index} data={val} />
            ))}
          </div>
        </div>
      ) : (
        <Skeleton />
      )}
    </section>
  );
}
