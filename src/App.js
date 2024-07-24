import './App.css';
import { news } from './utils/news.js';
import Article from './components/Article.jsx';
import { useState } from 'react';
import NewsDetail from './components/NewsDetail.jsx';
import SortButtons from './components/SortButtons.jsx';

let isAscAlpha = true;

function App() {
  const [newsFeed, setNewsFeed] = useState(news);
  const [newsDetail, setNewsDetail] = useState(-1); // es el indice de la noticia que vamos a ver en detalle

  const deleteClick = (indice) => {
    // logica para borrar mi noticia
    /// const newArray = array.splice(index, elementos a borrar, ...elementos a agregar)
    // metodo erroneo porque splice manipula el array original y esto va en contra del funcionamiento de REACT
    //setNewsFeed(newsFeed.splice(indice, 1));
    setNewsFeed(newsFeed.filter((_, i) => i !== indice));
  }

  const showNewsDetail = (indice) => {
    setNewsDetail(indice);
  }

  const alphaSort = () => {
    const newArray = newsFeed.toSorted((a, b) => {
      if (isAscAlpha) {
        return a.titulo.localeCompare(b.titulo);
      } else {
        return b.titulo.localeCompare(a.titulo);
      }
    });
    isAscAlpha = !isAscAlpha;
    setNewsFeed(newArray);
  }
   
  // const content = () => {
  //   // map se ejecuta sobre un array[], map nos devuelve por defecto: elemento, indice, array
  //   return newsFeed.map((elemento, indice) => (
  //     <Article 
  //       key={indice}
  //       articulo={elemento} 
  //     />
  //   ));
  // };

  let content;
  if (newsDetail < 0) { // cuando son todas las noticias/articulos
    content = newsFeed.map((elemento, indice) => (
      <Article 
        key={indice}
        articulo={elemento}
        deleteFunction={deleteClick}
        indice={indice}
        showDetail={showNewsDetail}
      />
    ));
  } else { // cuando es un articulo o newsDetail
    content = 
    <NewsDetail 
      indice={newsDetail}
      newsFeed={newsFeed}
      goBack={showNewsDetail}
    />;
  }

  return (
    <>
      <div class="container">
        <br />
      <p>Sort news by: 
        <SortButtons 
          sortAlpha={isAscAlpha}
          alphaSort={alphaSort}
        />
      </p>
      {content}
      </div>
    </>
  );
}

export default App;

/*

* Header (componente principal)
  - logo (imagen)
  - titulo de la app (texto)
  - busqueda (input/form)
  - botones sociales (links, botones-link, imagen-link)
  - menu (navs)
  - login/singup (botones, link)

* Content (contenedor)
  - titulo hero
  - articulo/cards (componente)
    + titulo
    + descripcion
    + imagen
    + boton

* Aside
  - busqueda
  - lista de cateforias/aticulos
  - publicidad

* Footer
  - menu
  - contacto
  - iconos sociales


*/