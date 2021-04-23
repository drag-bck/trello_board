import React from "react";
import style from "./Card.module.scss";
import { ICardProps } from "./../../utils/interfaces";

const Card = (props: ICardProps) => {
  const deleteCard = () => {
    if (props.deleteCard) {
      props.deleteCard(props.id);
    }
  };

  return (
    <div className={style.card_component}>
      <div className={style.header}>
        <span className={style.title}>{props.title}</span>
        <span className={style.cross} onClick={deleteCard}>
          <span className={style.tooltip}>Delete</span>
        </span>
      </div>
      <div className={style.description}>{props.description}</div>
    </div>
  );
};

export default Card;
