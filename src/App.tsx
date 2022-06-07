import React from 'react'
import { Container } from './App.styles'
import Chat from './components/Chat/Chat'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import { HStack } from './styles/common'

function App() {
  return (
    <Container>
      <NavBar />
      <HStack>
        <SideBar />
        <Chat />
      </HStack>
    </Container>
  )
}

export default App
