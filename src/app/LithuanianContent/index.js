import "./index.css";
import Pill from "./components/Pill";
import ContentBox from "./components/ContentBox";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/footer";
import Link from "./components/Link";
import Select from "./components/Select";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="rectangle">
          <Select
            options={[
              { value: "en", children: "English" },
              { value: "lt", children: "Lietuvių" },
            ]}
          />
        </div>
        <article className="name-card">
          <section className="title">SIGITA GUOGAITĖ</section>
          <section className="black-title">PROGRAMUOTOJA</section>
        </article>
      </header>

      <main>
        <article className="first-container">
          <ContentBox title="NUORODOS">
            <List
              listClass="list"
              liElement={[
                {
                  children: (
                    <Link
                      classLink="link"
                      image
                      imgSrc="https://lightbulbgrip.com/wp-content/uploads/2018/11/linkedin-icon-png-transparent-background-13.png"
                      imgAlt="linkedin-logo"
                      link="https://www.linkedin.com/in/sigita-guogaite/"
                      imgClass="link-img"
                    >
                      LINKEDIN/sigita-guogaite
                    </Link>
                  ),
                },
                {
                  children: (
                    <Link
                      classLink="link"
                      image
                      imgSrc="https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-24.jpg"
                      imgAlt="behance-logo"
                      link="https://github.com/sigecuqui"
                      imgClass="link-img"
                    >
                      GITHUB/sigecuqui
                    </Link>
                  ),
                },
              ]}
            />
          </ContentBox>

          <ContentBox title="APIE MANE">
            <p>
              Žiniatinklio programavimo įgūdžiai:
              <br />
              Darbas su GITHUB, Server-side technologijomis (NodeJS, modern stack
              (ES2015, Flexbox, CSS Modules); naujausių žiniatinklio programavimo standartų žinios HTML, CSS,
              JavaScript; Žiniatinklio aplikacijų programavimas pritaikant įvairiems prietaisams ir t. t.
              <br />
              Šiuo metu mokausi React.js karkaso.
            </p>
          </ContentBox>
        </article>

        <article className="second-container">
          <ContentBox title="IŠSILAVINIMAS">
            <div>
              <List
                listClass="list"
                liElement={[
                  { children: "CODEACADEMY" },
                  { children: "2020 - 2021" },
                  { children: "Profesinis diplomas" },
                  { children: "Full-Stack Žiniatinklio programavimas" },
                ]}
              />
              <div className="line"></div>
              <List
                listClass="list"
                liElement={[
                  { children: "VYTAUTO DIDŽIOJO UNIVERSITETAS" },
                  { children: "2012 - 2016" },
                  { children: "Bakalauras" },
                  { children: "Viešoji komunikacija" },
                ]}
              />
            </div>
          </ContentBox>

          <ContentBox title="ASMENINĖS SAVYBĖS">
            <Pill rate="best">KŪRYBIŠKUMAS</Pill>
            <Pill rate="best">DARBAS KOMANDOJE</Pill>
            <Pill rate="good">ORGANIZUOTUMAS</Pill>
          </ContentBox>

          <ContentBox title="TECHNINIAI ĮGŪDŽIAI">
            <Pill rate="best">HTML/CSS</Pill>
            <Pill rate="good">JAVASCRIPT</Pill>
            <Pill rate="good">PHP</Pill>
            <Pill rate="less">REACT.JS</Pill>
          </ContentBox>
        </article>

        <ContentBox title="DARBO PATIRTIS">
          <article className="third-container">
            <section className="border">
              <WorkExperience
                jobPosition="SKAITMENINIO MARKETINGO PRAKTIKANTAS"
                company="GV Group"
                date="2019"
              >
                <p>
                  Darbas su MAGENTO turinio valdymo sistema naudojant SEO raktažodžius, SEO tekstų rašymas;
                  mokymasis dirbti su GOOGLE ADS ir ANALYTICS, FACEBOOK BUSINESS.
                </p>
                <List
                  liElement={[
                    { children: "MAGENTO TVS" },
                    { children: "GOOGLE ADS" },
                    { children: "GOOGLE ANALYTICS" },
                    { children: "TEKSTŲ RAŠYMAS" },
                  ]}
                />
              </WorkExperience>
            </section>

            <section className="border">
              <WorkExperience
                jobPosition="ADMINISTRATORĖ"
                company="Leidykla BRIEDIS"
                date="2017-2019"
              >
                <p>
                  Įmonės marketingo strategijų vystymas; darbas su knygų šablonais, klaidų paieška, redagavimas; darbas su dokumentais ir kiti administraciniai darbai.
                </p>
                <List
                  liElement={[
                    { children: "OXID TVS" },
                    { children: "GOOGLE ADS" },
                    { children: "FACEBOOK BUSINESS" },
                    { children: "ADOBE INDESIGN" },
                    { children: "REDAGAVIMAS" },
                    { children: "DOCUMENTŲ ADMINISTRAVIMAS" },
                  ]}
                />
              </WorkExperience>
            </section>

            <section>
              <WorkExperience
                jobPosition="KNYGYNO KONSULTANTĖ"
                company="ALG knygynai"
                date="2016-2017"
              >
                <p>
                  Klientų konsultavimas įvairiuose knygų žanruose: vaikų literatūros,
                  istorijos, mokslo, klasikinės grožinės literatūros ir t. t.
                </p>
                <List
                  liElement={[
                    { children: "KLIENTŲ KONSULTAVIMAS" },
                    { children: "KNYGŲ PRIEŽIŪRA" },
                    { children: "DOMĖJIMASIS ĮVAIRIAIS KNYGŲ ŽANRAIS" },
                  ]}
                />
              </WorkExperience>
            </section>
          </article>
        </ContentBox>
      </main>

      <footer className="footer">
        <Footer classLabel="black-title" title="VIETA">
          <List listClass="list" liElement={[{ children: "Vilnius" }]} />
        </Footer>
        <Footer classLabel="black-title" title="KONTAKTAI">
          <List
            listClass="list"
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
        </Footer>
        <Footer classLabel="black-title" title="SOCIALINIAI TINKLAI">
          <List
            listClass="list"
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
        </Footer>
      </footer>
    </div>
  );
}

export default App;
