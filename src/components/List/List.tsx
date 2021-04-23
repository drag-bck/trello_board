import React from "react";
import { IListProps } from "../../utils/interfaces";
import Card from "../Card/Card";
import AddCard from "./../Card/AddCard";
import { Draggable } from "react-beautiful-dnd";

import style from "./List.module.scss";

const List = (props: IListProps) => {
  const deleteList = () => {
    console.log("list delete");
    if (props.deleteList) {
      props.deleteList(props.id);
    }
  };

  return (
    <div className={style.list_component}>
      <div className={style.header}>
        <span className={style.title}>{props.title}</span>
        <span className={style.cross} onClick={deleteList}>
          <span className={style.tooltip}>Delete</span>
        </span>
      </div>
      <div className={style.cards}>
        {props.data.map((item, index) => {
          return (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided) => (
                <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  <Card {...item} deleteCard={props.deleteCard} />
                </div>
              )}
            </Draggable>
          );
        })}
        <AddCard addNewCard={props.addNewCard} parentId={props.id} />
      </div>
    </div>
  );
};

export default List;
