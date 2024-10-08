import { Outlet, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function Compare() {
  const { data, errorMessage } = useSelector((state) => state.country);
  const [country1, setCountry1] = useState(null);
  const [country2, setCountry2] = useState(null);
  const navigate = useNavigate();

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  function handleCompare() {
    navigate(`/compare/${country1.cca2}/n/${country2.cca2}`);
  }
  return (
    <section className="p-10">
      <h2 className="poppins-bold text-center text-xl">
        SELECT COUNTRY FOR COMPARING
      </h2>
      <div className="flex justify-center items-center p-10">
        <div className="flex gap-10">
          <Autocomplete
            onChange={(event, newValue) => {
              // console.log(newValue);
              setCountry1(newValue);
            }}
            sx={{ width: 300 }}
            options={
              country2
                ? data.filter((country) => country.cca2 !== country2.cca2)
                : data
            }
            autoHighlight
            getOptionLabel={(option) => option.name.common}
            renderOption={(props, option) => {
              const { key, ...optionProps } = props;
              return (
                <Box
                  key={key}
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...optionProps}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={option.flags.png}
                    alt={`This flag of ${option.name.common}`}
                  />
                  {option.name.common} ({option.cca2}){" "}
                  {`${option.idd.root}${option.idd.suffixes[0]}`}
                </Box>
              );
            }}
            renderInput={(params) => (
              <TextField {...params} label="Choose a country one" />
            )}
          />
          <Autocomplete
            onChange={(event, newValue) => {
              // console.log(newValue);
              setCountry2(newValue);
            }}
            sx={{ width: 300 }}
            options={
              country1
                ? data.filter((country) => country.cca2 !== country1.cca2)
                : data
            }
            autoHighlight
            getOptionLabel={(option) => option.name.common}
            renderOption={(props, option) => {
              const { key, ...optionProps } = props;
              return (
                <Box
                  key={key}
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...optionProps}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={option.flags.png}
                    alt={`This flag of ${option.name.common}`}
                  />
                  {option.name.common} ({option.cca2}){" "}
                  {`${option.idd.root}${option.idd.suffixes[0]}`}
                </Box>
              );
            }}
            renderInput={(params) => (
              <TextField {...params} label="Choose a country two" />
            )}
          />
        </div>
      </div>
      <p>{country1 ? country1.name && country1.name.common : "kosong"}</p>
      <p>{country2 ? country2.name && country2.name.common : "kosong"}</p>
      {!country1 || !country2 ? (
        <Button variant="contained" disabled>
          Disabled
        </Button>
      ) : (
        <Button variant="contained" onClick={handleCompare}>
          Contained
        </Button>
      )}
      <Outlet />
    </section>
  );
}
