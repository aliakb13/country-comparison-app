import { formatPopulate } from "../utils";

export default function Card({ data }) {
  return (
    <div className="flex justify-between p-10 mt-5 h-auto border-2 w-2/3 shadow-xl rounded-md">
      <div className="flex gap-10">
        <img
          src={data.coatOfArms.png}
          alt={`the coat of arms ${data.common}`}
          className="w-36 h-36"
        />
        <div className="flex flex-col gap-5">
          <div className="flex gap-2">
            <img
              src={data.flags.png}
              alt={data.flags.alt}
              className="w-14 h-10"
            />
            <h1>{data.name.official}</h1>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-5">
            <div>
              <h2>Known as</h2>
              <p>{data.name.common}</p>
            </div>
            <div>
              <h2>Capital</h2>
              <p>{data.capital}</p>
            </div>
            <div>
              <h2>Continents</h2>
              {data.continents}
            </div>
            <div>
              <h2>
                Population
                <p>{formatPopulate(data.population)}</p>
              </h2>
            </div>
            <div>
              <h2>Area</h2>
              <p>{data.area}</p>
            </div>
            <div>
              <h2>Languages:</h2>
              <p>{Object.values(data.languages).join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-16">
        <div className="border-2 border-black h-full"></div>
        <div className="flex flex-col gap-4">
          <div className="me-8">
            <h2>Region</h2>
            <p>{data.region}</p>
          </div>
          <div>
            <h2>Code</h2>
            <p>{data.cca2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
