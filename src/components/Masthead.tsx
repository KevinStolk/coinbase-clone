import React from 'react'
import Typed from 'react-typed'

const Masthead = () => {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <h1 className="text-6xl py-4 dark:text-white text-gray-700">
                        <Typed
                            strings={[
                                'Coinbase',
                                'Start your crypto portfolio now!',
                                'The most trusted cryptocurrency platform.',
                            ]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop
                        />
                    </h1>
                    <p className="py-4 dark:text-white text-gray-600 sm:max-w-[70%] m-auto">
                        Lorem ipsum dolor sit amet, qui minim labore adipisicing
                        minim sint cillum sint consectetur cupidatat. Lorem
                        ipsum dolor sit amet, qui minim labore adipisicing minim
                        sint cillum sint consectetur cupidatat. Lorem ipsum
                        dolor sit amet, qui minim labore adipisicing minim sint
                        cillum sint consectetur cupidatat.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Masthead
