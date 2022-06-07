import styled from 'styled-components'
import { colors, props } from '../../styles/variables'

export const Container = styled.input`
  width: 100%;
  padding: 1.7rem 2.8rem;
  border: ${props.border};
  border-radius: 10rem;

  ::placeholder {
    color: ${colors.placeholder};
  }
  &:focus {
    outline: none;
  }
`
