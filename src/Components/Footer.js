export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">Connect with me on!</div>
      <ul className="list-non-bullet">
        <li className="list-item-inline">
          <a
            target="_blank"
            rel="noreferrer"
            className="link"
            href="https://github.com/AnkitaBagale"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li className="list-item-inline">
          <a
            target="_blank"
            rel="noreferrer"
            className="link"
            href="https://twitter.com/AnkitaB1108"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="list-item-inline">
          <a
            target="_blank"
            rel="noreferrer"
            className="link"
            href="https://www.linkedin.com/in/ankita-bagale1108"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};
