import "./index.css";
import Pill from "./components/Pill";
import ContentBox from "./components/ContentBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="rectangle">
          <form action="" method="POST">
            <select name="" id="">
              <option>Lithuanian</option>
              <option>English</option>
            </select>
          </form>
        </div>
        <article className="name-card">
          <section className="title">SIGITA GUOGAITĖ</section>
          <section className="black-title">PROGRAMMER</section>
        </article>
      </header>

      <main>
        <article className="first-container">
          <section className="links-container">
            <h2>LINKS</h2>
            <div className="line">
              <div className="line-on"></div>
            </div>
            <div className="link">
              <img
                className="link-img"
                src="https://lightbulbgrip.com/wp-content/uploads/2018/11/linkedin-icon-png-transparent-background-13.png"
              />
              <a
                href="https://www.linkedin.com/in/sigita-guogaite/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Linkedin/sigita-guogaite
              </a>
            </div>
            <div className="link">
              <img
                className="link-img"
                src="https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-24.jpg"
              />
              <a
                href="https://github.com/sigecuqui"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github/sigecuqui
              </a>
            </div>
          </section>

          <section className="about-container">
            <h2>ABOUT ME</h2>
            <div className="line">
              <div className="line-on"></div>
            </div>
            <p>
              Web Development skills:
              <br />
              Working on GITHUB; Server-side technologies (NodeJS, modern stack
              (ES2015, Flexbox, CSS Modules); Latest web standards in HTML, CSS,
              JavaScript; Develop front-end web applications that scale and
              perform well on all devices; etc.
              <br />
              Now learning React.js.
            </p>
          </section>
        </article>

        <article className="second-container">
          <section className="second-cont-section">
            <h2>EDUCATION</h2>
            <div className="line">
              <div className="line-on"></div>
            </div>
            <p>
              CODE ACADEMY
              <br />
              2020-2021
              <br />
              Proffessional diploma
              <br />
              FULL-STACK WEB DEVELOPMENT
            </p>
            <div className="line"></div>
            <p>
              VYTAUTAS MAGNUS UNIVERSITY
              <br />
              2012-2016
              <br />
              Bachelor
              <br />
              PUBLIC COMMUNICATION
            </p>
          </section>

          <ContentBox title="PERSONAL SKILLS">
            <Pill color="green">CREATIVITY</Pill>
            <Pill color="yellow">TEAMWORK</Pill>
          </ContentBox>

          <ContentBox title="TECHNICAL SKILLS">
            <Pill color="green">HTML/CSS</Pill>
            <Pill color="yellow">JAVASCRIPT</Pill>
            <Pill color="yellow">PHP</Pill>
            <Pill color="orange">REACT.JS</Pill>
          </ContentBox>
        </article>

        <h2>WORK EXPERIENCE</h2>
        <div className="line">
          <div className="line-on"></div>
        </div>
        <article className="third-container">
          <section className="border">
            <div className="align-center">
              <h4 className="position">JOB POSITION</h4>
              <h5 className="position-info">Company</h5>
              <h5 className="position-info">2019</h5>
            </div>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <br />
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </section>

          <section className="border">
            <div className="align-center">
              <h4 className="position">JOB POSITION</h4>
              <h5 className="position-info">Company</h5>
              <h5 className="position-info">2019</h5>
            </div>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <br />
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </section>

          <section>
            <div className="align-center">
              <h4 className="position">JOB POSITION</h4>
              <h5 className="position-info">Company</h5>
              <h5 className="position-info">2019</h5>
            </div>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <br />
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </section>
        </article>
      </main>

      <footer>
        <article>
          <section className="black-title">LOCATION</section>
          Vilnius
        </article>

        <article>
          <section className="black-title">CONTACT</section>
          <a href="tel:+37061481120">+37061481120</a>
          <br />
          <a href="mailto: sigita.guogaite@gmail.com">
            sigita.guogaite@gmail.com
          </a>
        </article>

        <article>
          <section className="black-title">SOCIAL</section>
          <a
            href="https://www.linkedin.com/in/sigita-guogaite/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Linkedin/sigita-guogaite
          </a>
          <br />
          <a
            href="https://www.facebook.com/sigita.guogaite"
            target="_blank"
            rel="noreferrer noopener"
          >
            Facebook/sigita-guogaite
          </a>
        </article>
      </footer>
    </div>
  );
}

export default App;
