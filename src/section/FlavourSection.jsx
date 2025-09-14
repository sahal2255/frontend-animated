import FlavourTitle from '../component/FlavourTitle'
import FlavourSlider from '../component/FlavourSlider'

const FlavourSection = () => {
  return (
    <section className="flavour-section w-full min-h-screen text-white relative">
      {/* Title Section */}
      <div className="absolute top-0 left-0 right-0 z-30 py-16">
        <div className="container mx-auto px-6">
          <FlavourTitle />
        </div>
      </div>

      {/* Slider Section */}
      <div className="pt-64"> {/* Offset for title */}
        <FlavourSlider />
      </div>
      {/* <div className="h-[100vh]"></div> */}
    </section>
  )
}

export default FlavourSection;