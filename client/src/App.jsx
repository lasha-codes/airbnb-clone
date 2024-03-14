import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './pages/RegisterPage'
import { UserContextProvider } from './components/UserContext'
import AccountPage from './pages/AccountPage.jsx'
import PlacesPage from './pages/PlacesPage.jsx'
import PlaceFormPage from './components/PlaceFormPage.jsx'

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/account' element={<AccountPage />} />
          <Route path='/account/places' element={<PlacesPage />} />
          <Route path='/account/places/new' element={<PlaceFormPage />} />
          <Route path='/account/places/:id' element={<PlaceFormPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
