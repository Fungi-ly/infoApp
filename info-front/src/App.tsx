import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './store/AuthContext'
import PrivateRoute from './component/PrivateRoute/PrivateRoute'

import {
  AdminDbUserPage,
  AdminPage,
  AdminUserPage,
  AudiosPage,
  Dashboard,
  FoldersPage,
  Home,
  Login,
  Register,
  UserEditor,
  UserPage,
  VideoPage
} from './pages/indexPages'
import { NavBar } from './component/indexComponent'
import AdminInstitutions from './pages/AdminInstitutions/AdminInstitutions'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter >
        <NavBar />
        <Routes>

          <Route path="/*" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute requiredRole="user" element={<Dashboard />} />
            }
          />
          <Route
            path="/admin-page"
            element={
              <PrivateRoute requiredRole="admin" element={<AdminPage />} />
            }
          />
          <Route
            path="/admin-user-page"
            element={
              <PrivateRoute requiredRole="admin" element={<AdminUserPage />} />
            }
          />
          <Route
            path="/admin-user-edit"
            element={
              <PrivateRoute requiredRole="admin" element={<UserEditor />} />
            }
          />

          <Route
            path="/video-page"
            element={
              <PrivateRoute requiredRole="admin" element={<VideoPage />} />
            }
          />
          <Route
            path="/audio-page"
            element={
              <PrivateRoute requiredRole="admin" element={<AudiosPage/>} />
            }
          />
          <Route
            path="/folder-page/"
            element={
              <PrivateRoute requiredRole="admin" element={<FoldersPage /> } />
            }
          />
          <Route
            path="/admin-institutions"
            element={
              <PrivateRoute requiredRole="admin" element={<AdminInstitutions/>} />
            }
          />
          <Route
            path="/admin-db-user"
            element={
              <PrivateRoute requiredRole="admin" element={<AdminDbUserPage/>} />
            }
          />

          <Route
            path="/user-page"
            element={
              <PrivateRoute requiredRole="user" element={<UserPage />} />
            }
          />


        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
