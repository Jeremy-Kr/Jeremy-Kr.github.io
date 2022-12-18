import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React, { ReactNode } from 'react'
import CommentWidget from 'components/Post/CommentWidget'

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
}
const EasterEgg = () => {
  return (
    <>
      <EasterEggContainer>
        <Egg to="/">🍳</Egg>
        <EasterEggText>축하합니다! 이스터에그를 찾으셨네요!</EasterEggText>
      </EasterEggContainer>
      <CommentWidget />
    </>
  )
}

const EasterEggContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;
`
const Egg = styled(({ ...props }: GatsbyLinkProps) => <Link {...props} />)`
  font-size: 200px;
  color: #fff;
`

const EasterEggText = styled.div`
  color: #fff;
`

export default EasterEgg
