# Frontend



## React APP Folder Structure
```scss
src/
├── app/              # app-level config (routing, providers)
├── components/       # reusable UI components
├── pages/            # route-level pages
├── services/         # API calls
├── hooks/            # custom hooks
├── layouts/          # layouts (navbar, sidebar)
├── utils/            # helper functions
├── types/            # TypeScript types
├── assets/
├── App.tsx
├── main.tsx
```

### React Components
> A component must return **ONE SINGLE PARENT**

#### wrong way
```tsx
function App() {
  return (
    <CompanyCard companyDetails={{name:'Apree Health', duration:'2021-2023'}} />
    <CompanyCard companyDetails={{name:'Zelis Healthcare', duration:'2023-Present'}} />
  )
}
```
| 👉 This is invalid JSX ❌
Because there are two root elements|

#### right way
```tsx

function App() {
  return (
    <>
    <CompanyCard companyDetails={{name:'Apree Health', duration:'2021-2023'}} />
    <CompanyCard companyDetails={{name:'Zelis Healthcare', duration:'2023-Present'}} />
    </>
  )
}

```