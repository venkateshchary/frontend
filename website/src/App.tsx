import './App.css'
import CompanyCard from './components/CompanyCard';
import UserInfoCard from './components/UserInfoCard';
import WelcomeCard from './components/WelcomeCard';
import {companyDetails} from './data/companyData';



function App() {
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
