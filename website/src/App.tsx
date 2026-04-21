import './App.css'
import CompanyCard from './components/CompanyCard.tsx'


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

export default App
