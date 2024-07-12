import "./Card.css";

export function Card({ title, items }) {
  return (
    <>
      <div className="card">
        <h4>{title}</h4>
        <span>{items}</span> <button>Shuffle</button>
        <span>{items}</span> <button>Shuffle</button>
        <span>{items}</span> <button>Shuffle</button>
        <button>Shuffle</button>
      </div>
    </>
  );
}
