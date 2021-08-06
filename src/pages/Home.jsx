import React from 'react'
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import More from "../components/More/More";
import Footer from '../components/Footer/Footer';

export default function Home() {
    return (
        <>
            <div className="container px-10 sm:mx-auto min-h-screen w-full ">
                <Header />
                <Hero />
            </div>
            <div className="container-fluid  ">
                <About />
            </div>

            <div className="container mx-auto min-h-screen w-full ">
                <More />
            </div>
            <Footer />
        </>
    )
}
