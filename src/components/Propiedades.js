//./src/components/propiedades.js
import React, { useState, useEffect } from 'react';
import "../Propiedad.css";
import "../Filtros.css"
import PropiedadItem from './PropiedadItem';
import propiedadesData from '../data/propiedades.json';

function Propiedades() {
  const [propiedades, setPropiedades] = useState([]);
  const [filtros, setFiltros] = useState({
    bedrooms: "",
    bathrooms: "",
    parkings: "",
    precioMin: "",
    precioMax: "",
  });
  const [filtrar, setFiltrar] = useState(false);

  useEffect(() => {
    const cargarPropiedades = async () => {
      setPropiedades(propiedadesData);
    };
    cargarPropiedades();
  }, []);

  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const propiedadesFiltradas = filtrar
    ? propiedades.filter(propiedad => {
        return (
          (filtros.bedrooms === "" || propiedad.Bedrooms === parseInt(filtros.bedrooms)) &&
          (filtros.bathrooms === "" || propiedad.Bathrooms === parseInt(filtros.bathrooms)) &&
          (filtros.parkings === "" || propiedad.Parking === parseInt(filtros.parkings)) &&
          (filtros.precioMin === "" || propiedad["Sale Price"] >= parseInt(filtros.precioMin)) &&
          (filtros.precioMax === "" || propiedad["Sale Price"] <= parseInt(filtros.precioMax))
        );
      })
    : propiedades;

  return (
    <div className='content'>
    <div className="filtros-container">
    <label for="bedrooms">Bedrooms:</label>
        <input id="bedrooms" type="number" name="bedrooms" value={filtros.bedrooms} onChange={handleFiltroChange} class="dormitorios" /> <br></br>

        <label for="bathrooms">Bathrooms:</label>
        <input id="bathrooms" type="number"  name="bathrooms" value={filtros.bathrooms} onChange={handleFiltroChange} class="baños" /><br></br>

        <label for="parkings">Parkings:</label>
        <input id="parkings" type="number" name="parkings" value={filtros.parkings} onChange={handleFiltroChange} class="parqueos" /><br></br>

        <label for="precioMin">Minimal Price:</label>
        <input id="precioMin" type="number" name="precioMin" value={filtros.precioMin} onChange={handleFiltroChange} class="precioMin" /> <br></br> 

        <label for="precioMax">Maximum Price:</label>
        <input id="precioMax" type="number" name="precioMax" value={filtros.precioMax} onChange={handleFiltroChange} class="precioMax" /> <br></br> 


        <button type="button" onClick={() => setFiltrar(true)} class="boton-buscar">Buscar</button>
    </div>
    <div className="propiedades-container">
        

      {propiedadesFiltradas.map((propiedad) => (
        <PropiedadItem key={propiedad.Id} propiedad={propiedad} />
      ))}
    </div>
    </div>
  );
}


export default Propiedades;

