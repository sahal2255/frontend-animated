// FlavourSection.jsx
import React from 'react'
import FlavourTitle from '../component/FlavourTitle'
import FlavourSlider from '../component/FlavourSlider'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const FlavourSection = () => {

  gsap
  return (
    <section className="flavour-section w-full bg-gradient-to-b text-light py-16 border-4 border-amber-200">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 text-center space-y-12">
        
        {/* Title on top */}
        <div className="flavour-heading-section w-full max-w-2xl">
          <FlavourTitle />
        </div>

        {/* Slider below */}
        <div className="w-full max-w-4xl">
          <FlavourSlider />
        </div>
      </div>
    </section>
  )
}

export default FlavourSection
