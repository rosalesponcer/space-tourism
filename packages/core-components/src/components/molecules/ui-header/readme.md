# ui-header



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type     | Default     |
| -------------- | --------------- | ----------- | -------- | ----------- |
| `currentRoute` | `current-route` |             | `string` | `undefined` |


## Events

| Event           | Description | Type                  |
| --------------- | ----------- | --------------------- |
| `clickNavigate` |             | `CustomEvent<string>` |


## Dependencies

### Depends on

- [ui-logo](../../atoms/ui-logo)
- [ui-nav](../ui-nav)

### Graph
```mermaid
graph TD;
  ui-header --> ui-logo
  ui-header --> ui-nav
  ui-nav --> ui-hamburger-button
  ui-nav --> ui-nav-item
  ui-nav-item --> ui-text
  style ui-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
