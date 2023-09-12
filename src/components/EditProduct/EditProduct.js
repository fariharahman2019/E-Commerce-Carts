import React, { useState } from 'react';

function EditProduct() {
  const [product, setProduct] = useState({
    title: '',
    category: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-1" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-400"
            value={product.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-1" htmlFor="category">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-400"
            value={product.category}
            onChange={handleInputChange}
          >
            <option value="">Select a category</option>
            <option value="category1">Clothes</option>
            <option value="category2">Electronics</option>
            <option value="category3">Accessories</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows="4"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-400 h-48"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>
        <div class="grid grid-cols-3 gap-4">
        <div>
            <label for="input1" class="block text-gray-600 font-semibold mb-1">Price</label>
            <input type="text" id="input1" class="w-full p-2 border rounded-md focus:outline-none focus:border-blue-400" />
        </div>
        <div>
            <label for="input2" class="block text-gray-600 font-semibold mb-1">Rent</label>
            <input type="text" id="input2" class="w-full p-2 border rounded-md focus:outline-none focus:border-blue-400" />
        </div>
        <div className='mt-7'>
        <select
            name="category"
            id="category"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-400"
            value={product.category}
            onChange={handleInputChange}
          >
            <option value="">Select category</option>
            <option value="category1">Per Hour</option>
            <option value="category2">Per Day</option>
            <option value="category3">Per Month</option>
          </select>
        </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 m-5"
        > Edit Product
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
