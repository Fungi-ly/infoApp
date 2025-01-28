import { createContext, useContext, useState, useEffect } from 'react'
import { User, AuthContextType } from '../interfaces/AuthInterface'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: React.ReactNode;
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false);
  }, [])

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user')
  }

  // Actualizamos la lógica para incluir 'superadmin'
  const isAdmin = user?.role === 'admin' || user?.role === 'superadmin'
  const isSuperAdmin = user?.role === 'superadmin'

  return (
    <AuthContext.Provider value={{ user, isAdmin, isSuperAdmin, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
