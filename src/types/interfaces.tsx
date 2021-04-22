import { ReactNode } from "react";

export interface Comic {
  id: number,
  title: string,
  thumbnail : {
      extension: string,
      path: string
  }
}
export interface Character {
  id: number,
  name: string,
  thumbnail : {
      extension: string,
      path: string
  }
}
export interface Story {
  id: number,
  title: string,
}
export interface ChildrenProps {
  children: ReactNode;
}
