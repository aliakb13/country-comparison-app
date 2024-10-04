import ReadMoreReact from "read-more-react";

export default function MiniCard({ data }) {
  const prefix = "https://nytimes.com/";
  const image = data.multimedia[0];
  return (
    <div className="flex flex-col gap-3 shadow-md bg-[#28293D] text-white p-5">
      <ReadMoreReact
        text={data.snippet}
        min={40}
        ideal={80}
        max={120}
        readMoreText={"..."}
      />
      <img src={`${prefix}${image.url}`} alt="" />
      <a href={data.web_url} className="poppins-regular text-md">
        READ MORE...
      </a>
    </div>
  );
}
