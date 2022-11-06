import { useEffect, useState } from "react";
import ActionLoader from "../skeletonLoader/ActionsLoader";
import TitleLoader from "../skeletonLoader/TitleLoader";

const HeaderbarLoader = ({ children, isLoading }) => {
  return isLoading ? (
    <>
      <TitleLoader />
      <ActionLoader />
    </>
  ) : (
    <>{children}</>
  );
};

const Headerbar = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <section className="headerbar-container">
      <HeaderbarLoader isLoading={isLoading}>
        <span className="title">Skeleton Loader Demo</span>
        <div className="profile-menu">
          <button>Logout</button>
        </div>
      </HeaderbarLoader>
    </section>
  );
};

export default Headerbar;
