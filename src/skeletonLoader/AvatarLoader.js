import "./loader.css";

const AvatarLoader = ({ width="2rem", height="2rem" }) => {
  return (
      <div className="skeleton avatar-loader" style={{ width, height }} />
  );
};

export default AvatarLoader;
