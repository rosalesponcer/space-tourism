# ui-person-slider



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute | Description | Type       | Default     |
| --------------- | --------- | ----------- | ---------- | ----------- |
| `crewKeys`      | --        |             | `string[]` | `[]`        |
| `currentPerson` | --        |             | `Person`   | `undefined` |


## Events

| Event          | Description | Type                  |
| -------------- | ----------- | --------------------- |
| `changePerson` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [ui-crew-slider](../../molecules/ui-crew-slider)

### Depends on

- [ui-person](../ui-person)
- [ui-separator](../ui-separator)

### Graph
```mermaid
graph TD;
  ui-person-slider --> ui-person
  ui-person-slider --> ui-separator
  ui-crew-slider --> ui-person-slider
  style ui-person-slider fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
