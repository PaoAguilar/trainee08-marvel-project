import { ReactNode } from "react";

export interface Comic {
  id: number,
  title: string,
  thumbnail : {
      extension: string,
      path: string
  }
}

export interface ChildrenProps {
  children: ReactNode;
}
