import React from 'react'

export const DisplayCard = ({Set}) => {
    
  return (
    <div className="SetBox">
        {Set?.map((item, index) => (
            <div key={index} className="CardBox">
            <img src={item?.fortside} alt=""/>
            </div>
        ))}
      </div>
  )
}
