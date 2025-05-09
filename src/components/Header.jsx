const Header = () => {
  return (
    <>
    <header>
      <div id="profile-image-container">
        <img
          id="profile-image"
          src="assets/profile-placeholder.jpg"
          alt="Profile Image"
        />
        <div id="profile-image-text">Richard Lim</div>
      </div>
      <div id="about-me-container">
        <h2 id="about-me-header">About Me</h2>
        <p id="about-me-description">
          Recent Bachelor of IT graduate with a strong background in full-stack
          development and security. Passionate about creating responsive,
          visually appealing, and secure web experiences for users. Pursuing
          role in IT to collaborate with likeminded individuals in the IT field.
          Currently working through the Odin Project curriculum to polish and
          refresh memory on programming skills.
        </p>
        <div id="about-me-git">
          <a href="https://github.com/richardlim20" target="_blank">
            <img
              class="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="Github link"
            />
          </a>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
