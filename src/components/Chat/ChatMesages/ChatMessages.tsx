import React from 'react'
import Input from '../../Input/Input'
import * as S from './ChatMessagesStyles'
import Message from './Message/Message'

const ChatMessages: React.FC = () => {
  return (
    <S.Container>
      <S.InputContainer>
        <S.MessagesContainer>
          <Message />
        </S.MessagesContainer>
        <Input />
      </S.InputContainer>
    </S.Container>
  )
}

export default ChatMessages
