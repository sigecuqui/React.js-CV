import './index.css';

function SelectBox({ options = [], onChange }) {
    return (
      <select className="App__select" onChange = {onChange}>
        {options.map((optionData) => (
          <option key={optionData.value} {...optionData} />
        ))}
      </select>
    );
  }
  
  export default SelectBox;