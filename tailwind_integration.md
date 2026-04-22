
### Packages are required
```scss
    "tailwindcss": "^4.2.4",
```

```shell
yarn add -D tailwindcss
yarn tailwindcss init -p
```

### Which files we need to make changes
1. tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
2. index.css
Remove previous all css code and add below line
```css
@import "tailwindcss";
```
3. main.css
Verify main.css contains the index.css import statement
```js
import './index.css'
```