import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (<div id="header">
    <header>
      <Link to="/" className="logo">
        <img src="/logo.png" alt="브랜디드"/>
      </Link>
      <ul className="anchors">
        <li>
          <a href="https://cafe.naver.com/coredenim">
            <img src="/naver-cafe.png" alt="브랜디드 카페"/>
          </a>
        </li>
      </ul>
    </header>
    <Navbar/>
  </div>);
}

export default Header;
