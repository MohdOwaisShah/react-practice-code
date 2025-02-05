import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Param from './components/Param';
import UseNavigation from './components/UseNavigation';
import ServiceCharge from './components/ServiceCharge';
import PageOf404 from './components/PageOf404';

const router = createBrowserRouter (
  [
    {
      path: '/',
      element: <div>
        <Navbar />
        <Home/>  
      </div>
    },
    {
      path: '/about',
      element: <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path: '/contact',
      element: <div>
        <Navbar/>
        <Contact />
      </div>
    },
    {
      path: '/services',
      element: <div>
        <Navbar/>
        <Services />
      </div>,

      children:[
        {
          path: 'service-charges',
          element: <ServiceCharge/>
        }
      ]

    },
    {
      path: '/owais/:id',
      element: <div>
      <Navbar/>
      <Param />
    </div>
    },
    {
      path: '/useNavigation',
      element: <div>
      <Navbar/>
      <UseNavigation />
    </div>
    },
    {
      path: '*',
      element: <PageOf404 />
    }
  ]
)

const App = () => {
  return (
    <div className="container">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

{/* <Link></Link> */}
// work as an ancher without refreshing the page

{/* <NavLink></NavLink> */}
//we can access it's attribute isActive using this we are handle the activeness of navbar

{/* Use param hook*/}
//using this we can access the id whatever user right
// '/owais/:id'

{/* use Navigate hook */}
// use Navigate hook is use to go other page using button, without load 
// for example go UseNavigation component

{/* nested rout */}
// nested rout is looks like /services/service-charges in url the /service-charges is a child of services thats why we creating its path and element inside it

//step-1 insert path and element of children
/*children:[
        {
          path: 'service-charges',
          element: <ServiceCharge/>
        }
      ] 
*/

//step-2 insert <Oulet/> inside parent component and end of the body

{/* 404 page */}
//adding (*) in path we can handle the 404 page, users are writing anything in path accept we declared then 404 page is shows and we can design it.