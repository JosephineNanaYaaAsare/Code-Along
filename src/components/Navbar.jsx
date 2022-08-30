
 import { NavLink } from "react-router-dom"
import NavItem from"./NavItem"

const links= [
   { 
    label: "Home",
    to: "/",
},
{
    label: "Product",
    to: "/Product"
},
{
    label: "Task Manager",
    to: "/task-manager"
},
{
    label: "About",
    to: "/About"
},
{
   label: "Contact",
   to: "/contact"
}

]

  function Navbar(){
    return (
        <nav className="flex justify-between py-3 px-20 shadow-md">
          <h3 className="font-bold">GobeJoint</h3>
            <ul className="flex gap-5">  
              {links.map((link, index) =>(
                <NavItem label= {link.label} to={link.to} />
            
              ))}            
             </ul>
        </nav>
     )
 }

 
   export default Navbar