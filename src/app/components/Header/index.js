import "./index.css";
import SelectBox from "../SelectBox";
import translate from "../../translate";

function Header({ lang, setLang }) {
  const onSelect = (event) => {
    setLang(event.target.value);
  };

  return (
    <header className="App__header">
      <div className="App__header--rectangle">
        <SelectBox
          onChange={onSelect}
          options={[
            { value: "en", children: "English" },
            { value: "lt", children: "Lietuvių" },
          ]}
        />
      </div>
      <article className="App__header--name-card">
        <section className="App__header--title">SIGITA GUOGAITĖ</section>
        <section className="App__black-title">
          {translate[lang].header.title}
        </section>
      </article>
    </header>
  );
}

export default Header;
