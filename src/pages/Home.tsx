import React from 'react'
import Coins from '../components/Coins'
import TrendingCoins from '../components/TrendingCoins'

interface IHomeProps {
    coins: any[]
}

const Home: React.FC<IHomeProps> = ({ coins }) => {
    return (
        <div>
            <Coins coins={coins} />
            <TrendingCoins />
        </div>
    )
}

export default Home
