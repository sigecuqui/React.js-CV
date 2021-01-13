import "./index.css";

function Pill({ children, rate }) {
  const asignedRate = ["best", "good", "less", "least"].includes(rate)
    ? rate
    : "none";
  return (
    <h3>
      <span className={asignedRate}>{children}</span>
    </h3>
  );
}

export default Pill;
