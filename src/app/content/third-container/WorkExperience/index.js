import "./index.css";

function WorkExperience({ jobPosition, company, date, children }) {
  return (
    <section>
      <div className="align-center">
        <h4 className="job-position">{jobPosition}</h4>
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
