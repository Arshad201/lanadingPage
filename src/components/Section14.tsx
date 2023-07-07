
const Section14 = () => {
  return (
    <div className="bg-[#FFF0DD]  py-10">
      <div className="flex items-center tablet:flex-row mobile-xxs:flex-col">
      {/* Text Part */}
      <div className="tablet:w-[60%] mobile-xxs:w-[95%] flex flex-col items-center text-center gap-5 desktop-md:px-56 px-5">
        <img className="w-[150px] tablet:block mobile-xxs:hidden" src="/27.png" alt="" />
        <h2 className="tablet-landscape:text-4xl mobile:text-3xl mobile-xxs:text-2xl font-bold leading-none">Portraits photographed beautifully and authentically</h2>
        <p className="text-4xs font-semibold">Historically, camera technology has overlooked and excluded people with darker skin tones. Today’s cameras carry that same bias. Google and Nine’s portfolio of brands are helping improve the representation of diverse skin tones by producing image galleries for use across the Nine Network and Getty’s Refinery29 We Are Many collection.</p>
      </div>
      {/* Image Part */}
      <div className="tablet:w-[40%] mobile-xxs:w-[95%] ">
        <img className="w-full" src="/26.png" alt="" />
      </div>
      </div>
      <p className="text-center uppercase text-1xs tracking-wider">Advertising feature</p>
      <img className="w-[110px] tablet:hidden mobile-xxs:block mt-2 mx-auto" src="/27.png" alt="" />
    </div>
  )
}

export default Section14
