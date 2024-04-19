import React from 'react';
import './TopBanner.style.css';
import { Container } from '@mui/material';
import MainSearchForm from "./MainSearchForm";

const TopBanner = () => {
  return (
    <article className='topBanner'>
      <Container>
        <h2>이번 주말, <em>캠핑 어때?</em></h2>
        <p>당신이 원하는 모든 캠핑장이 여기에</p>
        <MainSearchForm />
      </Container>
    </article>
  )
}

export default TopBanner