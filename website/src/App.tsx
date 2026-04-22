import './App.css'
import CompanyCard from './components/CompanyCard.tsx'


function App() {
  const companyDetails = [{ name: 'Zelis Healthcare', duration: '2023-Present' },
  { name: 'Apree Health', duration: '2021-2023' }
  ];
  //<CompanyCard companyDetails={{name:'Zelis Healthcare', duration:'2023-Present'}} />
  return (
    <>
      <div className="bg-red-500 p-10 text-white">
        TEST
      </div>
      {
        companyDetails.map((company) => (
          <CompanyCard name={company.name} duration={company.duration} key={company.name} />
        ))
      }
    </>
  );
}

export default App
