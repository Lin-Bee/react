import './App.css';
import {Route,Link} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Profiles from './pages/Profiles';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">시작페이지</Link> 
          {/* a태그 대신에 link component를 이용해서 수정함 물리적 주소를 바꾸는게 아닌 dom만 컨트롤함 */}
        </li>
        <li>
          <Link to="/about">소개페이지</Link>
        </li>
        <li>
          <Link to="/about?detail=true">소개페이지 detail true</Link>
        </li>
        <li>
          <Link to="/profiles">회원목록</Link>
        </li>
        <li>
          <Link to="/profile/asth">A씨</Link>
        </li>
      </ul>

      <Route path = "/" exact={true} component = {Home}/>
      <Route path = "/about" component = {About}/>
      <Route path = "/profiles" component = {Profiles}/>
      <Route path = "/profile/:username" component = {Profile}/>
      {/* <Route path = "주소" exact={true}←정확하게 주소가 맞을때만 출력하여라 component = {컴포넌드}/> */}
    </div>
  );
}

export default App;
