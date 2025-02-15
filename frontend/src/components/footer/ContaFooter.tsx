import React from 'react'
import TelegramIcon from './Icon/Tel'
import InstagramIconSmall from './Icon/Inesta'
import YouTubeIconSmall from './Icon/Yoytube'
import LinkedInIconSmall from './Icon/Linkdin'

export default function ContaFooter() {
  return (

   <div className="ml-36">

    <div className="flex flex-col mr-3 ">
      <div className="mb-4 mt-1 sm:mb-0">
        <p>تلفن : 021-3200076</p>
        <p>ایمیل:teckno@gmail.com</p>
      </div>
      <div>
        <ul className="flex gap-4 mt-7">
          <li><a href="#"><TelegramIcon/></a></li>
          <li><a href="#"><InstagramIconSmall/></a></li>
          <li><a href="#"><YouTubeIconSmall/></a></li>
          <li><a href="#"><LinkedInIconSmall/></a></li>
        </ul>
      </div>
    </div>

  </div>

  )
}
