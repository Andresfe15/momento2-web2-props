
import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../Components/ProductCard';

function ProductsList({ productos }) {
  return (
    <ol className="products-list">
      {productos.map((producto, index) => (
        <li key={index} className="product-list-item">
          <ProductCard
            nombre={producto.nombre}
            imagen={producto.imagen}
            descripcion={producto.descripcion}
            precio={producto.precio}
          />
        </li>
      ))}
    </ol>
  );
}

ProductsList.propTypes = {
  productos: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      imagen: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductsList;
