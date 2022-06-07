import styled from 'styled-components'
import { colors, props, sizes } from '../../styles/variables'

export const Container = styled.nav`
  display: flex;
  width: 100vw;
  height: ${sizes.headerHeight};
  background-color: ${colors.white};
  border-bottom: ${props.border};
`
