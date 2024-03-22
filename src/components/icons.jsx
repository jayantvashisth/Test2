import React from 'react'

export const DiscussionCardIcons = ({icon, tag}) => {
  return (
    <div className='flex flex-row gap-1 items-center'>
      {icon}
      <span className='text-sm font-semibold'>{tag}</span>
    </div>
  )
}
