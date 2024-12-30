import React  from 'react';
import Slider from 'react-infinite-logo-slider'

const Partners = () => {
    
    return (
        <section className='overflox-x-hidden w-screen py-5 border-y-2 border-gray-500'>
            <Slider
                width='300px'
                duration={40}
                pauseOnHover={true}
                blurBorders={true}
                blurBorderColor={'#000401'}
            >
                <Slider.Slide className="w-[300px]">
                    <a href='https://www.rei.com/b/rei-co-op' target="_blank" rel="noreferrer"><img src="src/assets/partner1.png" alt="any" className='w-36' /></a>
                </Slider.Slide>
                <Slider.Slide className="w-[300px]">
                    <a href='https://www.audubon.org/' target="_blank" rel="noreferrer"><img src="src/assets/partner2.png" alt="any2" className='w-36' /></a>
                </Slider.Slide>
                <Slider.Slide className="w-[300px]">
                    <a href='https://www.alltrails.com/' target="_blank" rel="noreferrer"><img src="src/assets/partner3.png" alt="any3" className='w-36' /></a>
                </Slider.Slide>
                <Slider.Slide className="w-[300px]">
                    <a href='https://www.gaiagps.com/' target="_blank" rel="noreferrer"><img src="src/assets/partner4.png" alt="any3" className='w-36' /></a>
                </Slider.Slide>
                <Slider.Slide className="w-[300px]">
                    <a href='https://www.patagonia.com/home/' target="_blank" rel="noreferrer"><img src="src/assets/partner5.png" alt="any3" className='w-36' /></a>
                </Slider.Slide>
                <Slider.Slide className="w-[300px]">
                    <a href='https://www.thenorthface.com/en-us' target="_blank" rel="noreferrer"><img src="src/assets/partner6.png" alt="any3" className='w-36' /></a>
                </Slider.Slide>
                <Slider.Slide className="w-[300px]">
                    <a href='https://www.nature.org/en-us/' target="_blank" rel="noreferrer"><img src="src/assets/partner7.png" alt="any3" className='w-36' /></a>
                </Slider.Slide>
            </Slider>
        </section>
    )
}              
                     
export default Partners