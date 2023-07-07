
const Section3 = () => {
  return (
    <div>
      <div className="tablet:w-[80%] mobile-xxs:w-[90%] mx-auto flex mobile-xxs:gap-5 tablet:gap-12 items-center mobile-xxs:flex-col-reverse tablet:flex-row">
        {/*Image Slider */}
        <div className='desktop-xs:w-[55%] tablet:w-[50%] mobile-xxs:w-[100%]'>
            <img src="/6.jpg" alt="" />
        </div>
        {/* Paragraph */}
        <div className='desktop-xs:w-[45%] tablet:w-[50%] mobile-xxs:w-[100%]'>
            <p className='text-4xs tracking-normal font-semibold tracking-wide tablet:pr-[10%]'>
            “As soon as they said Getty, I said yes. It means I get to represent people that look like me – South Asian with curly hair, big eyes, a big smile. You don’t always get to see that in the Australian media. It was really important for me to be part of that.”
            </p>
        </div>
      </div>
    </div>
  )
}

export default Section3
