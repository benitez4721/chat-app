import React from 'react'
import * as S from './ConversationItemStyles'

// type ConversationItemProps = {
//   user: { avatar: ReactNode; name: string }
// }

const ConversationItem: React.FC = () => {
  return (
    <S.Container>
      <S.Avatar />
      <S.UserInfo>
        <p>Ramon Ridwan</p>
        <span>Online</span>
      </S.UserInfo>
      <S.MessagesCount>
        <span>19</span>
      </S.MessagesCount>
    </S.Container>
  )
}

export default ConversationItem
