import './FooterStyles.css'

const Footer = () => {
  return (
    <footer>
      <small>
        &copy; {new Date().getFullYear()} Football History Archives. All Rights Reserved.
      </small>
    </footer>
  );
};

export default Footer;
