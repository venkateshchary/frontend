import './App.css'
import CompanyCard from './components/CompanyCard.tsx';
import UserInfoCard from './components/UserInfoCard.tsx';
import WelcomeCard from './components/WelcomeCard.tsx';


function App() {
  const companyDetails = [{
    name: 'Zelis Healthcare', duration: '2023-Present',
    projectDetails: [{
      framework: 'Django', cloud: 'AWS', projectName: 'Guidance Engine'
    }
    ]
  },
  {
    name: 'Apree Health', duration: '2021-2023',
    projectDetails: [{ framework: 'Django', cloud: 'GCP', projectName: 'Admin Portal' },
    { framwork: 'Flask', cloud: 'GCP', projectName: 'Files To BQ' }]
  }
  ];
  return (
    <>
      <WelcomeCard />
      <UserInfoCard />
      {
        companyDetails.map((company) => (
          <CompanyCard name={company.name} duration={company.duration} projectDetails={company.projectDetails} key={company.name} />
        ))
      }
    </>
  );
}

export default App
