import { createContext, useContext } from "react";

export const PurchaseContext = createContext();

export const usePurchaseContext = () => useContext(PurchaseContext);
