import style from "./Footer.module.css";

function Footer(props) {
  return (
    <footer>
      <div>
        <p>{props.author}</p>
        <p>{props.message}</p>
      </div>
    </footer>
  );
}

export default Footer;
