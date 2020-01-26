import React, { useState } from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCompanies } from '../../actions/company';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [curtain, setCurtain] = useState(false)

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
    
    <div className={`curtain ${curtain}`}>
      <p>이 사이트는 더이상 운영되지 않습니다.</p>
      <p>이전에 제공되던 내용은 지속적으로 제공 됩니다.</p>
      <p>
        그러나 좀 더 신속하고 주체적인 컨텐츠 제공을 받기 위해서 
        <a href="https://cafe.naver.com/coredenim/72399">주황색물고기님의 글</a>
        을 이용하시는 것을 권장합니다.
      </p>
      <p>
        계속해서 사이트를 이용하시려면
        <a href="#" className="this" onClick={(e) => {
          e.preventDefault();
          setCurtain(true);
        }
        }>여기</a>
        를 클릭해주세요.
      </p>
      <p>그동안 부족한 페이지에 많은 관심을 주셔서 감사합니다.</p>
      <p>금뚱보 드림 😀👍</p>
    </div>
  </div>);
}

export default Header;
