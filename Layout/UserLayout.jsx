import { useState } from "react";
import { Link } from "react-router-dom";

const UserLayout = ({ children }) => {
    const [menu, setMenu] = useState(false)
    const user = JSON.parse(localStorage.getItem("user"))
    return (
        <div className="flex h-screen bg-gray-100">
            <div className={`absolute z-10 top-0 flex flex-col h-full w-64 bg-gray-800 transition-all duration-1000 ${!menu ? "-translate-x-full" : "translate-x-0"}`}>
                <div className="flex items-center justify-between h-16 bg-gray-900 text-white px-4">
                    <div className="h-12 w-12">
                        <img src="/logo-smk-sore.webp" alt="smk sore" style={{ objectFit: "cover" }} />
                    </div>
                    <button onClick={() => setMenu(!menu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 mr-2" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav className="flex-1 px-2 py-4 bg-gray-800">
                        <Link to="/" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 mr-2" viewBox="0 0 256 256"><path d="M221.56,100.85,141.61,25.38l-.16-.15a19.93,19.93,0,0,0-26.91,0l-.17.15L34.44,100.85A20.07,20.07,0,0,0,28,115.55V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V164h24v44a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V115.55A20.07,20.07,0,0,0,221.56,100.85ZM204,204H164V160a20,20,0,0,0-20-20H112a20,20,0,0,0-20,20v44H52V117.28l76-71.75,76,71.75Z"></path></svg>
                            Home
                        </Link>
                        <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 mr-2" viewBox="0 0 256 256"><path d="M208,76H100V56a28,28,0,0,1,28-28c13.51,0,25.65,9.62,28.24,22.39a12,12,0,1,0,23.52-4.78C174.87,21.5,153.1,4,128,4A52.06,52.06,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76Zm-4,128H52V100H204Zm-92-52a16,16,0,1,1,16,16A16,16,0,0,1,112,152Z"></path>
                            </svg>
                            Ubah Password
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 mr-2" viewBox="0 0 256 256"><path d="M116,216a12,12,0,0,1-12,12H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28h56a12,12,0,0,1,0,24H52V204h52A12,12,0,0,1,116,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L187,116H104a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,224.49,119.51Z"></path>
                            </svg>
                            Keluar
                        </a>
                    </nav>
                </div>
            </div>

            <div className="overflow-y-auto w-full">
                <div className="w-full flex justify-between items-center px-4 h-16 bg-white border-b border-gray-200">
                    <div className="flex items-center">
                        <button className="text-gray-500 focus:outline-none focus:text-gray-700" onClick={() => setMenu(!menu)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <p>{user.name}</p>
                </div>
                <div>
                    {children}
                </div>

            </div>
        </div>
    );
}

export default UserLayout;