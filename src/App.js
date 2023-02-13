import Header from './Components/header';
import APIBody from './Components/APIbody';
import MainBody from './Components/mainBody';
import Footer from './Components/footer';
import PhotoBody from "./Components/PhotoBody";
import './App.css';
import 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


async function getFactAboutCat(){
    const url = await fetch('https://catfact.ninja/fact');
    const result = await url.json();
    return result.fact;
}

async function getCatLink() {
    const url = await fetch('https://aws.random.cat/meow');
    const result = await url.json();
    return result.file.replace('\\', '');
}

function getTime(){
    return new Date().toLocaleString();
}

function App() {
  return (
      <div>
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path='*' element={<MainBody />} />
              <Route path='/api' element={<APIBody getFact = {getFactAboutCat} />} />
              <Route path='/photo' element={<PhotoBody catLink={getCatLink} />} />
          </Routes>
      </BrowserRouter>
          <Footer time={getTime()}/>
      </div>
  );
}

export default App;
