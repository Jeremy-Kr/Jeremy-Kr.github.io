import styled from '@emotion/styled'
import React, { createRef, FunctionComponent, useEffect } from 'react'

type UtterancesAttributesType = {
  src: string
  repo: string
  'issue-term': string
  label: string
  theme: string
  crossorigin: string
  async: string
}

const CommentWidget: FunctionComponent = () => {
  const element = createRef<HTMLDivElement>()

  useEffect(() => {
    if (element.current === null) return

    const utterance: HTMLScriptElement = document.createElement('script')

    const attributes: UtterancesAttributesType = {
      src: 'https://utteranc.es/client.js',
      repo: 'Jeremy-Kr/jeremy-kr.github.io',
      'issue-term': 'title',
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterance.setAttribute(key, value)
    })

    element.current.appendChild(utterance)
  }, [])
  return <UtterancesWrapper ref={element} />
}

const UtterancesWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export default CommentWidget
