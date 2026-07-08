import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Projects from '../Projects/Projects'
import TechStack from '../TechStack/TechStack'
import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'


export default function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <TechStack></TechStack>
      <Experience></Experience>
      <Contact></Contact>
    </>
  )
}
