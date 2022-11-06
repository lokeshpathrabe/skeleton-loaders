import { useEffect, useState } from "react";
import {
  AvatarLoader,
  BlockLoader,
  FooterLoader,
} from "../skeletonLoader";
import TitleLoader from "../skeletonLoader/TitleLoader";
import shoesIcon from "./../assets/icons/shoes-icon.png";
import "./style.css";

const ProductCardLoader = ({ children, isLoading }) => {
    return isLoading ? (
      <div className="product-card">
          <AvatarLoader width="46px" height="46px" />
       
        <div className="product-image">
            <BlockLoader height="100%" width="100%" />
        </div>
  
        <div className="product-footer">
            <>
              <TitleLoader />
              <FooterLoader count={2} />
            </>
        </div>
      </div>
    ) : (
      <>{children}</>
    );
  };

const ProductCard = ({brand, src, description, price}) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <ProductCardLoader isLoading={isLoading}>
      <div className="product-card">
        <div className="avatar">
          <img src={shoesIcon} width={24} height={24} alt="shoe-icon" />
        </div>

        <div className="product-image">
          <img src={src} alt="nike shoes" />
        </div>

        <div className="product-footer">
          <h3>{brand}</h3>
          <div>{description}</div>
          <div>INR {price}</div>
        </div>
      </div>
    </ProductCardLoader>
  );
};

export default ProductCard;
