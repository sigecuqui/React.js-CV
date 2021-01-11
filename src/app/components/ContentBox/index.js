import './index.css';

function ContentBox({ children, title }) {
  return (
    <section className="second-cont-section">
      <h2>{title}</h2>
      <div className="line">
        <div className="line-on"></div>
      </div>
      {children}
    </section>
  );
}

export default ContentBox;
