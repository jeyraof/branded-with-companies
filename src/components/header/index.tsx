import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCompanies } from '../../actions/company';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (<div id="header">
    <header>
      <Link to="/" className="logo">
        <img src="/logo.png" alt="브랜디드"/>
      </Link>
      <ul className="anchors">
        <li>
          <a href="#refresh" onClick={(e) => {
            e.preventDefault();
            alert('업체 목록을 갱신합니다.');
            dispatch(fetchCompanies());
          }}>
            <img src="/refresh.png" alt="새로고침"/>
          </a>
        </li>
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
