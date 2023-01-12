import React, { useState } from 'react'
import CoinItem from './CoinItem';

interface ICoinsProps {
    coins: any[]
}

interface ICoins {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
    market_cap_rank: number;
    sparkline_in_7d: {
        price: number[]
    }
}


const Coins: React.FC<ICoinsProps> = ({ coins }) => {
    const [query, setQuery] = useState('')

    return (
        <div className='card my-4'>
            <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
                <h1 className='text-accent text-2xl font-bold my-2 px-2'>Crypto</h1>
                <form>
                    <input className='w-full bg-primary border border-input px-4 py-2 shadow-xl' onChange={(e) => setQuery(e.target.value)} type='text' placeholder='Search for a coin...' />
                </form>
            </div>

            <table className='w-full border-collapse text-center'>
                <thead>
                    <tr className='border-b'>
                        <th></th>
                        <th className='px-4'>#</th>
                        <th className='text-left'>Coin</th>
                        <th></th>
                        <th>Price</th>
                        <th>24h</th>
                        <th className='hidden md:table-cell'>24h Volume</th>
                        <th className='hidden sm:table-cell'>Mkt</th>
                        <th>Last 7 Days</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.filter((val) => {
                        if (query === '') {
                            return val
                        } else if (
                            val.name.toLowerCase().includes(query.toLowerCase())
                        ) {
                            return val
                        }
                    }).map((coin: ICoins) => (
                        <CoinItem key={coin.id} coin={coin} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Coins
