function FooterBlock({ title, classLabel = "", children}) {
 return (
    <section>
      <div className={classLabel}>{title}</div>
      {children}
    </section>
  );
}

export default FooterBlock;
