import { useState } from "react";
import { useAdd, useRemove } from "./actions";
import { useAppContext } from "components/StateProvider";

export default function EditableList() {
  const { state, actions } = useAppContext();
  const [inputState, setInputState] = useState("");
  const [errorState, setErrorState] = useState(null);
  const add = useAdd();
  const remove = useRemove();

  async function onAdd(e) {
    e.preventDefault();
    try {
      await add(inputState);
      setInputState("");
      setErrorState(null);
    } catch (e) {
      setErrorState(e.message);
    }
  }

  function onRemove(item) {
    return async () => {
      try {
        await remove(item);
        setErrorState(null);
      } catch (e) {
        setErrorState(e.message);
      }
    };
  }

  function onChange(e) {
    setInputState(e.target.value);
  }

  return (
    <ul>
      {errorState !== null && <div>{errorState}</div>}
      <form onSubmit={onAdd}>
        <textarea data-testid="input" value={inputState} onChange={onChange} />
        <button data-testid="submit" type="submit">
          Submit
        </button>
      </form>
      {state.agenda.items.map(item => {
        return (
          <div key={item.id}>
            <li>{item.text}</li>
            <button data-testid="remove" onClick={onRemove(item)}>
              x
            </button>
          </div>
        );
      })}
    </ul>
  );
}
