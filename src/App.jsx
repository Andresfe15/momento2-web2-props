
import React from 'react';
import ProductsList from './Components/ProductsList';
import './styles.css';

const productosPostobon = [
  {
    nombre: 'Kola Postobon',
    imagen: 'imagen1.png',
    descripcion: 'Didfruta nuestra nueva Kola Postobon, Edicion limitada, en sus diferentes presentaciones!!',
    precio: 5500,
  },
  {
    nombre: 'Agua Cristal',
    imagen: 'imagen2.png',
    descripcion: 'Reconocida por ser el agua de vida que refresca los mejores momentos, ahora con gas.',
    precio: 4500,
  },
  {
    nombre: 'Bretaña',
    imagen: 'imagen3.png',
    descripcion: 'Es la bebida carbonatada tipo soda, sin calorias, con burbujas unicas y máxima sensacion refrescante.',
    precio: 4000,
  },
  {
    nombre: '7Up',
    imagen: 'imagen4.png',
    descripcion: 'Si te gusta disfrutar de la vida de una manera descomplicada, esta gaseosa es para ti!',
    precio: 5000,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Productos Potobon:</h1>
      <ProductsList productos={productosPostobon} />
    </div>
  );
}

export default App;

