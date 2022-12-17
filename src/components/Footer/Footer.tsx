import "./Footer.scss";

const Footer = () => {
  return (
    <footer
      /* Todo: move to own style file */
      style={{
        position: "relative",
        bottom: "0%",
        left: "0%"
      }}
    >
      <p>
        <b>Privacy Policy</b> | Copyright (c) 2022 Managed Solution LLC
      </p>
    </footer>
  );
};

export default Footer;