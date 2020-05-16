/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react"
import CardInfo from "./CardInfo"

const Card = props => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="d-inline-block aaron-card" onClick={() => props.click(props.item)}>
      <img className="aaron-card-img" src={props.item.imgSrc} alt={props.item.imgSrc} />
      {props.item.selected && (
        <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />
      )}
    </div>
  )
}

export default Card
