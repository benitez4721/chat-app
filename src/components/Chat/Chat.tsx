import React from 'react'
import { CenterFullSize, HStack } from '../../styles/common'
import ChatConverstions from './ChatConversations/ChatConversations'
import ChatMessages from './ChatMesages/ChatMessages'
import * as S from './ChatStyles'

const Chat: React.FC = () => {
  return (
    <S.Wrapper>
      <CenterFullSize>
        <S.Container>
          <HStack>
            <ChatConverstions />
            <ChatMessages />
          </HStack>
        </S.Container>
      </CenterFullSize>
    </S.Wrapper>
  )
}

export default Chat
