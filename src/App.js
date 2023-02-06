import {Route, Routes} from "react-router";
import 'aos/dist/aos.css';
import AboutComponent from './components/aboutComponent/aboutComponent';
import HomeComponent from './components/homeComponent/homeComponent';
import TeamComponent from './components/teamComponent/teamComponent';
import FAQComponent from './components/faqComponent/faqComponent';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeComponent></HomeComponent>}></Route>
        <Route path='/about' element={<AboutComponent></AboutComponent>}></Route>
        <Route path='/team' element={<TeamComponent></TeamComponent>}></Route>
        <Route path='/faq' element={<FAQComponent></FAQComponent>}></Route>
      </Routes>
    </div>
  );
}

export default App;
