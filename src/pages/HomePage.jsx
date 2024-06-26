import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import TableContent from "../components/TableContent";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState(false);

  const totalProducts = data.length;

  // Calculate total store value
  let totalStoreValue = 0;
  data.forEach((item) => {
    if (item.value && !isNaN(parseFloat(item.value.replace(/[^\d.-]/g, "")))) {
      totalStoreValue += parseFloat(item.value.replace(/[^\d.-]/g, ""));
    }
  });

  // Calculate out of stock items
  let outOfStockItems = data.filter((item) => +item.quantity === 0).length;

  // Calculate number of unique categories
  const categories = [...new Set(data.map((item) => item.category))];
  const numberOfCategories = categories.length;

  // Update cardDetails array
  const cardDetails = [
    {
      label: "Total Product",
      value: totalProducts,
      icon: <i className="fa-solid fa-cart-shopping"></i>,
    },
    {
      label: "Total store value",
      value: `$${totalStoreValue.toFixed(2)}`,
      icon: <i className="fa-solid fa-dollar-sign"></i>,
    },
    {
      label: "Out of stock",
      value: outOfStockItems.toString(),
      icon: <i className="fa-solid fa-circle-xmark"></i>,
    },
    {
      label: "No of category",
      value: numberOfCategories.toString(),
      icon: <i className="fa-solid fa-icons"></i>,
    },
  ];
  return (
    <div className="bg-[#161718] h-full container mx-auto text-white">
      <Navbar checked={checked} setChecked={setChecked} />
      <div className="text-5xl py-4 px-8">Inventory stats</div>
      <div className="flex gap-4 py-4 px-8">
        {cardDetails.map((item, index) => {
          return (
            <Cards
              key={index}
              label={item.label}
              value={item.value}
              icon={item.icon}
            />
          );
        })}
      </div>
      <TableContent data={data} setData={setData} checked={checked} />
    </div>
  );
};

export default HomePage;
