# ui-nav



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type        | Default     |
| --------- | --------- | ----------- | ----------- | ----------- |
| `last`    | `last`    |             | `string`    | `undefined` |
| `navList` | --        |             | `NavList[]` | `NAV_LIST`  |


## Dependencies

### Used by

 - [ui-header](../ui-header)

### Depends on

- [ui-hamburger-button](../../atoms/ui-hamburger-button)
- [ui-nav-item](../ui-nav-item)

### Graph
```mermaid
graph TD;
  ui-nav --> ui-hamburger-button
  ui-nav --> ui-nav-item
  ui-nav-item --> ui-text
  ui-header --> ui-nav
  style ui-nav fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
