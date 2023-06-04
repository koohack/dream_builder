import { BrowserView, MobileView } from 'react-device-detect'
import { Routes, Route, Link, Switch, BrowserRouter } from "react-router-dom"
import Home from './scenes/home'
import Menubar from './scenes/global/Menubar';
import Diary from './scenes/diary';
import Mission from './scenes/mission';
import Meditation from './scenes/meditation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BrowserView>
          데스크톱 브라우저 아직 개발 안됨.
          따로 페이지 만들기
        </BrowserView>
        
        <MobileView>

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/diary' element={<Diary />} />
              <Route path='/mission' element={<Mission />} />
              <Route path='/meditation' element={<Meditation />} />
            </Routes>

            {/* menu bar */}
            <Menubar />
        </MobileView>
        
      </BrowserRouter>
    </div>
  );
}




export default App;
