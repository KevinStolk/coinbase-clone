import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ThemeProvider } from './context/ThemeContext'
import Account from './pages/Account'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Home from './pages/Home'
import axios from 'axios'

function App() {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=true'

    const [coins, setCoins] = useState([])

    useEffect(() => {
        axios.get(url).then((res) => {
            setCoins(res.data)
            /* console.log(res.data) */
        })
    }, [url])

    return (
        <ThemeProvider>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home {...{ coins }} />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/accoun' element={<Account />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App
