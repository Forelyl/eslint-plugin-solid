<!-- doc-gen HEADER -->
# solid/jsx-no-script-url
Disallow javascript: URLs.
This rule is **an error** by default.

[View source](../src/rules/jsx-no-script-url.ts) · [View tests](../test/rules/jsx-no-script-url.test.ts)
<!-- end-doc-gen -->

See [this issue](https://github.com/solidjs-community/eslint-plugin-solid/issues/24) for rationale.

<!-- doc-gen OPTIONS -->

<!-- end-doc-gen -->

<!-- doc-gen CASES -->
## Tests

### Invalid Examples

These snippets cause lint errors.

```js
let el = <a href="javascript:alert('hacked!')" />;

let el = <Link to="javascript:alert('hacked!')" />;

let el = <Foo bar="javascript:alert('hacked!')" />;

const link = "javascript:alert('hacked!')";
let el = <a href={link} />;

const link = "\tj\na\tv\na\ts\nc\tr\ni\tpt:alert('hacked!')";
let el = <a href={link} />;

const link = "javascrip" + "t:alert('hacked!')";
let el = <a href={link} />;
```

### Valid Examples

These snippets don't cause lint errors.

```js
let el = <a href="https://example.com" />;

let el = <Link to="https://example.com" />;

let el = <Foo bar="https://example.com" />;

const link = "https://example.com";
let el = <a href={link} />;
```
<!-- end-doc-gen -->
