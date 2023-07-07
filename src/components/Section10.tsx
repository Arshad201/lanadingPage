
const Section10 = () => {
  return (
    <div>
      <div className="tablet:w-[80%] mobile-xxs:w-[90%] mx-auto flex mobile-xxs:gap-5 tablet:gap-12 items-center mobile-xxs:flex-col tablet:flex-row">
        
        {/* Paragraph */}
        <div className='desktop-xs:w-[45%] tablet:w-[50%] mobile-xxs:w-[100%]'>
            <p className='text-4xs tracking-normal font-semibold tracking-wide tablet:pr-[10%]'>
            The photoshoot that Nguyen and model Ragavi Ragavan took part in was done entirely on the Pixel 6. “We brought together 12 amazing talents with an incredible range of skin tones,” says Nguyen. “The Pixel 6 took away the need to readjust each image for skin tone, so I could focus on composing the image.
            </p>
            <br/>
            <p className='text-4xs tracking-normal font-semibold tracking-wide tablet:pr-[10%]'>
            “I see this new camera as such a great tool to open up the dialogue about inclusion from the lens – it reminds us to not be complacent about what an image can be. The technology is all there to be unlocked, it just requires that forethought during the developmental research phase.”.
            </p>
        </div>
        {/*Image Slider */}
        <div className='desktop-xs:w-[55%] tablet:w-[50%] mobile-xxs:w-[100%]'>
            <img src="/15.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section10
