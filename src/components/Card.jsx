import { formatPopulate, formatArea } from "../utils";

export default function Card({ data }) {
  return (
    <div className="flex justify-between p-10 mt-5 h-auto border-2 w-full shadow-md shadow-black rounded-md gap-5 text-[#1F2937] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <div className="flex gap-10">
        <img
          src={data.coatOfArms.png}
          alt={`the coat of arms ${data.name.common}`}
          className="w-36 h-36"
        />
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <img
              src={data.flags.png}
              alt={data.flags.alt}
              className="w-14 h-10"
            />
            <h1 className="w-2/4 nunito-sans-bold text-lg">
              {data.name.official}
            </h1>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-8">
            <div className="max-w-20">
              <h2 className="nunito-sans-reg text-sm">Known as</h2>
              <p className="poppins-bold">{data.name.common}</p>
            </div>
            <div>
              <h2 className="nunito-sans-reg text-sm">Capital</h2>
              <p className="poppins-bold">{data.capital.join(", ")}</p>
            </div>
            <div className="max-w-9">
              <h2 className="nunito-sans-reg text-sm">Continents</h2>
              <p className="poppins-bold">{data.continents}</p>
            </div>
            <div className="max-w-9">
              <h2 className="nunito-sans-reg text-sm">Region</h2>
              <p className="poppins-bold">{data.region}</p>
            </div>
            <div>
              <h2 className="nunito-sans-reg text-sm">Area</h2>
              <p className="poppins-bold">{`${formatArea(data.area)} km²`}</p>
            </div>
            <div className="max-w-36">
              <h2 className="nunito-sans-reg text-sm">Languages:</h2>
              <p className="poppins-bold">
                {Object.values(data.languages).join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="border-2 border-black h-full"></div>
        <div className="flex flex-col gap-4">
          <div className="me-5">
            <h2 className="nunito-sans-reg text-sm">Population</h2>
            <p className="poppins-bold"> {formatPopulate(data.population)}</p>
          </div>
          <div>
            <h2 className="nunito-sans-reg text-sm">Code</h2>
            <p className="poppins-bold">{data.cca2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
