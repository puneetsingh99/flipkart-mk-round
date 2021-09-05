import React from "react";
const brandImage =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

export const Navbar = () => {
  return (
    <header className="bg-brand py-4 sticky top-0">
      <div className="w-10/12 m-auto">
        <div className="w-20">
          <img src={brandImage} alt={`filpkart`} />
        </div>
      </div>
    </header>
  );
};
