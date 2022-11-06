import "./loader.css";

const FooterLoader = ({ count }) => {
  const FooterDiv = <div className="skeleton footer-loader" />;
  return <>{new Array(count).fill(FooterDiv)}</>;
};

export default FooterLoader;
