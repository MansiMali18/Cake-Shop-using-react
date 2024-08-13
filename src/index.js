import ReactDOM from 'react-dom/client';
import Contact from './View/CONTACT/Contact.js';
import Home from './View/HOME/Home.js'
import About from './View/ABOUT/About.js';
import Services from './View/SERVICES/Services.js'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router= createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
     path:"/About",
    element:<About/>,
  },
  {
     path:"/Contact",
    element:<Contact/>,
  },
  {
     path:"/Services",
    element:<Services/>,
  }
])

root.render(<RouterProvider router={router}/>)
/*
const cp=window.location.pathname;

if(cp=='/')
{
  root.render(<Home/>)
}
else if(cp=='/About')
{
  root.render(<About/>)
}
else if(cp=='/Contact')
{
  root.render(<Contact/>)
}
else if(ap=='/Services')
{
  root.render(<Services />)
}
else
{
  root.render(<h1>NOt found</h1>)
}
*/