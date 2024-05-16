import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ nombre, imagen, descripcion, precio }) {
  return (
    <div className="product-card">
      <h2>{nombre}</h2>
      <img src={imagen} alt={nombre} />
      <p>{descripcion}</p>
      <p className="precio">${precio}</p>
      <button className="buy-button">Comprar Ahora</button>
    </div>
  );
}

ProductCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
};

export default ProductCard;

