import * as actions from "./actionTypes";
let Index = 0;

interface userDetails {
  name?: string;
  SNO?: Number;
  identity: string;
}
interface stateModel {
  users?: userDetails[];
  userFound?: boolean;
}

export default function Reducer(
  state = { users: [], userFound: false },
  action
) {
  if (action.type === actions.CHECK_USER) {
    let data = state.users.filter(
      (user) => user.identity === action.payload.identity
    );
    if (data.length == 0) {
      return { ...state, userFound: false };
    } else {
      return { ...state, userFound: true };
    }
  } else if (action.type === actions.ADD_USER) {
    state.users.push({
      SNO: ++Index,
      identity: action.payload.identity,
      name: action.payload.name,
    });
    return state;
  } else if (action.type === actions.UPDATE_USER) {
    let temp = state.users;
    let index = state.users.findIndex(
      (user) => user.identity == action.payload.identity
    );
    if (index != -1) {
      state.users[index] = { ...state.users[index], name: action.payload.name };
    }
    return state;
  }
  return state;
}
