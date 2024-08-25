import React from 'react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


const HomePage = () => {
  return (
    <div className='max-w-[600px]'>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-auto">
          <h1>Hi, I'm Alex 👋</h1>
          <p>
            I'm a software engineer based in Vancouver, BC. I love building things and helping people. Very active on Twitter.
          </p>
        </div>
        <div className="p-0 aspect-square ">
          <Avatar className='h-full w-full aspect-square'>
          <AvatarImage className="square object-cover" src="https://media.licdn.com/dms/image/v2/D5603AQHJ2VO5Ka3kPg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721939845276?e=1730332800&v=beta&t=oaH9UiL_FI0cjncwSYjjTvzjNFTsRVq7nkTiWdpIA2M" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>




      </div>

    </div>

  )
}

export default HomePage