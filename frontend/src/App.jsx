import React, { useEffect } from "react"
import {Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import SettingsPage from "./pages/SettingsPage.jsx"
import {Loader} from "lucide-react"
import { Toaster } from "react-hot-toast"

import ProfilePage from "./pages/ProfilePage.jsx"
import { useAuthStore } from "./store/useAuthStore.js"
import { useThemeStore } from "./store/useThemeStore.js"

function App() {
  const {authUser,checkAuth,isCheckingAuth, onlineUsers}=useAuthStore()
  const {theme} = useThemeStore()

  console.log({onlineUsers})

  useEffect(()=>{
    checkAuth()
  },[checkAuth])
  console.log({authUser})

  if(isCheckingAuth && !authUser) return(
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin"></Loader>
    </div>
  )
  return (
    <div data-theme={theme}>
      <Navbar></Navbar>
      <Routes>
         <Route path="/" element={authUser ? <HomePage></HomePage> : <Navigate to="/login"></Navigate>}></Route>
         <Route path="/signup" element={!authUser?<SignUpPage></SignUpPage>:<Navigate to="/"></Navigate>}></Route>
         <Route path="/login" element={!authUser?<LoginPage></LoginPage>:<Navigate to="/"></Navigate>}></Route>
         <Route path="/settings" element={<SettingsPage></SettingsPage>}></Route>
         <Route path="/profile" element={authUser ?<ProfilePage></ProfilePage>: <Navigate to="/login"></Navigate>}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>

  )
}

export default App