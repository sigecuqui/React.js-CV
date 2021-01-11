import "./index.css";

function List ({ liElement = [], listClass = "" }) {
    return (
        <ul className={listClass}>
            {liElement.map((liData, index) => (
                <li key={index} {...liData} />
            ))}
        </ul>
    );

}

export default List;