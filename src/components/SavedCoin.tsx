import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../db/firebase'
import { UserAuth } from '../context/AuthContext'
import { FaRegTrashAlt } from 'react-icons/fa'

interface ISavedCoin {
    id: string
    name: string
    rank: number
    symbol: string
    image: string
}

const SavedCoin = () => {
    const [coins, setCoins] = useState<ISavedCoin[]>([])
    const { user } = UserAuth()

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setCoins(doc.data()?.watchList)
        })
    }, [user?.email])

    const coinPath = doc(db, 'users', `${user?.email}`)

    const deleteCoin = async (id: string): Promise<void> => {
        try {
            const res: ISavedCoin[] = coins.filter(
                (item: ISavedCoin) => item.id !== id
            )
            await updateDoc(coinPath, {
                watchList: res,
            })
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            {coins?.length === 0 ? (
                <p>
                    You don't have any coins saved. Please save a coin to add it
                    to your coin list.{' '}
                    <Link to="/">Click here to search for coins.</Link>
                </p>
            ) : (
                <table className="w-full border-collapse text-center">
                    <thead>
                        <tr className="border-b">
                            <th className="px-4">Rank #</th>
                            <th className="text-left">Coin</th>
                            <th className="text-left">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins?.map((coin) => (
                            <tr
                                key={coin.id}
                                className="h-[60px] mt-2 overflow-hidden"
                            >
                                <td>{coin?.rank}</td>
                                <td>
                                    <Link to={`/coin/${coin.id}`}>
                                        <div className="flex items-center">
                                            <img
                                                src={coin?.image}
                                                alt={coin.id}
                                                className="w-8 mr-4"
                                            />
                                        </div>
                                        <div>
                                            <p className="hidden sm:table-cell">
                                                {coin?.name}
                                            </p>
                                            <p className="text-gray-500 text-left text-sm">
                                                {coin?.symbol.toUpperCase()}
                                            </p>
                                        </div>
                                    </Link>
                                </td>
                                <td className="pl-8">
                                    <FaRegTrashAlt
                                        onClick={() => deleteCoin(coin.id)}
                                        className="cursor-pointer hover:text-red-500 transition"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default SavedCoin
