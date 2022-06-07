import React from 'react'
import * as S from './MessageStyles'

const Message: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Date>Agent Rue, 9 minutes ago</S.Date>
      <S.Container>
        ¡Buenos días! ¿Cómo están? Ya el Release Report y el Sprint Planning de esta semana está
        creado. Por favor no olviden mover las tareas que estén listas en el tablero de Teurtask
        para poder añadirla a la lista de tareas finalizadas y contar los puntos en el release
        report. Ya pueden ir añadiendo los objetivos que tengan para esta semana en el sprint
        planning.
      </S.Container>
    </S.Wrapper>
  )
}

export default Message
