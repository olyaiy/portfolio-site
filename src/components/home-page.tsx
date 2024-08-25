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
        <div className="flex flex-col w-2/3">
          <h1>Hi, I'm Alex 👋</h1>
          <p>
            I'm a software engineer based in Vancouver, BC. I love building things and helping people. Very active on Twitter.
          </p>
        </div>
        <div className="aspect-square h-full w-1/3 ">
          <Avatar className='h-full w-full'>
          <AvatarImage className="object-cover" src="https://media.licdn.com/dms/image/v2/D5603AQHJ2VO5Ka3kPg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721939845276?e=1730332800&v=beta&t=oaH9UiL_FI0cjncwSYjjTvzjNFTsRVq7nkTiWdpIA2M" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="flex flex-col">
        <h3>About</h3>
        <p>
          Im currently studying Computer science at the University of British Columbia. 
          I'm passionate about building things and helping people.
          I'm interested in AI, LLMs, Web Development, and most computer science stuff.
          In my downtime I like to play chess, read books, watch movies and shoes, Listen to music, and much more.
        </p>

      </div>

    </div>
    )
}

export default HomePage