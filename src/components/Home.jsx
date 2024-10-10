import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountry } from "../features/country/countrySlice";
import Card from "./Card";
import Sidebar from "./Sidebar";
import Skeleton from "./Skeleton";

export default function Home() {
  const { data, isLoading, errorMessage } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();
  const url = import.meta.env.VITE_COUNTRY_URL;

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchCountry(url));
    }
  }, [dispatch]);

  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadMoreItems = () => {
    setIsLoadingMore(true); // Set loading status saat tombol diklik

    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 10); // Tambah jumlah item yang akan tampil
      setIsLoadingMore(false); // Reset loading status setelah data ditampilkan
    }, 1000);
  };

  if (isLoading) {
    return <Skeleton />;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="px-12 py-8">
      <div className="text-2xl nunito-sans-bold flex gap-3 justify-center">
        <i className="fa-solid fa-ranking-star"></i>
        <h2>Country Rankings by Population</h2>
      </div>

      <section className="grid grid-cols-[2fr_1fr] gap-20 mt-5">
        <div>
          <div className="w-full">
            {data.length &&
              data
                .slice(0, visibleCount)
                .map((value) => <Card key={value.name.common} data={value} />)}
          </div>

          {visibleCount < data.length && (
            <div className="text-center mt-10">
              {isLoadingMore ? (
                <p>
                  <i className="fa-solid fa-circle-notch animate-spin text-[#1D4ED8]"></i>
                  <span className="ms-2">Processing</span>
                </p>
              ) : (
                <button onClick={loadMoreItems}>
                  <i className="fa-solid fa-circle-down animate-bounce text-3xl hover:text-[#1D4ED8]"></i>
                </button> // Tombol untuk load more
              )}
            </div>
          )}
        </div>

        <Sidebar />
      </section>
    </div>
  );
}
