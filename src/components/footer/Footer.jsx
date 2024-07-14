import "./Footer.css";

function Footer(props) {
  return (
    <footer>
      <div>
        <p className="message">{props.message}</p>
        <p className="author">{props.author}</p>

      </div>
    </footer>
  );
}

export default Footer;
