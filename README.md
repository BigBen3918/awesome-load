# awesome-spin

An animated loading spinner

 * No images
 * No dependencies
 * Highly configurable
 * Resolution independent
 * Uses CSS keyframe animations
 * Built with Typescript
 * Works in all major browsers
 * Includes TypeScript definitions
 * Distributed as a native ES6 module
 * MIT License

## Installation
With Yarn:
```bash
yarn add awesome-spin
```
With npm:
```bash
npm install --save awesome-spin
```

## Usage
Each spinner has their own default properties. You can overwrite the defaults by passing props into the spinners.

## Example
```tsx
import React from "react";
import { CircleSpin } from 'awesome-spin';

function App() {
	return <CircleSpin type="Spin_1" width="50px" color1="red" color2="blue"  />;
}

export default App;
```

### `Override` props
`height`, `width`, and `color` props
The input to these props can be _number_ or _string_.

| Spinner | width | height | color1 | color2 | duration |
| :------------: | :------------: | :------------: | :------------: | :------------: | :------------: |
| CircleSpin | string | string | string | string | number |
