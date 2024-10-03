import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountry } from "../features/country/countrySlice";
import Card from "./Card";
import Sidebar from "./Sidebar";

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <section className="mx-5 flex">
      <div>
        {data.length &&
          data.map((value) => <Card key={value.name.common} data={value} />)}
      </div>

      <Sidebar />
    </section>
  );
}
