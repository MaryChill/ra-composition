import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import News from './components/News';
import Search from './components/Search';
import Bunner from './components/Bunner';
import Information from './components/Information';

function App() {

  return (
    <>
      <div className='main'>
      <Card>
          <img src="" className="card-img" alt="image cap"  />
          <h2 className="card-title">Card title</h2>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#0" className="btn">Go somewhere</a>
      </Card>
      <Card>
          <h2 className="card-title">Special title treatment</h2>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#0" className="btn">Go somewhere</a>
      </Card>
      </div>
      <div className='decomposition'>
        <News img='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0ZDM0YxRCIgZD0iTTIyIDQzYTIxIDIxIDAgMSAwIDAtNDIgMjEgMjEgMCAwIDAgMCA0MloiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjUuMyAzNS4xM2g0LjU3VjguODZoLTYuNjZjLTYuNyAwLTEwLjIyIDMuNDQtMTAuMjIgOC41IDAgNC4wMiAxLjkzIDYuNDMgNS4zNyA4Ljg4bC01Ljk5IDguODhoNC45N0wyNCAyNS4xOGwtMi4zMi0xLjU0Yy0yLjgtMS45LTQuMTctMy4zNi00LjE3LTYuNTQgMC0yLjc5IDEuOTctNC42OCA1LjcyLTQuNjhoMi4wNXYyMi43aC4wMVoiLz48L3N2Zz4=' link='#0' title='новость'/>
        <News img='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0ZDM0YxRCIgZD0iTTIyIDQzYTIxIDIxIDAgMSAwIDAtNDIgMjEgMjEgMCAwIDAgMCA0MloiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjUuMyAzNS4xM2g0LjU3VjguODZoLTYuNjZjLTYuNyAwLTEwLjIyIDMuNDQtMTAuMjIgOC41IDAgNC4wMiAxLjkzIDYuNDMgNS4zNyA4Ljg4bC01Ljk5IDguODhoNC45N0wyNCAyNS4xOGwtMi4zMi0xLjU0Yy0yLjgtMS45LTQuMTctMy4zNi00LjE3LTYuNTQgMC0yLjc5IDEuOTctNC42OCA1LjcyLTQuNjhoMi4wNXYyMi43aC4wMVoiLz48L3N2Zz4=' link='#0' title='новость 2'/>
        <Search>
          <a href="#0">видео</a>
          <a href="#0">картинки</a>
        </Search>
        <Bunner img='https://img.freepik.com/premium-photo/refreshing-nature-background-with-bokeh_948265-2082.jpg'/>
        <div className='section'>
          <Information title='погода' info='+17' link='#0' img='https://yastatic.net/s3/home/div/new_app/bender/weather/weather_new_2023/ovc_ra_sn.svg'/>
          <Information title='карты' link='#0' img='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAHlBMVEX////+QzL/RDP/RDP/QzD/RDP/YVP/koj//Pz/in8n6OTsAAAABXRSTlMAb6nbIVkii4EAAACtSURBVCjPY2DADoRMQxUdEFwW1VAgCEKIiIaCQSCMzxgKBQKoCuBKWELhAGIKE0JAASzgCmKGpYLIALgR4R0dU0E2gwVAjpjR0dEOFwCp7QACIBUMEwgDCYBMwS5gitASCje0oqOjE8WWyI6OUrjbWREOC8HudAzPYXgfoUcBVxAysIDcFhqMFOzOIAETBtR4CEKJKKC5BigCLCgmgD0Ugha5rAFoAkwKOJIBAwBDxVYBjfiHdAAAAABJRU5ErkJggg=='/>
        </div>
      </div>
    </>
  )
}

export default App
