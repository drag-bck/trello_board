export interface ICardProps {
  id: string;
  title: string;
  description: string;
  ref?: any;
  deleteCard?: (id: string) => void;
  addNewCard?: (data: ICardProps, id: string) => void;
}

export interface IListProps {
  id: string;
  title: string;
  data: Array<ICardProps>;
  ref?: any;
  deleteCard?: (id: string) => void;
  deleteList?: (id: string) => void;
  addNewCard?: (data: ICardProps, id: string) => void;
  addNewList?: (data: IListProps) => void;
}

export interface IListArray {
  data: Array<IListProps>;
}
