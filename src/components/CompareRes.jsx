import { useParams } from "react-router-dom";

export default function CompareRes() {
  const { code1, code2 } = useParams();
  return (
    <>
      <div>
        <p>Halo ini dari compare res</p>
        <p>Code 1: {code1}</p>
        <p>Code 2: {code2}</p>
      </div>
    </>
  );
}
