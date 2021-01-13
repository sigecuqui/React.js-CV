import './index.css';

function Select({ options = [] }) {
    return (
      <select className="App__select">
        {options.map((optionData) => (
          <option key={optionData.value} {...optionData} />
        ))}
      </select>
    );
  }
  
  export default Select;