import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import projects from "./data/projects";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section>
          <h2 id="project-header">Projects</h2>
          <div id="project-card-container">
            {projects.map((project, index) => (
              <Card
                key={index}
                alt={project.alt}
                src={project.src}
                title={project.title}
                details={project.details}
                gitLink={project.gitLink}
                openLink={project.openLink}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
