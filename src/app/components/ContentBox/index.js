import './index.css';

function ContentBox({ children, title }) {
  return (
    <section className="App__container-with-line">
      <h2>{title}</h2>
      <div className="App__line">
        <div className="App__line--on"></div>
      </div>
      {children}
    </section>
  );
}

export default ContentBox;
