import './App.css'
import CompanyCard from './components/CompanyCard.tsx';
import UserInfoCard from './components/UserInfoCard.tsx';
import WelcomeCard from './components/WelcomeCard.tsx';
import apree_logo from './assets/img/Apree_Health_Logo.jpg';
import enlume_logo from './assets/img/enlume_logo.jpg';
import zelis_logo from './assets/img/Zelis-logo-banner.jpg';
import mobigesture_logo from './assets/img/mobigesture_logo.jpg';



function App() {
  const companyDetails = [{
    name: 'Zelis Healthcare', duration: '2023-Present', logo: zelis_logo,
    projectDetails: [{
      framework: 'Django', cloud: 'AWS', projectName: 'Guidance Engine'
    }
    ]
  },
  {
    name: 'Apree Health', duration: '2021-2023', logo: apree_logo,
    projectDetails: [{ framework: 'Django', cloud: 'GCP', projectName: 'Admin Portal' },
    { framework: 'Flask', cloud: 'GCP', projectName: 'Files To BQ' }]
  },
  {
    name: 'Enlume Technologies', duration: '2019-2021', logo: enlume_logo,
    projectDetails: [{ framework: 'Chalice & Zappa', cloud: 'AWS', projectName: 'Monarch Tractors' }]
  },
  {
    name: 'Mobigesture Software Pvt Ltd', duration: '2016-2019', logo: mobigesture_logo,
    projectDetails: [{ framework: 'Django', cloud: 'AWS', 'projectName': 'WebPR' },
    { framework: '', projectName: 'VCU TRD' }]
  }
  ];
  return (
    <>
      <WelcomeCard />
      <UserInfoCard />
      <section>
        <h2 className="text-2xl font-bold ml-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-xl p-6">
      {
        companyDetails.map((company) => (
          <CompanyCard name={company.name}
            duration={company.duration}
            projectDetails={company.projectDetails}
            logo={company.logo}
            key={company.name} />
        ))
      }
      </div>
      </section>
    </>
  );
}

export default App
