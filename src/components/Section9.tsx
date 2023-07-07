
const Section9 = () => {
  return (
    <div className="flex flex-col gap-10">
        {/* Heading Part */}
        <div className="tablet-landscape:w-[70%] tablet:w-[50%] mobile-xxs:w-[90%] mx-auto text-center">
            <h2 className="mobile-xxs:text-2xl tablet:text-3xl font-semibold leading-none pb-5 mobile-xxs:pt-10 tablet:pt-0">
            With eyes to the future
            </h2>
            <p className="text-4xs font-semibold tracking-normal">
            Google is working towards correcting this legacy with its new Pixel 6 smartphone, equipped with Real Tone, a camera calibrated to all skin tones.
            </p>
        </div>
        {/* Image card section */}
        <div className="w-[90%] mx-auto gap-5 flex-wrap">
           <img src="/14.jpg" alt="" />
        </div>
    </div>
  )
}

export default Section9
