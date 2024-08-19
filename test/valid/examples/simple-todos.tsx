// @ts-nocheck
import { createEffect, For } from "solid-js";
import { createStore, SetStoreFunction, Store } from "solid-js/store";
import { render } from "solid-js/web";

// Checked but not used for demo purposes
function createLocalStore<T>(initState: T): [Store<T>, SetStoreFunction<T>] {
  const [state, setState] = createStore(initState);
  if (localStorage.todos) setState(JSON.parse(localStorage.todos));
  createEffect(() => (localStorage.todos = JSON.stringify(state)));
  return [state, setState];
}

const App = () => {
  const [state, setState] = createStore({
    todos: [],
    newTitle: "",
  });
  return (
    <>
      <h3>Simple Todos Example</h3>
      <input
        type="text"
        placeholder="enter todo and click +"
        value={state.newTitle}
        onInput={(e) => setState({ newTitle: e.target.value })}
      />
      <button
        onClick={() =>
          setState({
            todos: [
              ...state.todos,
              {
                title: state.newTitle,
                done: false,
              },
            ],
            newTitle: "",
          })
        }
      >
        +
      </button>
      <For each={state.todos}>
        {(todo, i) => {
          const { done, title } = todo;
          return (
            <div>
              <input
                type="checkbox"
                checked={done}
                onChange={(e) => setState("todos", i(), { done: e.target.checked })}
              />
              <input
                type="text"
                value={title}
                onChange={(e) => setState("todos", i(), { title: e.target.value })}
              />
              <button
                // This function runs synchronously and doesn't create a new
                // Solid scope. Everything in this setter function is tracked in
                // one scope up.
                onClick={() => setState("todos", (t) => [...t.slice(0, i()), ...t.slice(i() + 1)])}
              >
                x
              </button>
            </div>
          );
        }}
      </For>
    </>
  );
};

render(App, document.getElementById("app"));
