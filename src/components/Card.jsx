import React from 'react';
import CardInfo from '../components/CardInfo.jsx';

const Card = (props) => {
  return (
    <div
      className="d-inline-block aaron-card"
      onClick={(e) => props.click(props.item)}
    >
      <img
        className="aaron-card-img"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
      )}
    </div>
  );
};

export default Card;