
const MainSection = () => {
  return (
    <div className="flex items-center mobile-xxs:gap-5 tablet:gap-12 mobile-xxs:flex-col-reverse tablet:flex-row mobile-xxs:px-[5%] tablet:px-[0%] mt-10">
        {/* Left Image Part */}
        <div className="tablet:w-[60%] relative">
            <p className="absolute top-5 right-20 text-custom-white uppercase text-1xs tracking-wider mobile-xxs:hidden tablet:block">Advertising feature</p>
            <img src="/1.jpg" alt="sam" />
        </div>
        {/* Right Text with Button Part */}
        <div className="tablet:w-[40%] flex flex-col mobile-xxs:items-center mobile-xxs:text-center tablet:items-start tablet:text-left tablet-landscape:w-[50%] mobile:w-[70%] mobile-xxs:w-[90%] pt-10">
                <p className="text-2xs tracking-normal mobile-xxs:block tablet:hidden py-3">Advertising feature</p>
           <div className="flex items-center gap-3">
                <p className="text-2xs tracking-normal mobile-xxs:hidden tablet:block">In collaboration with</p>
                <img className="mobile-xxs:w-[120px] tablet:w-[150px]" src="/27.png" alt="sam" />
           </div>
           <h1 className="mobile-xxs:text-3xl tablet:text-4xl desktop-sm:text-5xl font-bold leading-none pb-6 tablet:pr-[10%]">A new camera for a new age </h1>
           <p className="text-3xs tracking-normal font-semibold tablet:pr-[10%]">With the new Pixel 6 smartphone, Google has designed a camera with a diverse range of skin tones in mind.</p>
        </div>
    </div>
  )
}

export default MainSection
