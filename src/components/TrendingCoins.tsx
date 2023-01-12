import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface ITrendingCoins {
    item: {
        coin_id: number;
        name: string;
        small: string;
        price_btc: number;
        score: number;
        symbol: string;
    }
}

const TrendingCoins = () => {
    const url = 'https://api.coingecko.com/api/v3/search/trending'

    const [trending, setTrending] = useState([])

    useEffect(() => {
        axios.get(url).then((res) => {
            setTrending(res.data.coins)
        })
    }, [])

    return (
        <div className='card my-12 py-8 text-primary'>
            <h1 className='text-accent text-2xl font-bold my-2 px-4'>Trending Coins</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {trending.map((coin: ITrendingCoins) => (
                    <div key={coin.item.coin_id} className='card flex justify-between p-4 hover:scale-105 ease-in-out duration-300'>
                        <div className='flex w-full items-center justify-between'>
                            <div className='flex'>
                                <img
                                    className='mr-4 rounded-full'
                                    src={coin.item.small}
                                    alt='/'
                                />
                                <div>
                                    <p className='font-bold'>{coin.item.name}</p>
                                    <p>{coin.item.symbol}</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <img
                                    className='w-4 mr-2'
                                    src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
                                    alt='/'
                                />
                                <p>{coin.item.price_btc.toFixed(7)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendingCoins
