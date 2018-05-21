export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("react-todo-state");

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("react-todo-state", serializedState);
  } catch (err) {
    // ignore write errors
  }
};
