<!-- doc-gen HEADER -->
# solid/prefer-for
Enforce using Solid's `<For />` component for mapping an array to JSX elements.
This rule is **an error** by default.

[View source](../src/rules/prefer-for.ts) · [View tests](../test/rules/prefer-for.test.ts)
<!-- end-doc-gen -->

<!-- doc-gen OPTIONS -->

<!-- end-doc-gen -->

<!-- doc-gen CASES -->
## Tests

### Invalid Examples

These snippets cause lint errors, and some can be auto-fixed.

```js
let Component = (props) => (
  <ol>
    {props.data.map((d) => (
      <li>{d.text}</li>
    ))}
  </ol>
);
// after eslint --fix:
let Component = (props) => (
  <ol>
    <For each={props.data}>{(d) => <li>{d.text}</li>}</For>
  </ol>
);

let Component = (props) => (
  <>
    {props.data.map((d) => (
      <li>{d.text}</li>
    ))}
  </>
);
// after eslint --fix:
let Component = (props) => (
  <>
    <For each={props.data}>{(d) => <li>{d.text}</li>}</For>
  </>
);

let Component = (props) => (
  <ol>
    {props.data.map((d) => (
      <li key={d.id}>{d.text}</li>
    ))}
  </ol>
);
// after eslint --fix:
let Component = (props) => (
  <ol>
    <For each={props.data}>{(d) => <li key={d.id}>{d.text}</li>}</For>
  </ol>
);

function Component(props) {
  return (
    <ol>
      {props.data.map((d) => (
        <li>{d.text}</li>
      ))}
    </ol>
  );
}
// after eslint --fix:
function Component(props) {
  return (
    <ol>
      <For each={props.data}>{(d) => <li>{d.text}</li>}</For>
    </ol>
  );
}

function Component(props) {
  return (
    <ol>
      {props.data?.map((d) => (
        <li>{d.text}</li>
      ))}
    </ol>
  );
}
// after eslint --fix:
function Component(props) {
  return <ol>{<For each={props.data}>{(d) => <li>{d.text}</li>}</For>}</ol>;
}

let Component = (props) => (
  <ol>
    {props.data.map(() => (
      <li />
    ))}
  </ol>
);

let Component = (props) => (
  <ol>
    {props.data.map((...args) => (
      <li>{args[0].text}</li>
    ))}
  </ol>
);
```

### Valid Examples

These snippets don't cause lint errors.

```js
let Component = (props) => (
  <ol>
    <For each={props.data}>{(d) => <li>{d.text}</li>}</For>
  </ol>
);

let abc = x.map((y) => y + z);

let Component = (props) => {
  let abc = x.map((y) => y + z);
  return <div>Hello, world!</div>;
};
```
<!-- end-doc-gen -->
