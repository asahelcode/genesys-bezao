import React from 'react'
import Blog from './components/Blog'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Testimonials from './components/Testimonials'

const Page = () => {
    return (
        <div>
            <Hero />
            <Menu />
            <Testimonials />
            <Blog />
        </div>
    )
}

export default Page