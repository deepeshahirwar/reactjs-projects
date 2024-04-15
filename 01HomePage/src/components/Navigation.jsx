import React  from "react"; 
const Navigation = () =>{
    return( 
        <nav className=" mx-auto flex justify-between
         items-center px-4 mt-4 font-medium 
         ml-7 mr-7
         ">  
            <div className="text-2xl"> 
             Logo
            </div> 
            < ul className="
            flex justify-between items-center
             px-4 space-x-10
             "> 
                <li className="hover:text-gray-400">Menu</li>
                <li className="hover:text-gray-400">Location</li>
                <li className="hover:text-gray-400">About</li>
                <li className="hover:text-gray-400">Contact</li>
            </ul> 

            <button className=" 
            border  px-8 py-2 font-sans text-2xl
            ">
                login</button>

        </nav>

    )
} 

export default Navigation;