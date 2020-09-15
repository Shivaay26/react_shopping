import React  from "react";

const CartContext=React.createContext();

const ItemProvider=CartContext.Provider
const ItemConsumer=CartContext.Consumer

export {ItemConsumer,ItemProvider}