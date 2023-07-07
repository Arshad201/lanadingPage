
const Section4 = () => {
  return (
    <div className="mobile:w-[90%] tablet:w-[100%] mx-auto flex tablet:items-center mobile-xxs:gap-5 tablet:gap-12 mobile-xxs:flex-col tablet:flex-row bg-peachy-cream">
       
        {/* Right Text with Button Part */}
        <div className=" tablet:w-[50%] flex flex-col tablet:items-start tablet:text-left tablet-landscape:w-[50%] mobile:w-[70%] mobile-xxs:w-[90%] py-6 pl-2 ">
           <i className="tablet:text-4xl mobile-xxs:text-2xl tracking-normal font-semibold leading-none tablet:px-[11%]">
            <q>
            I was looking for people that look like me – it was difficult.
            </q>
            </i>
            <p className="text-3xs font-semibold pt-5 tablet:px-[10%]">– Ragavi Ragavan</p>
        </div>

         {/* Left Image Part */}
         <div className="tablet:w-[50%]">
            <img className="w-full" src="/28.jpg" alt="sam" />
        </div>
    </div>
  )
}

export default Section4
