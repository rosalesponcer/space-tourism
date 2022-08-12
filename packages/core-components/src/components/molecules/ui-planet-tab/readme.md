# ui-planet-tab



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type       | Default     |
| ------------ | ------------- | ----------- | ---------- | ----------- |
| `currentKey` | `current-key` |             | `string`   | `undefined` |
| `planetKeys` | --            |             | `string[]` | `[]`        |


## Events

| Event      | Description | Type                  |
| ---------- | ----------- | --------------------- |
| `clickTab` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [ui-planet-slider](../ui-planet-slider)

### Depends on

- [ui-nav-item](../ui-nav-item)

### Graph
```mermaid
graph TD;
  ui-planet-tab --> ui-nav-item
  ui-nav-item --> ui-text
  ui-planet-slider --> ui-planet-tab
  style ui-planet-tab fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
