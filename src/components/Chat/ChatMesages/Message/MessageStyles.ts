import styled from 'styled-components'
import { colors } from '../../../../styles/variables'

export const Container = styled.div`
  padding: 1.8rem 6rem 1.8rem 2.3rem;
  background: ${colors.messageBackground};
  border-radius: 1rem;
  font-size: 1.2rem;
  color: ${colors.status};
  line-height: 2rem;
  max-width: 80%;
  width: fit-content;
  margin-left: auto;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const Date = styled.span`
  margin-left: auto;
`
