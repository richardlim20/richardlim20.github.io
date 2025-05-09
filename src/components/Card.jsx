const Card = ({ src, alt, title, details, gitLink, openLink }) => {
  return (
    <>
      <div class="project-card">
        <img class="screenshot-img" src={src} alt={alt} />
        <div class="card-details">
          <div class="card-header">
            <div class="playfair">{title}</div>
            {gitLink && (
              <a href={gitLink} target="_blank" rel="noopener noreferrer">
                <img
                  class="logo"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                  alt="Github link"
                />
              </a>
            )}
            {openLink && (
              <a href={openLink} target="_blank" rel="noopener noreferrer">
                <img
                  class="logo"
                  src="assets/open-in-new.svg"
                  alt="Open in new"
                />
              </a>
            )}
          </div>
          <p>{details}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
