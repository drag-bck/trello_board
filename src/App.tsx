import React, { useState } from "react";
import style from "./App.module.scss";
import List from "./components/List/List";
import AddList from "./components/List/AddList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { ICardProps, IListProps, IListArray } from "./utils/interfaces";
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "./utils/helper";
import Header from "./components/Header/Header";

const App = () => {
  const [listData, modifyListData] = useState<any>(getDataFromLocalStorage());
  const [reRenderFlag, triggerRender] = useState(false);

  const dragDropHandler = (result: any) => {
    if (
      !result.source ||
      !result.destination ||
      result.source.droppableId === result.destination.droppableId
    ) {
      return;
    }
    let cardItem: any;
    const tempListData = listData;
    tempListData.data.forEach((item: IListProps, index: number) => {
      if (item.id === result.source.droppableId) {
        item.data.forEach((ele: ICardProps, index: number) => {
          if (ele.id === result.draggableId) {
            cardItem = item.data.splice(index, 1);
          }
        });
      }
    });

    tempListData.data.forEach((item: IListProps, index: number) => {
      if (item.id === result.destination.droppableId) {
        item.data.push(cardItem[0]);
      }
    });
    modifyListData(tempListData);
    saveDataToLocalStorage(tempListData);
  };

  const deleteCard = (id: string) => {
    const tempListData = listData;
    if (tempListData.data.length < 1) {
      return;
    }
    tempListData.data.forEach((item: IListProps) => {
      item.data.forEach((ele: ICardProps, index: number) => {
        if (ele.id === id) {
          item.data.splice(index, 1);
        }
      });
    });
    modifyListData(tempListData);
    triggerRender(!reRenderFlag);
    saveDataToLocalStorage(tempListData);
  };

  const deleteList = (id: string) => {
    console.log("list delete app");
    const tempListData = listData;

    tempListData.data.forEach((item: IListProps, index: number) => {
      if (item.id === id) {
        tempListData.data.splice(index, 1);
      }
    });
    modifyListData(tempListData);
    triggerRender(!reRenderFlag);
    saveDataToLocalStorage(tempListData);
  };

  const addNewCard = (data: ICardProps, id: string) => {
    const tempListData = listData;
    tempListData.data.forEach((ele: IListProps) => {
      if (ele.id === id) {
        ele.data.push(data);
      }
    });
    modifyListData(tempListData);
    triggerRender(!reRenderFlag);
    saveDataToLocalStorage(tempListData);
  };

  const addNewList = (data: IListProps) => {
    const tempListData: IListArray = listData;
    tempListData.data.push(data);
    modifyListData(tempListData);
    triggerRender(!reRenderFlag);
    saveDataToLocalStorage(tempListData);
  };

  return (
    <div className={style.App}>
      <Header title={"Trello Board"} />
      <DragDropContext onDragEnd={dragDropHandler}>
        {listData.data.map((item: IListProps) => {
          return (
            <Droppable droppableId={item.id}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <List
                    {...item}
                    deleteCard={deleteCard}
                    deleteList={deleteList}
                    addNewCard={addNewCard}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </DragDropContext>
      <AddList addNewList={addNewList} />
    </div>
  );
};

export default App;
