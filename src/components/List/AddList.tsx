import React, { useState, useRef } from "react";
import style from "./List.module.scss";

const AddList = ({ addNewList }: any) => {
  const [showAddListForm, setShowAddListForm] = useState(false);
  const inputTitle = useRef<any>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setShowAddListForm(false);
    addNewList({
      id: (Math.floor(Math.random() * 1000) + 1).toString(),
      title: inputTitle.current.value,
      data: [],
    });
  };

  return (
    <div
      className={style.addlist_component}
      onClick={() => {
        setShowAddListForm(true);
      }}
    >
      <span className={style.icon}></span>
      <span className={style.title}>Add New List</span>
      {showAddListForm && (
        <div className={style.add_list_form}>
          <div className={style.form_title}>Add New List</div>
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                ref={(input) => (inputTitle.current = input)}
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

export default AddList;
