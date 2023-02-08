import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'
import { ContainerMain, Content } from './styles'

export function DefaultLayout() {
  return (
    <ContainerMain>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </ContainerMain>
  )
}
