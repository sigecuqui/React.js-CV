import "./index.css";

function Pill({ children, color }) {
  const asignedColor = ["green", "yellow", "orange", "red"].includes(color)
    ? color
    : "grey";
  return (
    <h3>
      <span className={asignedColor}>{children}</span>
    </h3>
  );
}

export default Pill;
