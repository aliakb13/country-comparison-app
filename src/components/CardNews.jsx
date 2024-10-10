import constUrl from "../constants";

export default function CardNews({ data }) {
  const prefix = constUrl.nyt.prefix;

  return (
    <div className="flex flex-col gap-5 shadow-[#1E1E2F] shadow-lg rounded-xl p-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <a
        href={data.web_url}
        className="poppins-bold hover:text-[#4F46E5]"
        target="_blank"
      >
        {data.snippet}
      </a>
      <div className="text-sm text-[#1F2937] flex gap-2 nunito-sans-bold">
        <p>{`${data.byline.original}`}</p>
        <p>{new Date(data.pub_date).getFullYear()}</p>
      </div>
      <img
        src={`${prefix}${data.multimedia[0].url}`}
        alt={data.snippet}
        className="rounded-xl"
      />
      <div className="flex flex-col gap-3 nunito-sans-reg">
        <p className="nunito-sans-bold text-[#1E1E2F]">{data.source}</p>
        <p className="nunito-sans-reg text-sm text-[#1F2937]">5 minutes read</p>
      </div>
    </div>
  );
}
