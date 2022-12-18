import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      제 블로그에 방문해 주셔서 감사합니다. 좋은 하루 보내세요!😆 <br /> &copy;
      2022 Developer Jeremy, Powered By Gatsby.
      <Link to="easter-egg">🥚</Link>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`
