import "./index.css";

function Link({ image, link, classLink = "", imgSrc = "", imgAlt = "", imgClass = "", children }) {
  return (
    <a href={link} className={classLink} target="_blank" rel="noreferrer">
    {image && <img src={imgSrc} alt={imgAlt} className={imgClass}></img>}
    {children}
  </a>
  );
}

export default Link;
