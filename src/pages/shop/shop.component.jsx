import React, { useState } from "react";
import ShopData from "./shop.data";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";

const ShopPage = () => {
  const [collections] = useState(ShopData);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
