
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import { Header } from './component/Header';
import { Page1 } from './component/Page1';
import { Page2 } from './component/Page2';
import { Page3 } from './component/Page3';
import { Page4 } from './component/Page4';
import { Page5 } from './component/Page5';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Page6 } from './component/Page6';
import { Page7 } from './component/Page7';
import Page8 from './component/Page8';
import Page9 from './component/Page9';
import { Page10 } from './component/Page10';
import { Page11 } from './component/Page11';
import  Page12  from './component/Page11';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
     <Route exact path="/" element={<Page1/>}/>
        <Route exact path="/page1" element={<Page1/>}/>
        <Route exact path="/page2" element={<Page2/>}/>
        <Route exact path="/page3" element={<Page3/>}/>
        <Route exact path="/page4" element={<Page4/>}/>
        <Route exact path="/page5" element={<Page5/>}/>
        <Route exact path="/page6" element={<Page6/>}/>
        <Route exact path="/page7" element={<Page7/>}/>
        <Route exact path="/page8" element={<Page8/>}/>
        <Route exact path="/page9" element={<Page9/>}/>
        <Route exact path="/page10" element={<Page10/>}/>
        <Route exact path="/page11" element={<Page11/>}/>
       
     </Routes>
     
     </BrowserRouter>
      
    </div>
  );
}

export default App;
