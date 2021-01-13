import "./index.css";
import Link from "../Link";
import List from "../List";
import FooterBlock from "../FooterBlock";

function Footer() {
  return (
    <footer className="App__footer">
      <FooterBlock classLabel="black-title" title="LOCATION">
        <List listClass="App__list" liElement={[{ children: "Vilnius" }]} />
      </FooterBlock>
      <FooterBlock classLabel="black-title" title="CONTACT">
        <List
          listClass="App__list"
          liElement={[
            {
              children: (
                <Link classLink="App__footer--link" link="tel:+37061481120">
                  +37061481120
                </Link>
              ),
            },
            {
              children: (
                <Link
                  classLink="App__footer--link"
                  link="mailto:sigita.guogaite@gmail.com"
                >
                  sigita.guogaite@gmail.com
                </Link>
              ),
            },
          ]}
        />
      </FooterBlock>
      <FooterBlock classLabel="black-title" title="SOCIAL">
        <List
          listClass="App__list"
          liElement={[
            {
              children: (
                <Link
                  classLink="App__footer--link"
                  link="https://www.linkedin.com/in/sigita-guogaite/"
                >
                  LINKEDIN/sigita-guogaite
                </Link>
              ),
            },
            {
              children: (
                <Link
                  classLink="App__footer--link"
                  link="https://github.com/sigecuqui"
                >
                  GITHUB/sigecuqui
                </Link>
              ),
            },
          ]}
        />
      </FooterBlock>
    </footer>
  );
}

export default Footer;
