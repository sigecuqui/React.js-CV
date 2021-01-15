import "./index.css";

function WorkExperience({ jobPosition, company, date, children }) {
  return (
    <section className="App__third-container--border">
      <div className="align-center">
        <h4 className="App__third-container--job-position">{jobPosition}</h4>
        <br />
        {company}
        <br />
        {date}
      </div>
      {children}
    </section>
  );
}

export default WorkExperience;
