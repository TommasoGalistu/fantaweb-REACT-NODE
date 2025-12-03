import './App.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import PublicHome from './pages/PublicHome'
import Root from './pages/Root'
import Login from './pages/Login'
import Register from './pages/Register'
import ErrorPage from './pages/ErrorPage'

import {ContextData, ContextProvider} from './store/context';
import Logout from './pages/auth/Logout'
import {  useEffect, useState } from 'react'
import { ContextProviderUrl } from './store/contextUrl'
import AddChampionshipPage from './pages/auth/AddChampionshipPage'
import VerifyEmail from './pages/auth/VerifyEmail'
import HomeUser from './pages/auth/HomeUser'
import PageProfile from './pages/auth/PageProfile'
import ClipBoardPage from './pages/auth/ClipBoardPage'
import Calendar from './pages/auth/Calendar'
import DashboardBoss from './pages/auth/boss/DashboardBoss'
import HomeBoss from './pages/auth/boss/HomeBoss'
import Championship from './pages/auth/boss/Championship'
import DashboardPrivateHome from './pages/auth/DashboardPrivateHome'
import PageSingolChampionship from './pages/auth/boss/PageSingolChampionship'
import ListPlayerChampionship from './pages/auth/ListPlayerChampionship'
import PlayerView from './pages/auth/PlayerView'
import AstaPage from './pages/auth/AstaPage'


const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path='/' element />
  </Route>
)

const router = createBrowserRouter([
  { path: '/', 
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/',
        element: <PublicHome />
      },
      
      {path: '/login',
        element: <Login />
      },
      {path: '/registrati',
        element: <Register/>
      },
      {path: '/privato',
        element: <DashboardPrivateHome/>,
        children: [
          {
            path: 'home-user',
            element: <HomeUser />
          },
          {
            path: 'profilo',
            element: <PageProfile />
          },
          {
            path: 'pagelle',
            element: <ClipBoardPage />
          },
          {
            path: 'prossimi-appuntamenti',
            element: <Calendar />
          },
          {
            path: 'aggiungi-campionato',
            element: <AddChampionshipPage />
          },
          {
            path: 'tool-asta',
            element: <AstaPage />
          }
        ]
      },
      {path: '/boss',
        element: <DashboardBoss/>,
        children: [
          {
            path: 'home-boss',
            element: <HomeBoss />
          },
          {
            path: 'gestisci-campionati',
            element: <Championship />
          },
          {
            path: 'campionato/:id',
            element: <PageSingolChampionship />,
            
          },
          {
            path: 'partecipanti-campionato/:id',
            element: <ListPlayerChampionship />
          },
          {
            path: 'giocatore/:id/:idUser',
            element: <PlayerView />
          },
          
        ]
      },
      {path: '/logout',
        element: <Logout/>
      },
      {path: '/verifica-email',
        element: <VerifyEmail/>
      }
      
    ]
  },
  
])
function App() {
  

  return <>
  <ContextProvider>
    <ContextProviderUrl>
      <RouterProvider router={router} />

    </ContextProviderUrl>
  </ContextProvider>
  </>
  
}

export default App
