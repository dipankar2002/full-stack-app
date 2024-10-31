import { atom } from "recoil";

export const createTodoCard = atom({
  key: "createTodoCard",
  default: false
})

export const jwtTokenAtom = atom({
  key: "jwtTokenAtom",
  default: localStorage.getItem('authToken')
})

export const todosAtom = atom({
  key: "todosAtom",
  default: []
})

