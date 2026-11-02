import { useReducer } from "react";

const initialState = {
  name: "",
  lastName: "",
  birthYear: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };

    case "SET_LAST_NAME":
      return {
        ...state,
        lastName: action.payload,
      };

    case "SET_BIRTH_YEAR":
      return {
        ...state,
        birthYear: action.payload,
      };

    default:
      return state;
  }
};

const ReduceComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <input
        type="text"
        placeholder="Ім'я"
        value={state.name}
        onChange={(event) => {
          dispatch({
            type: "SET_NAME",
            payload: event.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="Прізвище"
        value={state.lastName}
        onChange={(event) => {
          dispatch({
            type: "SET_LAST_NAME",
            payload: event.target.value,
          });
        }}
      />
      <input
        type="number"
        placeholder="Рік народження"
        value={state.birthYear}
        onChange={(event) => {
          dispatch({
            type: "SET_BIRTH_YEAR",
            payload: event.target.value,
          });
        }}
      />
      <p>Ім'я: {state.name}</p>
      <p>Прізвище: {state.lastName}</p>
      <p>Рік народження: {state.birthYear}</p>
    </>
  );
};

export default ReduceComponent;
