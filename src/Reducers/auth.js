//reducer functiom
//{type:'LOGGED_IN_USER',payload:{name:'Gladson'}}
export const authReducer = (
  state = { name: "Gladson", role: "Owmer" },
  action
) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};
