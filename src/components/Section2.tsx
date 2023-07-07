import Slider from './Slider.tsx';
const Section2 = () => {
  return (
    <div>
      <div className="tablet:w-[80%] mobile-xxs:w-[90%] mx-auto flex mobile-xxs:gap-5 tablet:gap-12 items-center mobile-xxs:flex-col tablet:flex-row">
        {/* Paragraph */}
        <div className='desktop-xs:w-[45%] tablet:w-[50%] mobile-xxs:w-[100%]'>
            <p className='text-4xs tracking-normal font-semibold tracking-wide tablet:pr-[10%]'>
              Growing up, model and dancer Ragavi Ragavan didn’t often see pictures of people who look like her. “As a young person, I was very impressionable, as most young people are. I was looking for permission to be myself and looking for people that look like me – it was difficult,” she recalls.
            </p>
            <br/>
            <p className='text-4xs tracking-normal font-semibold tracking-wide tablet:pr-[10%]'>
              With around one in four Australians born overseas and another 800,000 identifying as First Nations (<i>Australian Bureau of Statistics</i>), Ragavan’s experience is far from unique. So, when the opportunity came up for her to take part in a photoshoot for Getty Images, she jumped at the chance.
            </p>
        </div>
        {/*Image Slider */}
        <div className='desktop-xs:w-[55%] tablet:w-[50%] mobile-xxs:w-[100%]'>
            <Slider images={ ["/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"]}/>
        </div>
      </div>
    </div>
  )
}

export default Section2
