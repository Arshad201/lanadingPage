import Slider from "./Slider"

const Section13 = () => {
  return (
    <div>
    <div className="tablet:w-[80%] mobile-xxs:w-[90%] mx-auto flex mobile-xxs:gap-5 tablet:gap-12 items-center mobile-xxs:flex-col-reverse tablet:flex-row">
      {/*Image Slider */}
      <div className='desktop-xs:w-[55%] tablet:w-[50%] mobile-xxs:w-[100%]'>
          <Slider images={ ["/25.png", "/18.jpg", "/19.jpg", "/20.jpg", "/21.png", "/23.png", "/24.png"]}/>
      </div>
      {/* Paragraph */}
      <div className='desktop-xs:w-[45%] tablet:w-[50%] mobile-xxs:w-[100%]'>
          <p className='text-4xs tracking-normal font-semibold tracking-wide tablet:pr-[10%]'>
            “On the one hand, building a camera is very technical; on the other it is very aesthetic and is fundamentally about seeing people.
          </p>
          <br/>
          <p className='text-4xs tracking-normal font-semibold tracking-wide tablet:pr-[10%]'>
           “You have to build that perspective back into the technology, otherwise you run the risk of completely disassociating from the actual point of the tool. In this case, that’s to help people see themselves and to see others.”nce.
          </p>
      </div>
      
    </div>
  </div>
  )
}

export default Section13
