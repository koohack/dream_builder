import logo from './logo.svg';
import { BrowserView, MobileView } from 'react-device-detect'

function App() {
  return (
    <div className="App">
      <BrowserView>
        데스크톱 브라우저 아직 개발 안됨.
        따로 페이지 만들기
      </BrowserView>

      <MobileView>
        앙 모바일
      </MobileView>
    </div>
  );
}

export default App;
