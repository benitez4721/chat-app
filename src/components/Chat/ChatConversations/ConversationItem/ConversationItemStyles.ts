import styled from 'styled-components'
import AvatarImage from '../../../../assets/images/user1Avatar.png'
import { Center } from '../../../../styles/common'
import { colors, props } from '../../../../styles/variables'

export const Container = styled(Center)`
  justify-content: flex-start;
  padding-left: 4rem;
  padding-right: 4rem;
  height: 8rem;

  &:first-child {
    height: 10rem;
    border-bottom: ${props.border};
    margin-bottom: 2.5rem;
  }
`

export const Avatar = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 100%;
  background-image: url(${AvatarImage});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    height: 1.1rem;
    width: 1.1rem;
    border-radius: 50%;
    background: ${colors.greenOnline};
    bottom: 0.3rem;
    right: 0;
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  height: 4.5rem;
  justify-content: center;
  gap: 0.5rem;
  p {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${colors.status};
  }

  span {
    color: ${colors.status};
  }
`

export const MessagesCount = styled(Center)`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  background: ${colors.gradient};
  margin-left: auto;
  color: ${colors.white};
  font-weight: 700;
  font-size: 0.8rem;
`
