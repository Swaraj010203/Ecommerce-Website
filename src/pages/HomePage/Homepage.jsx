import React from 'react'
import Carousel from '../../components/homeComponent/Carousel'

import HomeSectionCarousel from '../../components/homeComponent/HomeSectionCarousel'
import { mens_kurta } from '../../data/mens_kurta'

const Homepage = () => {
  return (
    <div>
      <Carousel/>
      <div className=' py-25 spaxe-y-10 flex flex-col justify-center items-center px-5 lg:px-10'> 
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
        <HomeSectionCarousel data={mens_kurta}
        sectionName={"Mens Shoes"}/>
        <HomeSectionCarousel data={mens_kurta}
        sectionName={"Mens SportWear"}/>
        <HomeSectionCarousel data={mens_kurta}
        sectionName={"Mens Sandle"}/>
        <HomeSectionCarousel data={mens_kurta}
        sectionName={"Womens Sari"}/>
      </div>
    </div>
  )
}

export default Homepage
