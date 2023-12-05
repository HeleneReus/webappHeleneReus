import { useState } from "react";
import { VacCard } from "./VacCard";
import ParisBild from "./ParisBild.jpeg";
import PortoBild from "./PortoBild.jpeg";
import "./VacCard.css";

export function VacCards() {
  const [usePicture, setPicture] = useState(PortoBild);

  return (
    <>
      <VacCard titel={"Choose your dream vacation"} />
      <div className="button-container">
        <button
          className="button"
          type="Porto"
          onClick={() => setPicture(PortoBild)}
        >
          Porto
        </button>
        <button
          className="button"
          type="Paris"
          onClick={() => setPicture(ParisBild)}
        >
          Paris
        </button>
      </div>
      <VacCard picture={usePicture} />
    </>
  );
}
