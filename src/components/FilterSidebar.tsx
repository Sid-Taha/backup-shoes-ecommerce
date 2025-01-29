// src\components\FilterSidebar.tsx
"use client"
import { useState } from "react";

type Category = 'men' | 'women' | 'unisex' | 'kids' | 'priceUnder2500' | 'price2500to7500';

const FilterSidebar = ({setPrice}: {setPrice: (num: number)=>void}) => 
  
  {
    
  const [isChecked, setIsChecked] = useState({
    men: false,
    women: false,
    unisex: false,
    kids: false,
    priceUnder2500: false,
    price2500to7500: false,
  });

  const handleCheckboxChange = (category: Category) => {
    setIsChecked((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));

    if(category == "priceUnder2500"){
      setPrice(2500)
    }
    else if (category == "price2500to7500"){
      setPrice(7500)
    }
  };

  return (
    <div className="relative w-[260px] h-full bg-white shadow-lg p-4">
      {/* Categories */}
      <div className="space-y-6">
        <div className="space-y-4">
          {/* Shoes */}
          <div className="text-lg font-semibold">Shoes</div>
          <div className="text-lg font-semibold">Sports Bras</div>
          <div className="text-lg font-semibold">Tops & T-Shirts</div>
          <div className="text-lg font-semibold">Hoodies & Sweatshirts</div>
          <div className="text-lg font-semibold">Jackets</div>
          <div className="text-lg font-semibold">Trousers & Tights</div>
          <div className="text-lg font-semibold">Shorts</div>
          <div className="text-lg font-semibold">Tracksuits</div>
          <div className="text-lg font-semibold">Jumpsuits & Rompers</div>
          <div className="text-lg font-semibold">Skirts & Dresses</div>
          <div className="text-lg font-semibold">Socks</div>
          <div className="text-lg font-semibold">Accessories & Equipment</div>
        </div>

        {/* Filter Section */}
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="text-lg font-semibold">Shop By Category</div>
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="men"
                className="h-4 w-4 mr-2"
                checked={isChecked.men}
                onChange={() => handleCheckboxChange("men")}
              />
              <label htmlFor="men" className="text-sm">Men</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="women"
                className="h-4 w-4 mr-2"
                checked={isChecked.women}
                onChange={() => handleCheckboxChange("women")}
              />
              <label htmlFor="women" className="text-sm">Women</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="unisex"
                className="h-4 w-4 mr-2"
                checked={isChecked.unisex}
                onChange={() => handleCheckboxChange("unisex")}
              />
              <label htmlFor="unisex" className="text-sm">Unisex</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="kids"
                className="h-4 w-4 mr-2"
                checked={isChecked.kids}
                onChange={() => handleCheckboxChange("kids")}
              />
              <label htmlFor="kids" className="text-sm">Kids</label>
            </div>
          </div>
        </div>

        {/* Shop by Price */}
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="text-lg font-semibold">Shop By Price</div>
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="priceUnder2500"
                className="h-4 w-4 mr-2"
                checked={isChecked.priceUnder2500}
                onChange={() => handleCheckboxChange("priceUnder2500")}
              />
              <label htmlFor="priceUnder2500" className="text-sm">Under ₹ 2,500</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="price2500to7500"
                className="h-4 w-4 mr-2"
                checked={isChecked.price2500to7500}
                onChange={() => handleCheckboxChange("price2500to7500")}
              />
              <label htmlFor="price2500to7500" className="text-sm">₹ 2,501 - ₹ 7,500</label>
            </div>
          </div>
        </div>
      </div>

      {/* Border at the bottom */}
     
    </div>
  );
};

export default FilterSidebar;
