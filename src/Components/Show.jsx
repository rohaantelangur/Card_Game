import React from "react";

export const Show = ({Set, CardSet, setCardSet, SetName, setPlayCard, PlayCard}) => {

  const handlePickUp = (item,index)=>{
      setPlayCard([...PlayCard,item])
      setCardSet([...CardSet, CardSet[SetName].splice(index, 1)])
    //   RemoveCard(SetName,index)
  }  

  return (
      <div className="SetBox">
        {Set?.map((item, index) => (
            <div key={index} className="CardBox">
            <img src={item?.backside} onClick={()=>handlePickUp(item,index)}/>
          </div>
        ))}
      </div>
  );
};
