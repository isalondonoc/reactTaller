import { createRoot } from 'react-dom/client'
import { Person } from './saludo.jsx'
import { Traduccion } from './idiomas.jsx'
import { Contenedor } from './contenedor.jsx'
//import { Contador } from './contador.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <>
    <Contenedor>
      <Traduccion nombre="Jose" idioma="jp" />
      <Person nickname="Isabela" />
    </Contenedor>
  </>
);