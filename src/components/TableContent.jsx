import React, { useState, useEffect } from "react";
import axios from "axios";
import EditModal from "./EditModal";

const TableContent = ({ checked, data, setData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [viewItem, setViewItem] = useState(false);

  useEffect(() => {
    axios
      .get("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory")
      .then((response) => {
        setData(response.data);
        setError("");
        localStorage.setItem("tableData", JSON.stringify(response.data));
      })
      .catch((error) => {
        setError(error.response.statusText);
      });
    // eslint-disable-next-line
  }, []);

  const handleEdit = (index, isView) => {
    if (!checked) {
      setViewItem(isView);
      setEditItem({ ...data[index], index });
      setIsModalOpen(true);
    }
  };

  const handleDelete = (index) => {
    if (!checked) {
      const updatedData = data.filter((_, i) => i !== index);
      setData(updatedData);
      localStorage.setItem("tableData", JSON.stringify(updatedData));
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditItem(null);
  };

  const handleSave = (updatedItem) => {
    const updatedData = data.map((item, i) =>
      i === updatedItem.index ? updatedItem : item
    );
    setData(updatedData);
    localStorage.setItem("tableData", JSON.stringify(updatedData));
    handleModalClose();
  };

  return (
    <div className="px-8 py-4">
      <table className="w-full bg-[#212124]">
        <thead>
          <tr className="border-b border-slate-600">
            <th className="p-6">
              <div className="py-2 px-4 text-left rounded-xl bg-[#161718] text-[#889649] w-fit">
                Name
              </div>
            </th>
            <th className="p-6">
              <div className="py-2 px-4 text-left rounded-xl bg-[#161718] text-[#889649] w-fit">
                Category
              </div>
            </th>
            <th className="p-6">
              <div className="py-2 px-4 text-left rounded-xl bg-[#161718] text-[#889649] w-fit">
                Price
              </div>
            </th>
            <th className="p-6">
              <div className="py-2 px-4 text-left rounded-xl bg-[#161718] text-[#889649] w-fit">
                Quantity
              </div>
            </th>
            <th className="p-6">
              <div className="py-2 px-4 text-left rounded-xl bg-[#161718] text-[#889649] w-fit">
                Value
              </div>
            </th>
            <th className="p-6">
              <div className="py-2 px-4 text-left rounded-xl bg-[#161718] text-[#889649] w-fit">
                ACTION
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {!data.length && error && (
            <p className="text-3xl text-red-500 px-8 py-4 text-center w-full">
              Error: {error}
            </p>
          )}
          {data.map((item, index) => (
            <tr key={index} className="border-b border-slate-600">
              <td className="p-6">{item.name}</td>
              <td className="p-6">{item.category}</td>
              <td className="p-6">{item.price}</td>
              <td className="p-6">{item.quantity}</td>
              <td className="p-6">{item.value}</td>
              <td className="p-6">
                <i
                  className={`mx-2 cursor-pointer fa-solid fa-pen ${
                    checked ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                  onClick={() => handleEdit(index, false)}
                ></i>
                <i
                  onClick={() => handleEdit(index, true)}
                  className={`mx-2 cursor-pointer fa-solid fa-eye ${
                    checked ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                ></i>
                <i
                  className={`mx-2 fa-solid fa-trash ${
                    checked ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                  onClick={() => handleDelete(index)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <EditModal
          item={editItem}
          onSave={handleSave}
          onClose={handleModalClose}
          viewItem={viewItem}
        />
      )}
    </div>
  );
};

export default TableContent;
