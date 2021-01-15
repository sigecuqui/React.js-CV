import Header from "../Header";
import Footer from "../Footer";

function Layout({ children, setLanguage, language }) {
  return (
    <div className="App">
      <Header lang={language} setLang={setLanguage} />
      <main> {children} </main>
      <Footer lang={language} />
    </div>
  );
}

export default Layout;