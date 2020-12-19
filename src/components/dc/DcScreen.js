import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {

    return (
        <div>
            <h1 className="my-4 text-center">Dc Screen</h1>
            <HeroList publisher="DC Comics"/>
        </div>
    )
}
