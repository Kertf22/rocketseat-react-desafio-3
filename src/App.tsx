import headerBG from './assets/header-bg.png'
import './App.scss'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/home'
import PagePost from './pages/pagePost'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post/:repo/:id" element={<PagePost />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const Layout = () => {
  return (
    <div className="App" style={{ backgroundImage: `url(${headerBG})` }}>
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
