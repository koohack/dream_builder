import { BrowserView, MobileView } from 'react-device-detect'
import { Routes, Route, Link, Switch, BrowserRouter } from "react-router-dom"
import Home from './scenes/home'
import Menubar from './scenes/global/Menubar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BrowserView>
          데스크톱 브라우저 아직 개발 안됨.
          따로 페이지 만들기
        </BrowserView>
        
        <MobileView>
            {/* menu bar */}
            
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
            <Menubar />
        </MobileView>
        
      </BrowserRouter>
    </div>
  );
}




export default App;
