import React from 'react'
import * as S from './SideBarStyles'
import { ReactComponent as MessageIcon } from '../../assets/images/messageIcon.svg'

const SideBar: React.FC = () => {
  return (
    <S.Container>
      <S.Item>
        <MessageIcon />
        <p>Chat</p>
        <S.MessagesNumber>
          <span>19</span>
        </S.MessagesNumber>
      </S.Item>
    </S.Container>
  )
}

export default SideBar
