import SelectBox from "../SelectBox";
import "./index.css";

function Select() {
  const onSelect = (event) => {
    console.log(event.target.value);
  };

  return (
    <SelectBox
      onChange={onSelect}
      options={[
        { value: "en", children: "English" },
        { value: "lt", children: "Lietuvių" },
      ]}
    />
  );
}

export default Select;
