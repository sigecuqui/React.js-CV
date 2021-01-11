import "./index.css";

function Footer({title, children, classLabel = ""}) {
  return (
    <section>
      <div className={classLabel}>{title}</div>
      {children}
    </section>
  );
}

export default Footer;
