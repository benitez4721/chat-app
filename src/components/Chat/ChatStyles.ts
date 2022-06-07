import styled from 'styled-components'
import { colors, props } from '../../styles/variables'

export const Wrapper = styled.div`
  flex-grow: 1;
`

export const Container = styled.div`
  height: 96%;
  width: 96%;
  background: ${colors.white};
  border: ${props.border};
  border-radius: 10px;
`
