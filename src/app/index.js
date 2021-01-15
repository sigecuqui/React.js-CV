import { Fragment, useState } from "react";
import "./index.css";
import Layout from "./components/Layout";
import Pill from "./components/Pill";
import ContentBox from "./components/ContentBox";
import List from "./components/List";
import Link from "./components/Link";
import WorkExperience from "./components/WorkExperience";
import translate from "./translate";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <div className="App">
      <Layout language={lang} setLanguage={setLang}>
        <article className="App__first-container">
          <ContentBox title={translate[lang].main.links.title}>
            <List
              listClass="App__list"
              liElement={[
                {
                  children: (
                    <Link
                      classLink="App__link"
                      imgSrc="https://lightbulbgrip.com/wp-content/uploads/2018/11/linkedin-icon-png-transparent-background-13.png"
                      imgAlt="linkedin-logo"
                      link="https://www.linkedin.com/in/sigita-guogaite/"
                      imgClass="App__link--img"
                    >
                      LINKEDIN/sigita-guogaite
                    </Link>
                  ),
                },
                {
                  children: (
                    <Link
                      classLink="App__link"
                      imgSrc="https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-24.jpg"
                      imgAlt="github-logo"
                      link="https://github.com/sigecuqui"
                      imgClass="App__link--img"
                    >
                      GITHUB/sigecuqui
                    </Link>
                  ),
                },
              ]}
            />
          </ContentBox>

          <ContentBox title={translate[lang].main.about.title}>
            <p>{translate[lang].main.about.text}</p>
          </ContentBox>
        </article>

        <article className="App__second-container">
          <ContentBox title={translate[lang].main.education.title}>
            {translate[lang].main.education.educationContent.map(
              (list, index) => (
                <Fragment key={index}>
                  <List
                    listClass="App__list"
                    liElement={list.map((children) => ({ children }))}
                  />
                  <div className="App__line"></div>
                </Fragment>
              )
            )}
          </ContentBox>

          <ContentBox title={translate[lang].main.personalSkills.title}>
            <List
              listClass="App__list"
              liElement={translate[lang].main.personalSkills.skills.map(
                ({ text, rate, index }) => ({
                  children: (
                    <Pill key={index} rate={rate}>
                      {text}
                    </Pill>
                  ),
                })
              )}
            />
          </ContentBox>
          <ContentBox title={translate[lang].main.technicalSkills.title}>
            <List
              listClass="App__list"
              liElement={translate[lang].main.technicalSkills.skills.map(
                ({ text, rate, index }) => ({
                  children: (
                    <Pill key={index} rate={rate}>
                      {text}
                    </Pill>
                  ),
                })
              )}
            />
          </ContentBox>
        </article>

        <ContentBox title={translate[lang].main.workExperience.title}>
          <article className="App__third-container">
              {translate[lang].main.workExperience.work.map(
                ({ position, company, date, text, skills }, index) => (
                  <WorkExperience
                    key={index}
                    jobPosition={position}
                    company={company}
                    date={date}
                  >
                    <p>{text}</p>
                    <List
                      liElement={skills.map((children) => ({ children }))}
                    />
                  </WorkExperience>
                )
              )}
          </article>
        </ContentBox>
      </Layout>
    </div>
  );
}

export default App;
