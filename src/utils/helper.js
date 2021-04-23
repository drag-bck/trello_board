export const saveDataToLocalStorage = (data) => {
  localStorage.setItem("trello_board", JSON.stringify(data));
};

export const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("trello_board");
  if (data) {
    return JSON.parse(data);
  } else {
    return { data: [] };
  }
};
