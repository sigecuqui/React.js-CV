import "./index.css";

function FooterBlock({title, children, classLabel = ""}) {
  return (
    <section>
      <div className={classLabel}>{title}</div>
      {children}
    </section>
  );
}

export default FooterBlock;
