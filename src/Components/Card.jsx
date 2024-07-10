import "./Card.css";

export function Card({ title, items }) {
  return (
    <>
      <div className="card">
        <h4>{title}</h4>
        <span>{items}</span>
        <span>{items}</span>
        <span>{items}</span>
        <button>Shuffle</button>
      </div>
    </>
  );
}
