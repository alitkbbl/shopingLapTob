import React from 'react'
import BanerHomeScrean from './BanerHomeScrean'
import CircleItemHomeScrean from './CircleItemHomeScrean'
import ShowLapTobHomeScrean from './ShowLapTobHomeScrean'
import PriceFilter from './SortedLapHomeScrean'
import PriceFilterLeft from './SortedLapHomeScreanLeft'
import BannerNew from './BannerNew'
 

export default function HomeScrean() {
  return (
    <div className='bg-slate-200'>
      <BanerHomeScrean />
      <CircleItemHomeScrean />
      <br />
      <ShowLapTobHomeScrean />
      <br />
      <BannerNew />
      <div className='flex justify-between'>
          <PriceFilter />
          <PriceFilterLeft />
          
      </div>
    </div>
  )
}
