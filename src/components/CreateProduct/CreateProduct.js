import React from 'react';

function CreateProduct() {
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
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
              Select Description
            </label>
            <input
              type="textarea"
              id="productName"
              name="productName"
              className="mt-1 p-2 block w-full rounded-md border border-gray-900 focus:border-indigo-600 focus:ring focus:ring-indigo-200"
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
          <div className="text-center">
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
