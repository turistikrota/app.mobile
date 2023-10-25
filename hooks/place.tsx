import { Order, Sort } from "~types/place";

type PlaceSortHookResult = {
  defaultSort: Sort;
  defaultOrder: Order;
  sorts: Sort[];
  orders: Order[];
};

export const usePlaceSort = (): PlaceSortHookResult => {
  return {
    defaultSort: Sort.Recent,
    defaultOrder: Order.Desc,
    orders: Object.values(Order),
    sorts: Object.values(Sort),
  };
};
