import styled from 'styled-components'
import { Center } from '../../styles/common'
import { colors, props, sizes } from '../../styles/variables'

export const Container = styled.aside`
  height: calc(100vh - ${sizes.headerHeight});
  min-width: 20%;
  background: ${colors.white};
  border-right: ${props.border};
  padding-top: 3rem;
`

export const Item = styled(Center)`
  width: 93%;
  height: 4.4rem;
  background: ${colors.gradient};
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  padding-right: 2rem;
  padding-left: 6rem;
  font-size: 1.2rem;

  p {
    color: ${colors.white};
    margin-left: 1.5rem;
  }
`

export const MessagesNumber = styled(Center)`
  height: 1.627rem;
  width: 2.1rem;
  border-radius: 50%;
  background: white;
  margin-left: auto;

  span {
    background: ${colors.gradient};
    font-size: 0.8rem;
    font-weight: 700;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
