import ReactDOM from 'react-dom/client';
import Contact from './View/CONTACT/Contact';
import Home from './View/HOME/Home';
import About from './View/ABOUT/About';

const root = ReactDOM.createRoot(document.getElementById('root'));

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
else
{
  root.render(<h1>NOt found</h1>)
}
