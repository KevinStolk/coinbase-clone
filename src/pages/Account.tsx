import React from 'react'
import { useNavigate } from 'react-router-dom'
import SavedCoin from '../components/SavedCoin'
import { UserAuth } from '../context/AuthContext'

const Account = () => {
    const { user } = UserAuth()

    return (
        <div className="max-w-[1140px] mx-10">
            <div className="flex justify-between items-center my-5 py-8">
                <div>
                    <h1 className="text-2xl font-bold text-accent">Account</h1>
                    <div>
                        <p>Welcome {user?.email}.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center my-12 py-8 card">
                <div className="w-full min-h-[300px]">
                    <h1 className="text-2xl font-bold text-accent py-4">
                        Saved Coins
                    </h1>
                    <SavedCoin />
                </div>
            </div>
        </div>
    )
}

export default Account
