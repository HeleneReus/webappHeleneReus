import "./Card.css";

export function Card({ logo, titel, link }) {
  return (
    <div className="cardItem">
      <span className="titelside">{titel}</span>,
      <a className="reference" href={link}>
        {" "}
        Link to {titel} page{" "}
      </a>
      , <img className="logoImage" src={logo} />
    </div>
  );
}
