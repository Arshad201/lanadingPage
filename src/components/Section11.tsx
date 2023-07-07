
const Section11 = () => {
  return (
    <div className="mobile:w-[90%] tablet:w-[100%] mx-auto flex tablet:items-center mobile-xxs:gap-5 tablet:gap-5 mobile-xxs:flex-col-reverse tablet:flex-row bg-mint-mist">
    
    {/* Left Image Part */}
    <div className="tablet:w-[55%]">
        <img className="w-full" src="/16.jpg" alt="sam" />
    </div>

    {/* Right Text */}
    <div className=" tablet:w-[45%] flex flex-col tablet:items-start tablet:text-left tablet-landscape:w-[50%] mobile:w-[70%] mobile-xxs:w-[90%] py-6 pl-2 ">
       <i className="tablet:text-4xl mobile-xxs:text-2xl tracking-normal font-semibold leading-none tablet:px-[11%]">
        <q>
        I see this new camera as such a great tool to open up the dialogue about inclusion from the lens.
        </q>
        </i>
        <p className="text-3xs font-semibold pt-5 tablet:px-[10%]">– Daphne Nguyen </p>
    </div>
</div>
  )
}

export default Section11
