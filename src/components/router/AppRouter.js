import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from '../../App';
import {AccountPage} from '../../pages/AccountPage';
import {UsersPage} from '../../pages/admin/UsersPage';
import {HomePage} from '../../pages/HomePage';
import {LoginPage} from '../../pages/LoginPage';
import {NotFoundPage} from '../../pages/NotFoundPage';
import {ProjectPage} from '../../pages/ProjectPage';
import {ProjectsPage} from '../../pages/ProjectsPage';
import {RegisterPage} from '../../pages/RegisterPage';
import {Layout} from '../layouts/Layout';

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<App />} />
            <Route index element={<HomePage />} />
            <Route exact path='/login' element={<LoginPage />} />
            <Route exact path='/register' element={<RegisterPage />} />
            <Route exact path='/acount' element={<AccountPage />} />
            <Route exact path='/projects' element={<ProjectsPage />} />
            <Route exact path='/project/:projectId' element={<ProjectPage />} />
            {/*This route is Dinamic */}
            <Route exact path='/admin/users' element={<UsersPage />} />

            <Route exact path='/*' element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default AppRouter;
