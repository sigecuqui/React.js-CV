import "./index.css";

function Pill({ children, color }) {
  const asignedColor = ["best", "good", "less", "least"].includes(color)
    ? color
    : "grey";
  return (
    <h3>
      <span className={asignedColor}>{children}</span>
    </h3>
  );
}

export default Pill;
