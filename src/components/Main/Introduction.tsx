import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'
import ProfileImage from 'components/Main/ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Introduction: FunctionComponent<IntroductionProps> = ({
  profileImage,
}) => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <div>
          <SubTitle>만나서 반가워요!</SubTitle>
          <Title>주니어 프론트엔드 개발자 이정익입니다.</Title>
        </div>
      </Wrapper>
    </Background>
  )
}

const Background = styled.header`
  width: 100%;
  background-image: linear-gradient(60deg, #a9cefb 0%, #f3b4b3 100%);
  color: #333;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 330px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 22px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

export default Introduction
