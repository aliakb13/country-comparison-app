import { useSelector } from "react-redux";

export default function Sidebar() {
  const { data, isLoading, errorMessage } = useSelector((state) => state.news);
  return (
    <section>
      <div className="">Halo dari sidebar</div>
      <p>test</p>
    </section>
  );
}
