import "./index.css";
import Link from "../Link";
import List from "../List";
import FooterBlock from "../FooterBlock";
import translate from "../../translate";

function Footer({ lang }) {
  return (
    <footer className="App__footer">
      {translate[lang].footer.footerContent.map((item, index) => (
        <FooterBlock
          classLabel="App__black-title"
          key={index}
          title={item.title}
        >
          <List
            listClass="App__list"
            liElement={item.list.map(({ text, link, index }) => {
              const Component = link ? Link : "p";

              return {
                children: (
                  <Component key={index} link={link}
                  classLink="App__footer--link">
                    {text}
                  </Component>
                ),
              };
            })}
          />
        </FooterBlock>
      ))}
    </footer>
  );
}

export default Footer;
