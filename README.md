
# mls

MLS outputs a simple data structure from minimal YAML-like input.

## Rationale

The goal is to be simple. More features means more potential for busy files. MLS only has maps, lists, and strings. No nested structures, data types, or references.

## Example

**Input**

```yaml
thomas:
  - Man is distinguished
  - not only by his reason

hobbes:
  - but by this singular passion
  - from other animals,
    which is a lust of the mind
```

**Output**

```js
{
  thomas: [
    'Man is distinguished',
    'not only by his reason',
  ],
  hobbes: [
    'but by this singular passion',
    'from other animals, which is a lust of the mind'
  ]
}
```
