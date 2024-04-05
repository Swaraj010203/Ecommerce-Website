import React, { useState } from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSection from './HomeSection';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const HomeSectionCarousel = ({data,sectionName}) => {
    console.log(data)
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 2 },
        568: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => {
        setActiveIndex(activeIndex-1);
    }

    const slideNext = () => {
        setActiveIndex(activeIndex+1);
    }

    const syncActiveIndex = ({ items }) => setActiveIndex(items);

    const items = data.slice(0,10).map((item) => <HomeSection key={item.id} product={item} />);

    return (
        <div className='w-full '>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5 mx-4 px-10'>
                <div style={{ position: 'relative', zIndex: '1' }}>
                    <AliceCarousel
                        items={items}
                        disableButtonsControls
                        responsive={responsive}
                        disableDotsControls
                        onSlideChange={syncActiveIndex}
                        activeIndex={activeIndex}
                    />
                </div>
                {activeIndex !== items.length &&
                    <button
                        variant="contained"
                        className='z-50 mr-4'
                        onClick={slideNext}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '-2rem',
                            transform: 'translateY(-50%) rotate(90deg)',
                            color: 'white'
                        }}
                        aria-label='next'
                    >
                        <KeyboardArrowLeftIcon
                            sx={{ transform: 'rotate(90deg)', color: 'black' }}
                        />
                    </button>
                }
                {activeIndex !== 0 &&
                    <button
                        variant="contained"
                        className='z-50 ml-5'
                        onClick={slidePrev}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '-2rem',
                            transform: 'translateY(-50%) rotate(-90deg)',
                            color: 'white'
                        }}
                        aria-label='previous'
                    >
                        <KeyboardArrowLeftIcon
                            sx={{ transform: 'rotate(90deg)', color: 'black' }}
                        />
                    </button>
                }
            </div>
        </div>
    )
}

export default HomeSectionCarousel;