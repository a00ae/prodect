import { type ReactNode, createContext, useContext } from "react";
import type { BoxContextType, BoxSection, BoxType } from "../opp/opp";
import { boxData } from "./data/data"; // تأكد من أن هذا الملف موجود ويحتوي على البيانات

const BoxContext = createContext<BoxContextType | undefined>(undefined);

export const BoxProvider = ({ children }: { children: ReactNode }) => {
  return <BoxContext.Provider value={boxData}>{children}</BoxContext.Provider>;
};

export const useBoxData = <T extends BoxSection>(section: T): BoxType => {
  const context = useContext(BoxContext);
  if (!context) {
    throw new Error("useBoxData must be used within a BoxProvider");
  }
  // هنا نضمن أن المفتاح الذي تم تمريره موجود في الـ context
  // ونعيد القيمة المرتبطة به
  return context[section];
};
