import React, { useState } from "react";

const EditModal = ({ item, onSave, onClose }) => {
  const [editedItem, setEditedItem] = useState(item);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedItem);
  };
  return (
    <div className="bg-[#292B27] fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#292B27] p-8 rounded-xl w-[30%]">
        <div className="rounded-xl mb-4 flex justify-between">
          <p className="text-4xl">Edit Product</p>
          <div
            onClick={onClose}
            className="cursor-pointer rounded-lg py-2 px-4 bg-[#333] text-[#DEFF55]"
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <p className="text-[#C2C2C1] text-2xl mb-8">{editedItem.name}</p>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 w-full">
            <div className="mb-4 w-full">
              <label className="block mb-2 text-[#C2C2C1]">Category</label>
              <input
                type="text"
                name="category"
                value={editedItem.category}
                onChange={handleChange}
                className="rounded-xl px-4 py-2 w-full text-black bg-[#3F413D] text-[#C2C2C1]"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block mb-2 text-[#C2C2C1]">Price</label>
              <input
                type="text"
                name="price"
                value={editedItem.price}
                onChange={handleChange}
                className="rounded-xl px-4 py-2 w-full text-black bg-[#3F413D] text-[#C2C2C1]"
              />
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="mb-4 w-full">
              <label className="block mb-2 text-[#C2C2C1]">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={editedItem.quantity}
                onChange={handleChange}
                className="rounded-xl px-4 py-2 w-full text-black bg-[#3F413D] text-[#C2C2C1]"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block mb-2 text-[#C2C2C1]">Value</label>
              <input
                type="text"
                name="value"
                value={editedItem.value}
                onChange={handleChange}
                className="rounded-xl px-4 py-2 w-full text-black bg-[#3F413D] text-[#C2C2C1]"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 mt-4">
            <button onClick={onClose} className="text-[#A0B845]">
              Cancel
            </button>

            <button
              className="bg-[#434541] text-[#60625F] px-4 py-2 rounded-xl hover:text-white"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
