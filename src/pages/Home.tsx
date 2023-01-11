import React from 'react'
import Coins from '../components/Coins'

interface IHomeProps {
        coins: any[]
}

const Home: React.FC<IHomeProps> = ({coins}) => {
  return (
    <div>
        <Coins coins={coins}/>

    </div>
  )
}

export default Home
