import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './pages/RegisterPage'
import { UserContextProvider } from './components/UserContext'
import AccountPage from './pages/AccountPage.jsx'

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/account/:subPage?' element={<AccountPage />} />
          <Route path='/account/:subPage/:action' element={<AccountPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
