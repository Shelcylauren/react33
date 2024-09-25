import React, { useState } from 'react';
import myImage1 from '../image/A.jpg'
import myImage2 from '../image/Q.jpg'


const productsData = [
  { id: 1, name: 'Doxy-Denk 200', price:1760, image: myImage1 },
  { id: 2, name: 'Doliprane 1000', price: 1500, image: myImage2},
  { id: 3, name: 'Artemether Comprime', price: 3000, image: '/images/product3.jpg' },
  { id: 4, name: 'CARDIOASPIRINE', price: 5000, image: '/images/product4.jpg' },
  { id: 5, name: 'Product 5', price: 30, image: '/images/product5.jpg' },
  { id: 6, name: 'Product 6', price: 35, image: '/images/product6.jpg' },
  { id: 7, name: 'Product 7', price: 37, image: '/images/product7.jpg' },
  { id: 8, name: 'Product 8', price: 33, image: '/images/product8.jpg' },
  { id: 9, name: 'Vitamine B-Complexe', price:1000, image: '/images/product9.jpg' },
  { id: 10, name: 'Product 10', price: 39, image: '/images/product10.jpg' },
  { id: 11, name: 'Product 11', price: 70, image: '/images/product11.jpg' },
];

function Product() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 2; // Nombre de produits par page

  // Filtrer les produits par mot-clé
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Logique de pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-transparent min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-4">Our products</h2>

      {/* Barre de recherche avec style arrondi */}
      <input
        type="text"
        placeholder="Search your product."
        className="border border-gray-300 p-2 mb-4 w-1/2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Liste des produits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700">Price:{product.price} FCFA</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber + 1)}
            className={`px-3 py-1 mx-1 border rounded-full ${currentPage === pageNumber + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {pageNumber + 1}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-3 py-1 mx-1 border rounded-full bg-blue-500 text-white"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
