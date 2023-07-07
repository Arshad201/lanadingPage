import Slider from "./Slider"

const Section8 = () => {
  return (
    <div>
      <div className="tablet:w-[80%] mobile-xxs:w-[90%] mx-auto flex mobile-xxs:gap-5 tablet:gap-12 items-center mobile-xxs:flex-col-reverse tablet:flex-row">
         {/*Image Slider */}
         <div className='desktop-xs:w-[55%] tablet:w-[50%] mobile-xxs:w-[100%]'>
            <Slider images={ ["/13.jpg", "/11.jpg", "/12.jpg"]}/>
        </div>
        {/* Paragraph */}
        <div className='desktop-xs:w-[45%] tablet:w-[50%] mobile-xxs:w-[100%]'>
            <p className='text-4xs tracking-normal font-semibold tracking-wide tablet:pr-[10%]'>
              The emulsion used to coat film stock varies in its ability to accurately photograph darker skin tones, which is then compounded by the ways the colours are calibrated when photos are developed.
            </p>
            <br/>
            <p className='text-4xs tracking-normal font-semibold tracking-wide tablet:pr-[10%]'>
              Many of the same underlying biases have remained in digital photography. “Cameras that incorrectly expose skin tones are a troubling repeat of history, and play towards the erasure of entire groups of people,” Nguyen says. “They’re a prime example of companies not trying hard enough, creating a product that fails to perform its simplest purpose of correctly photographing an image.”
            </p>
        </div>
      </div>
    </div>
  )
}

export default Section8
