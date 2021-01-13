import './index.css';

function SelectBox({ options = [] }) {
    return (
      <select className="App__select">
        {options.map((optionData) => (
          <option key={optionData.value} {...optionData} />
        ))}
      </select>
    );
  }
  
  export default SelectBox;