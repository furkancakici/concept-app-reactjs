import React from 'react'
import { homeObjTwo } from './data'
import { InfoSection } from '../../components/';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjTwo} />
        </>
    )
}

export default Home