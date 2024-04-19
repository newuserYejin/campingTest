import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./NotFoundPage.style.css";

const NotFoundPage = () => {
   const navigate = useNavigate();
   useEffect(() => {
     const timer = setTimeout(() => navigate("/"), 10000);
   }, []);
  return (
    <div className="not-found-page">
      <div className="error-message">
        <div className="error-quote">
          목적지에 닿아야 행복해지는 것이 아니라 여행하는 과정에서 행복을 느낀다
        </div>
        <h3>아직 찾아내지 못한 페이지에요.</h3>

        <h4>10초 뒤에 홈페이지로 돌아갑니다.</h4>
        <Link to="/" className="error-page-button">
          집으로 돌아기기
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage