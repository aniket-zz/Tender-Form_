import LoginForm from './Pages/Login/LoginForm';
import DetailsForm from './Pages/DetailsForm/DetailsForm'
import UploadForm from './Pages/UploadForm/UploadForm'

export const Routee = [
    {
        id: 1,
        component: <LoginForm/>,
        path: "/",
        exact: true,  
    },
    {
      id: 2,
      component: <DetailsForm/>,
        path: "/Details",
      exact: true,
    },
    {
      id: 3,
      component: <UploadForm/>,
      path: "/Upload",
      exact: true,
    },
]