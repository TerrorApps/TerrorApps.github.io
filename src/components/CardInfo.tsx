/* eslint-disable react/prop-types */
import React from "react"
import { useSpring, animated } from "react-spring"

interface CardInfoProps {
  title: string
  subTitle: string
  link: string
}

const CardInfo: React.FC<CardInfoProps> = ({ title, subTitle, link }) => {
  const style = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })
  return (
    <animated.div className="aaron-card-info" style={style}>
      <p className="aaron-card-title">{title}</p>
      <p className="aaron-card-subtitle">{subTitle}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View
      </a>
    </animated.div>
  )
}

export default CardInfo
