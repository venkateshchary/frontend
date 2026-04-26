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

### React Props
| way of passing the params to function

#### scenario:
>I waned to read the companyDetails from array and pass it to CompanyCard component, instead of manually typing each card details

```scss
function App() {
  const companyDetails=[{name:'Zelis Healthcare', duration:'2023-Present'},
                        {name:'Apree Health', duration:'2021-2023'}
                      ];
  //<CompanyCard companyDetails={{name:'Zelis Healthcare', duration:'2023-Present'}} />
  return (
    <>
      <CompanyCard companyDetails={{name:'Zelis Healthcare', duration:'2023-Present'}} />
    <CompanyCard companyDetails={ {name:'Apree Health', duration:'2021-2023'}} />

    </>
  );
}

```
Here we can use

**map() transforms an array of data → into an array of JSX elements.**


|You need to write the map logic inside
|the `flower braces` only so it will 
|return `[<CompanyCard />, 
|<CompanyCard />]`



```scss
function App() {
  const companyDetails=[{name:'Zelis Healthcare', duration:'2023-Present'},
                        {name:'Apree Health', duration:'2021-2023'}
                      ];
  //<CompanyCard companyDetails={{name:'Zelis Healthcare', duration:'2023-Present'}} />
  return (
    <>
      {
        companyDetails.map((company) =>(
           <CompanyCard companyDetails={company} />
        ))
      }
    </>
  );
}
```
#### Props mandatory rule

**Each child in a list should have a unique "key" prop.**

Find the unique key in the list of objects and define a new key value pair under the companycard

```scss
function App() {
  const companyDetails=[{name:'Zelis Healthcare', duration:'2023-Present'},
                        {name:'Apree Health', duration:'2021-2023'}
                      ];
  //<CompanyCard companyDetails={{name:'Zelis Healthcare', duration:'2023-Present'}} />
  return (
    <>
      {
        companyDetails.map((company) =>(
           <CompanyCard companyDetails={company} key={company.name} />
        ))
      }
    </>
  );
}
```

##### Why unique key is required ?

**React uses key to track:**
> “Which item is which between renders?”

If keys change incorrectly → React may:
- Reuse wrong component
- Lose state
- Render weird bugs

###### Think about this scenario:

>You have a list of companies
You insert/remove/reorder items

Ask yourself:

Will the index stay tied to the same company?

👉 No ❌
Indexes shift → React gets confused → UI bugs

### TypeScript + Vite
We don't need to write the extenstion in the imports

Existing
```scss
import CompanyCard from './components/CompanyCard.tsx';
```

Resolution
```scss
import CompanyCard from './components/CompanyCard';
```