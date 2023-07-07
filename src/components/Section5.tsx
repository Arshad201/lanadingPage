
const Section5 = () => {
  return (
    <div className="flex flex-col gap-10">
        {/* Heading Part */}
        <div className="tablet-landscape:w-[70%] tablet:w-[50%] mobile-xxs:w-[90%] mobile-xxs:pt-10 tablet:pt-0 mx-auto text-center">
            <h2 className="mobile-xxs:text-2xl tablet:text-3xl font-semibold leading-none pb-5">
                Acknowledging the past
            </h2>
            <p className="text-4xs font-semibold tracking-normal">
                Representing diversity is just one part of the story. As photographer Daphne Nguyen points out, technology also has a role to play in how images are actually photographed.
            </p>
        </div>
        {/* Image card section */}
        <div className="grid tablet:grid-cols-3 tablet-landscape:grid-cols-2 w-[90%] mx-auto gap-5 flex-wrap">
            <div>
                <img className="w-full" src="/7.jpg" alt="" />
            </div>
            <div>
                <img className="w-full" src="/8.jpg" alt="" />
            </div>
            <div>
                <img className="w-full" src="/9.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section5
