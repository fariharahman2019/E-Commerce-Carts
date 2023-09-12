import React, { useState } from 'react';

function CreateProduct() {
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
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-lg w-96">
        <h1 className="text-2xl font-semibold mb-4">Create Product</h1>
        <form>
        <div className="mb-4">
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
              Select a Title for Your Product
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              className="mt-1 p-2 block w-full rounded-md border border-gray-900 focus:border-indigo-600 focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
              Select Categories
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              className="mt-1 p-2 block w-full rounded-md border border-gray-900 focus:border-indigo-600 focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-1" htmlFor="description">
            Select Description
          </label>
          <textarea
            name="description"
            id="description"
            rows="4"
            className="w-full p-2 border rounded-md focus:outline-none border-gray-900 focus:border-blue-400 h-48"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>
          <div className="mb-4">
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
              Select Price
            </label>
            <input
              type="text"
              placeholder='Purchase Price'
              id="productName"
              name="productName"
              className="mt-1 p-2 block w-full rounded-md border border-gray-900 focus:border-indigo-600 focus:ring focus:ring-indigo-200"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
        <div>
            <label for="input1" class="block text-gray-600 font-semibold mb-1">Price</label>
            <input type="text" id="input1" class="border-gray-900 w-full p-2 border rounded-md focus:outline-none focus:border-blue-400" />
        </div>
        <div className='mt-7'>
        <select
            name="category"
            id="category"
            className="w-full p-2 border border-gray-900 rounded-md focus:outline-none focus:border-blue-400"
            value={product.category}
            onChange={handleInputChange}
          >
            <option value="">Select Option</option>
            <option value="category1">Per Hour</option>
            <option value="category2">Per Day</option>
            <option value="category3">Per Month</option>
          </select>
        </div>
        </div>

          <div className="text-center m-5">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            > Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
