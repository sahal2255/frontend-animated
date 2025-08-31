// FlavourSection.jsx
import FlavourTitle from '../component/FlavourTitle'
import FlavourSlider from '../component/FlavourSlider'

const FlavourSection = () => {
  
  return (
    <section className="flavour-section w-full bg-gradient-to-b text-light py-16 ">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 text-center space-y-12">
        
        {/* Title on top */}
        <div className=" w-full max-w-2xl">
          <FlavourTitle />
        </div>

        {/* Slider below */}
        <div className="w-full ">
          <FlavourSlider />
        </div>
      </div>
    </section>
  )
}

export default FlavourSection
