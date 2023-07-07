
const Section12 = () => {
  return (
    <div>
      <div className="tablet:w-[80%] mobile-xxs:w-[90%] mx-auto flex mobile-xxs:gap-5 tablet:gap-12 items-center mobile-xxs:flex-col tablet:flex-row">
        
        {/* Paragraph */}
        <div className='desktop-xs:w-[45%] tablet:w-[50%] mobile-xxs:w-[100%]'>
            <p className='text-4xs tracking-normal font-semibold tracking-wide tablet:pr-[10%]'>
            Leading this mission is Florian Koenigsberger, Google’s Image Equity Lead in New York. With his own background in photography, Koenigsberger was well aware of the limitations of many cameras in portraying people with darker skin tones.
            </p>
            <br/>
            <p className='text-4xs tracking-normal font-semibold tracking-wide tablet:pr-[10%]'>
            He spent the better part of a year speaking to a cross-section of photographers, cinematographers and engineers to find out what gains could be made. “One of the biggest technical decisions we made was to listen to experts who don’t build camera technology, but who specifically have built their careers around accurately and beautifully depicting and representing communities of colour,” he says.
            </p>
        </div>
        {/*Image Slider */}
        <div className='desktop-xs:w-[55%] tablet:w-[50%] mobile-xxs:w-[100%]'>
            <img src="/17.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section12
