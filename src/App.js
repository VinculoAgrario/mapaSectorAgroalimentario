import React, { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Polyline, Marker, Popup ,Tooltip} from 'react-leaflet';

import imagen from "./img/marker.png";
import logo from "./img/logo.png";
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet';



import './App.css';

function App() {

  var database = require('./data/database.json');

  /* Categorías */
  const [cat01, setCat01] = useState(false); // Condiciones habilitantes
  const [cat02, setCat02] = useState(false); // Entorno
  const [cat03, setCat03] = useState(false); // Formación
  const [cat04, setCat04] = useState(false); // I+D+I
  const [cat05, setCat05] = useState(false); // Sector productivo
  const [cat06, setCat06] = useState(false); // Servicios cadena de valor
  const [cat07, setCat07] = useState(false); // Transferencia, Extensión, Vinculación e Innovación

  /* Subcategorías */

  const [subcat01, setSubcat01] = useState(false); // Articulación/Vinculación
  const [subcat02, setSubcat02] = useState(false); // Educación Técnico-Profesional
  const [subcat03, setSubcat03] = useState(false); // Emprendimiento
  const [subcat04, setSubcat04] = useState(false); // Empresa
  const [subcat05, setSubcat05] = useState(false); // Empresa Lider

  const [subcat06, setSubcat06] = useState(false); // Políticas y Normas (dice entorno en la db)
  const [subcat07, setSubcat07] = useState(false); // Espacios Colaborativos
  const [subcat08, setSubcat08] = useState(false); // Extensionismo
  const [subcat09, setSubcat09] = useState(false); // Financiamiento
  const [subcat10, setSubcat10] = useState(false); // Formación Técnico-Profesional

  const [subcat20, setSubcat20] = useState(false); // Formación Profesional

  const [subcat11, setSubcat11] = useState(false); // Gremios y Cooperativas
  const [subcat12, setSubcat12] = useState(false); // Hub de TT
  const [subcat13, setSubcat13] = useState(false); // I+D
  const [subcat14, setSubcat14] = useState(false); // Incubadoras
  const [subcat15, setSubcat15] = useState(false); // Laboratorios

  const [subcat16, setSubcat16] = useState(false); // Microempresa
  const [subcat17, setSubcat17] = useState(false); // Negocios
  const [subcat18, setSubcat18] = useState(false); // Servicios Tecnológicos Varios
  const [subcat19, setSubcat19] = useState(false); // Transferencia Tecnológica
  

  const [selectedPoints, setSelectedPoints] = useState([]);
  const markerIcon = new Icon({iconUrl: imagen, iconSize: [30, 30]})



  const Checkbox = ({ label, value, onChange }) => {
    return (
      <div>
        <label>
          <input type="checkbox" checked={value} onChange={onChange} />
          {label}
        </label>
      </div>
      
    );
  };

  const refreshMap = () => {

    var clicked = [];
    if (subcat01) {clicked.push("Articulación/Vinculación")}
    if (subcat02) {clicked.push("Educación Técnico-Profesional")}
    if (subcat03) {clicked.push("Emprendimiento")}
    if (subcat04) {clicked.push("Empresa")}
    if (subcat05) {clicked.push("Empresa líder")}
    if (subcat06) {clicked.push("Entorno")}
    if (subcat07) {clicked.push("Espacios colaborativos")}
    if (subcat08) {clicked.push("Extensionismo")}
    if (subcat09) {clicked.push("Financiamiento")}
    if (subcat10) {clicked.push("Formación Técnico-Profesional")}

    if (subcat20) {clicked.push("Formación Profesional")}

    if (subcat11) {clicked.push("Gremios y Cooperativas")}
    if (subcat12) {clicked.push("Hub de TT")}
    if (subcat13) {clicked.push("I+D")}
    if (subcat14) {clicked.push("Incubadoras")}
    if (subcat15) {clicked.push("Laboratorios")}
    if (subcat16) {clicked.push("Microempresa")}
    if (subcat17) {clicked.push("Negocios")}
    if (subcat18) {clicked.push("Servicios tecnológicos varios")}
    if (subcat19) {clicked.push("Transferencia tecnológica")}

    var include = [];

    database.forEach(function(point) {
      if (clicked.includes(point.Subcategoria)){
        include.push(point);
      }
    });

    setSelectedPoints(include);
  }
  
  
  const selectCat01 = () => {
    if (cat01 === true) {
      setCat01(false);
      setSubcat09(false);
    } else {
      setCat01(true);
      setSubcat09(true);
    }
  };

  const selectCat02 = () => {
    if (cat02 === true) {
      setCat02(false);
      setSubcat06(false);
    } else {
      setCat02(true);
      setSubcat06(true);
    }
  };

  const selectCat03 = () => {
    if (cat03 === true) {
      setCat03(false);
      setSubcat02(false);
      setSubcat10(false);
      setSubcat20(false);
    } else {
      setCat03(true);
      setSubcat02(true);
      setSubcat10(true);
      setSubcat20(true);
    }
  };

  const selectCat04 = () => {
    if (cat04 === true) {
      setCat04(false);
      setSubcat13(false);
    } else {
      setCat04(true);
      setSubcat13(true);
    }
  };

  const selectCat05 = () => {
    if (cat05 === true) {
      setCat05(false);
      setSubcat04(false);
      setSubcat05(false);
      setSubcat16(false);
    } else {
      setCat05(true);
      setSubcat04(true);
      setSubcat05(true);
      setSubcat16(true);
    }
  };

  const selectCat06 = () => {
    if (cat06 === true) {
      setCat06(false);
      setSubcat15(false);
      setSubcat17(false);
      setSubcat18(false);
    } else {
      setCat06(true);
      setSubcat15(true);
      setSubcat17(true);
      setSubcat18(true);
    }
  };

  const selectCat07 = () => {
    if (cat07 === true) {
      setCat07(false);
      setSubcat01(false);
      setSubcat03(false);
      setSubcat07(false);
      setSubcat08(false);
      setSubcat11(false);
      setSubcat12(false);
      setSubcat14(false);
      setSubcat19(false);
    } else {
      setCat07(true);
      setSubcat01(true);
      setSubcat03(true);
      setSubcat07(true);
      setSubcat08(true);
      setSubcat11(true);
      setSubcat12(true);
      setSubcat14(true);
      setSubcat19(true);
    }
  };






  // Funciones Subcategorias

  const selectsub01 = () => {
    setSubcat01(!subcat01);
  };
  const selectsub02 = () => {
    setSubcat02(!subcat02);
  };
  const selectsub03 = () => {
    setSubcat03(!subcat03);
  };
  const selectsub04 = () => {
    setSubcat04(!subcat04);
  };
  const selectsub05 = () => {
    setSubcat05(!subcat05);
  };


  const selectsub06 = () => {
    setSubcat06(!subcat06);
  };
  const selectsub07 = () => {
    setSubcat07(!subcat07);
  };
  const selectsub08 = () => {
    setSubcat08(!subcat08);
  };
  const selectsub09 = () => {
    setSubcat09(!subcat09);
  };
  const selectsub10 = () => {
    setSubcat10(!subcat10);
  };

  const selectsub20 = () => {
    setSubcat20(!subcat20);
  };

  const selectsub11 = () => {
    setSubcat11(!subcat11);
  };
  const selectsub12 = () => {
    setSubcat12(!subcat12);
  };
  const selectsub13 = () => {
    setSubcat13(!subcat13);
  };
  const selectsub14 = () => {
    setSubcat14(!subcat14);
  };
  const selectsub15 = () => {
    setSubcat15(!subcat15);
  };

  const selectsub16 = () => {
    setSubcat16(!subcat16);
  };
  const selectsub17 = () => {
    setSubcat17(!subcat17);
  };
  const selectsub18 = () => {
    setSubcat18(!subcat18);
  };
  const selectsub19 = () => {
    setSubcat19(!subcat19);
  };

  return (
    <div>
      <div className="Header">

        <div className="HeaderTittle">
          Mapeo entidades sistema CTCI sector agroalimentario, Región del Maule
        </div>

        <div className="HeaderImage">
          <img src={logo} alt="" />
        </div>

      </div>

      <div className="Container">
        <div className="Selector">

          <div className="Categories">
            <p>Subsistemas de CTCI</p>
            <Checkbox label="Condiciones Habilitantes" value={cat01} onChange={selectCat01}/>
            <Checkbox label="Entorno" value={cat02} onChange={selectCat02}/>
            <Checkbox label="Formación" value={cat03} onChange={selectCat03}/>
            <Checkbox label="Investigación y Desarrollo" value={cat04} onChange={selectCat04}/>
            <Checkbox label="Sector Productivo" value={cat05} onChange={selectCat05}/>
            <Checkbox label="Servicios Cadena de Valor" value={cat06} onChange={selectCat06}/>
            <Checkbox label="Transferencia, Extensión, Vinculación e Innovación" value={cat07} onChange={selectCat07}/>
          </div>

          <div className="SubCategories">
            <p>Componentes de CTCI</p>

            <Checkbox label="Articulación/Vinculación" value={subcat01} onChange={selectsub01}/>
            <Checkbox label="Educación Técnico-Profesional" value={subcat02} onChange={selectsub02}/>
            <Checkbox label="Emprendimiento" value={subcat03} onChange={selectsub03}/>
            <Checkbox label="Empresa" value={subcat04} onChange={selectsub04}/>
            <Checkbox label="Empresa Lider" value={subcat05} onChange={selectsub05}/>

            <Checkbox label="Políticas y Normas" value={subcat06} onChange={selectsub06}/>
            <Checkbox label="Espacios Colaborativos" value={subcat07} onChange={selectsub07}/>
            <Checkbox label="Extensionismo" value={subcat08} onChange={selectsub08}/>
            <Checkbox label="Financiamiento" value={subcat09} onChange={selectsub09}/>
            <Checkbox label="Formación Técnico-Profesional" value={subcat10} onChange={selectsub10}/>

            <Checkbox label="Formación Profesional" value={subcat20} onChange={selectsub20}/>

            <Checkbox label="Gremios y Cooperativas" value={subcat11} onChange={selectsub11}/>
            <Checkbox label="Hub de TT" value={subcat12} onChange={selectsub12}/>
            <Checkbox label="Investigación y Desarrollo" value={subcat13} onChange={selectsub13}/>
            <Checkbox label="Incubadoras" value={subcat14} onChange={selectsub14}/>
            <Checkbox label="Laboratorios" value={subcat15} onChange={selectsub15}/>

            <Checkbox label="Microempresa" value={subcat16} onChange={selectsub16}/>
            <Checkbox label="Negocios" value={subcat17} onChange={selectsub17}/>
            <Checkbox label="Servicios Tecnológicos Varios" value={subcat18} onChange={selectsub18}/>
            <Checkbox label="Transferencia Tecnológica" value={subcat19} onChange={selectsub19}/>


          </div>

          <button onClick={refreshMap}>Buscar</button>
          

        </div>
        <div className="Map">
          <div>
            <MapContainer center={[-35.607668, -71.538196]} zoom={8} className="MapContainer">
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {selectedPoints.map(point => {
                  var positions = []
                  positions.push(point.x)
                  positions.push(point.y)
                  return (
                  <Marker position={positions} icon={markerIcon}>
                    <Tooltip>
                      <div><b>Nombre: </b>{point.Nombre}</div>
                      <div><b>Subsistema: </b>{point.Categoria}</div>
                      <div><b>Componente: </b>{point.Subcategoria}</div>
                    </Tooltip>
                  </Marker>
                  )
                  })
                }
                
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
