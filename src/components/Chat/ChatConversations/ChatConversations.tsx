import React from 'react'
import * as S from './ChatConversationsStyles'
import ConversationItem from './ConversationItem/ConversationItem'

const ChatConverstions: React.FC = () => {
  return (
    <S.Container>
      <ConversationItem />
      <ConversationItem />
      <ConversationItem />
      <ConversationItem />
      <ConversationItem />
    </S.Container>
  )
}

export default ChatConverstions
