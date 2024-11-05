import { atom, selector } from "recoil";
import axios from "axios";

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
  default: selector({
      key: "todosAtomSelector",
      get: async ({get})=>{
        try {
          const response = await axios.get('http://localhost:3000/user/homePage', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${get(jwtTokenAtom)}`
            }
          });
          const data = response.data;
          console.log(data);
          return data;
        } catch (error) {
          console.error('Error:', error);
        }
      }
  })
})
