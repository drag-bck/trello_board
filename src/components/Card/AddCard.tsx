import React, { useState, useRef } from "react";
import style from "./Card.module.scss";

const AddCard = ({ addNewCard, parentId }: any) => {
  const [showAddCardForm, setShowAddCardForm] = useState(false);
  const inputTitle = useRef<any>("");
  const inputDescription = useRef<any>("No description Found!");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setShowAddCardForm(false);
    addNewCard(
      {
        id: (Math.floor(Math.random() * 1000) + 1).toString(),
        title: inputTitle.current.value,
        description: inputDescription.current.value,
      },
      parentId
    );
  };

  return (
    <div
      className={style.addcard_component}
      onClick={() => {
        setShowAddCardForm(true);
      }}
    >
      <span className={style.icon}></span>
      <span className={style.title}>Add New Card</span>
      {showAddCardForm && (
        <div className={style.add_card_form}>
          <div className={style.form_title}>
            <div>Add New List</div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                ref={(input) => (inputTitle.current = input)}
              />
              <br></br>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                ref={(input) => (inputDescription.current = input)}
              />
              <input
                type="submit"
                name="submit"
                className={style.submit_button}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCard;
