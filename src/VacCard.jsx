import "./VacCard.css";

export function VacCard({ titel, picture }) {
  return (
    <div className="fullCard">
      <h1 className="vacCardTitel">{titel}</h1>
      <img className="vacImage" src={picture} />
    </div>
  );
}
