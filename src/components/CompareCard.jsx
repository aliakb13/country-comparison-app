import { formatArea, formatPopulate } from "../utils";

export default function CompareCard({ data }) {
  const comparePopulation = (country1, country2) => country1 > country2;

  const { country1, country2 } = data;

  return (
    <div className="flex gap-40 items-center rounded-xl p-8">
      <div className="text-lg flex flex-col gap-6 border-black border-2 p-8 rounded-xl">
        <h2 className="poppins-bold">{country1.name.common}</h2>
        <h2 className="poppins-bold">{country1.cca2}</h2>
        <p>Population:</p>
        <div className="flex gap-2 justify-center poppins-bold">
          {country1.population > country2.population ? (
            <>
              <i
                className="fa-solid fa-circle-check"
                style={{ color: "#126e52" }}
              ></i>
              <p>{`${formatPopulate(country1.population)}`}</p>
            </>
          ) : (
            <p>{`${formatPopulate(country1.population)}`}</p>
          )}
        </div>
        <p>Area:</p>
        <div className="flex gap-2 justify-center poppins-bold ">
          {country1.area > country2.area ? (
            <>
              <i
                className="fa-solid fa-circle-check"
                style={{ color: "#126e52" }}
              ></i>
              <p>{`${formatArea(country1.area)} km²`}</p>
            </>
          ) : (
            <p>{`${formatArea(country1.area)} km²`}</p>
          )}
        </div>
        <p>Region:</p>
        <p className="poppins-bold">{country1.region}</p>
      </div>
      <div className="text-lg flex flex-col gap-6 border-black border-2 p-8 rounded-xl">
        <h2 className="poppins-bold">{country2.name.common}</h2>
        <h2 className="poppins-bold">{country2.cca2}</h2>
        <p>Population:</p>
        <div className="flex gap-2 justify-center poppins-bold">
          {country2.population > country1.population ? (
            <>
              <i
                className="fa-solid fa-circle-check"
                style={{ color: "#126e52" }}
              ></i>
              <p>{`${formatPopulate(country2.population)}`}</p>
            </>
          ) : (
            <p>{`${formatPopulate(country2.population)}`}</p>
          )}
        </div>
        <p>Area:</p>
        <div className="flex gap-2 justify-center poppins-bold">
          {country2.area > country1.area ? (
            <>
              <i
                className="fa-solid fa-circle-check"
                style={{ color: "#126e52" }}
              ></i>
              <p>{`${formatArea(country2.area)} km²`}</p>
            </>
          ) : (
            <p>{`${formatArea(country2.area)} km²`}</p>
          )}
        </div>
        <p>Region:</p>
        <p className="poppins-bold">{country2.region}</p>
      </div>
    </div>
  );
}
