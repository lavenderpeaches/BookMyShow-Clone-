
 function SecondaryNavbar() {
  return (
    <div className="w-full bg-gray-100 text-gray-800 px-6 py-2 flex justify-between items-center space-x-6 text-sm">
      <div className="flex space-x-6">
        <span className="hover:text-gray-950 cursor-pointer">Movies</span>
        <span className="hover:text-gray-950 cursor-pointer">Stream</span>
        <span className="hover:text-gray-950 cursor-pointer">Events</span>
        <span className="hover:text-gray-950 cursor-pointer">Plays</span>
        <span className="hover:text-gray-950 cursor-pointer">Sports</span>
        <span className="hover:text-gray-950 cursor-pointer">Activities</span>
      </div>

        <div className="flex space-x-6">
            <span className="hover:text-gray-950 cursor-pointer">ListYourShow</span>
            <span className="hover:text-gray-950 cursor-pointer">Corporates</span>
            <span className="hover:text-gray-950 cursor-pointer">Offers</span>
            <span className="hover:text-gray-950 cursor-pointer">Gift Cards</span>
        </div>
    </div>
    
  );
}

export default SecondaryNavbar;
