import React from 'react'
import Coins from '../components/Coins'
import Masthead from '../components/Masthead'
import TrendingCoins from '../components/TrendingCoins'

interface IHomeProps {
    coins: any[]
}

const Home: React.FC<IHomeProps> = ({ coins }) => {
    return (
        <div>
            <Masthead />
            <Coins coins={coins} />
            <TrendingCoins />
        </div>
    )
}

export default Home
