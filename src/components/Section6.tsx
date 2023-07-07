
const Section6 = () => {
  return (
    <div>
      <div className="mobile-xxs:w-[90%] mx-auto flex mobile-xxs:gap-5 items-center mobile-xxs:flex-col tablet:flex-row">
        {/* Paragraph */}
        <div className='desktop-xs:w-[40%] tablet:w-[50%] mobile-xxs:w-[100%]'>
            <p className='text-4xs tracking-normal font-semibold tracking-wide tablet:pr-[10%]'>
              “When I’m taking photos of people with darker skin tones… the photo kind of blows out and treats that as underexposure when it’s really just a colour,” she says. “It challenges us to question why different skin tones are represented differently when exposing an image.”
            </p>
            <br/>
            <p className='text-4xs tracking-normal font-semibold tracking-wide tablet:pr-[10%]'>
              This phenomenon isn’t new. In fact, film photography has a troubling history of depicting lighter skin tones more favourably than darker ones due to limitations that have been built into the tools of the trade.
            </p>
        </div>
        {/*Image Slider */}
        <div className='desktop-xs:w-[60%] tablet:w-[50%] mobile-xxs:w-[100%]'>
            <img src="/10.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section6
