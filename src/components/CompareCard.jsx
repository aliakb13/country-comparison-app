import { formatArea, formatPopulate } from "../utils";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CompareCard({ data }) {
  const { country1, country2 } = data;

  const head = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell sx={head}>
              <div className="flex gap-5">
                <img
                  width={40}
                  src={country1.flags.png}
                  alt={`the flags of ${country1.name.common}`}
                />
                <h2>{country1.name.common}</h2>
              </div>
            </TableCell>
            <TableCell sx={head}>
              <div className="flex gap-5">
                <img
                  width={40}
                  src={country2.flags.png}
                  alt={`the flags of ${country2.name.common}`}
                />
                <h2>{country2.name.common}</h2>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={head}>Code</TableCell>
            <TableCell>{country1.cca2}</TableCell>
            <TableCell>{country2.cca2}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={head}>Population</TableCell>
            <TableCell>
              {country1.population > country2.population ? (
                <div className="flex gap-3">
                  <i className="fa-solid fa-circle-check text-[#126e52]"></i>
                  <p>{`${formatPopulate(country1.population)}`}</p>
                </div>
              ) : (
                <p>{`${formatPopulate(country1.population)}`}</p>
              )}
            </TableCell>
            <TableCell>
              {country2.population > country1.population ? (
                <div className="flex gap-3">
                  <i className="fa-solid fa-circle-check text-[#126e52]"></i>
                  <p>{`${formatPopulate(country2.population)}`}</p>
                </div>
              ) : (
                <p>{`${formatPopulate(country2.population)}`}</p>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={head}>area</TableCell>
            <TableCell>
              {country1.area > country2.area ? (
                <div className="flex gap-3">
                  <i className="fa-solid fa-circle-check text-[#126e52]"></i>
                  <p>{`${formatArea(country1.area)} km²`}</p>
                </div>
              ) : (
                <p>{`${formatArea(country1.area)} km²`}</p>
              )}
            </TableCell>
            <TableCell>
              {country2.area > country1.area ? (
                <div className="flex gap-3">
                  <i className="fa-solid fa-circle-check text-[#126e52]"></i>
                  <p>{`${formatArea(country2.area)} km²`}</p>
                </div>
              ) : (
                <p>{`${formatArea(country2.area)} km²`}</p>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={head}>Region</TableCell>
            <TableCell>{country1.region}</TableCell>
            <TableCell>{country2.region}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
