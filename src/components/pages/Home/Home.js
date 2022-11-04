import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import About from './About';
import Banner from './Banner';
import Header from './Header';


export const PlacesContext = createContext()

const Home = () => {
    const places = useLoaderData()
    console.log(places)
    return (
        <PlacesContext.Provider value={places}>
            
            <Header />
            <About />
            <Banner />
            
            
        </PlacesContext.Provider>
    );
};

export default Home;