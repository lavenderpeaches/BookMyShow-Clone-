import { Search, ChevronDown, Menu } from "lucide-react";
import logo from "../../images/logo.png";

 function TopNavbar() {
  return (
    <div className="w-full bg-white text-gray-800 px-3 py-2 flex items-center justify-between">
      
      <div className="flex items-center space-x-2">
        <img src={logo} alt="BookMyShow Logo" className="h-8 cursor-pointer" />
      </div>

      
      <div className="flex items-center bg-white border rounded-3x1 px-3 py-2 w-1/2 " >
        <Search className="mr-2 text-gray-600" size={18} />
        <input type="text"
          placeholder="Search for Movies, Events, Plays, Sports and Activities"
          className="w-full outline-none text-sm"
        />
      </div>

      <div className="flex items-center space-x-6">
        
        <button className="flex items-center text-sm hover:text-gray-950">
          Select Region <ChevronDown size={16} className="hover:text-gray-900" />
        </button>
        
        <button className="bg-red-400 text-white px-4 py-1 rounded text-sm hover:bg-red-450">
          Sign in
        </button>

        <Menu size={20} className="cursor-pointer hover:text-gray-900" />
      </div>
    </div>
  );
}

export default TopNavbar;