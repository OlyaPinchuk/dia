
import './App.css';

import './map.css';

import {Route, Routes} from "react-router";

import 'aos/dist/aos.css';
import AboutComponent from './components/aboutComponent/aboutComponent';
import HomeComponent from './components/homeComponent/homeComponent';






function App() {

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Mulish' rel='stylesheet'></link>

      <Routes>
        <Route path='/' element={<HomeComponent></HomeComponent>}></Route>
        <Route path='/about' element={<AboutComponent></AboutComponent>}></Route>
      </Routes>

    </div>
  );
}

export default App;
