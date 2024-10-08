export default function CardNews({ data }) {
  const prefix = "https://nytimes.com/";

  return (
    <div className="flex flex-col gap-5 shadow-[#1E1E2F] shadow-md rounded-xl p-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <h2 className="poppins-bold">{data.snippet}</h2>
      <div className="text-sm text-[#1F2937] flex gap-2 nunito-sans-bold">
        <p>{`${data.byline.original}`}</p>
        <p>{new Date(data.pub_date).getFullYear()}</p>
      </div>
      <img
        src={`${prefix}${data.multimedia[0].url}`}
        alt={data.snippet}
        className="rounded-xl"
      />
      <button className="poppins-regular rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <a href={data.web_url}>READ MORE</a>
      </button>
      <div className="flex flex-col gap-3 nunito-sans-reg">
        <p className="nunito-sans-reg text-[#1D4ED8]">{data.source}</p>
        <p className="nunito-sans-reg text-sm text-[#1F2937]">5 minutes read</p>
      </div>
    </div>
  );
}
