import React from 'react'
import { homeObjOne } from './data'
import { InfoSection } from '../../components';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
        </>
    )
}

export default Home