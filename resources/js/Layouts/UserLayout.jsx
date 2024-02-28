import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

const UserLayout = ({ children }) => {
    const [menu, setMenu] = useState(false)
    const { auth } = usePage().props

    return (
        <div className="flex h-screen bg-gray-100">
            <div className={`absolute z-10 top-0 flex flex-col h-full w-64 bg-gray-800 transition-all duration-1000 ${!menu ? "-translate-x-full" : "translate-x-0"}`}>
                <div className="flex items-center justify-between h-16 bg-gray-900 text-white px-4">
                    <div className="h-12 w-12">
                        <img src="/storage/logo-smk-sore.webp" alt="smk sore" style={{ objectFit: "cover" }} />
                    </div>
                    <button onClick={() => setMenu(!menu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 mr-2" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav className="flex-1 px-2 py-4 bg-gray-800">
                        <Link href="/" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 mr-2" viewBox="0 0 256 256"><path d="M221.56,100.85,141.61,25.38l-.16-.15a19.93,19.93,0,0,0-26.91,0l-.17.15L34.44,100.85A20.07,20.07,0,0,0,28,115.55V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V164h24v44a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V115.55A20.07,20.07,0,0,0,221.56,100.85ZM204,204H164V160a20,20,0,0,0-20-20H112a20,20,0,0,0-20,20v44H52V117.28l76-71.75,76,71.75Z"></path></svg>
                            Home
                        </Link>
                        <Link href={route("password.store")} className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 mr-2" viewBox="0 0 256 256"><path d="M208,76H100V56a28,28,0,0,1,28-28c13.51,0,25.65,9.62,28.24,22.39a12,12,0,1,0,23.52-4.78C174.87,21.5,153.1,4,128,4A52.06,52.06,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76Zm-4,128H52V100H204Zm-92-52a16,16,0,1,1,16,16A16,16,0,0,1,112,152Z"></path>
                            </svg>
                            Ubah Password
                        </Link>
                        {
                            auth.user.is_admin == "true" ?
                                <>
                                    <Link href={route("news.store")} className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 256 256"><path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0ZM93.66,85.66,120,59.31V152a8,8,0,0,0,16,0V59.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,85.66Z"></path></svg>
                                        Upload News
                                    </Link>
                                    <Link href={route("news.index")}className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 256 256"><path d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm88-24a8,8,0,0,0-8,8V82c-6.35-7.36-12.83-14.45-20.12-21.83a96,96,0,1,0-2,137.7,8,8,0,0,0-11-11.64A80,80,0,1,1,184.54,71.4C192.68,79.64,199.81,87.58,207,96H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V64A8,8,0,0,0,224,56Z"></path></svg>
                                        Update News
                                    </Link>
                                    <Link href="/dashboard/pin" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 256 256"><path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0ZM93.66,85.66,120,59.31V152a8,8,0,0,0,16,0V59.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,85.66Z"></path></svg>
                                        Upload Pin
                                    </Link>
                                    <Link href="/dashboard/pendaftar" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="currentColor"  viewBox="0 0 256 256"><path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path></svg>
                                        Lihat Pendaftar
                                    </Link>
                                </>
                                : ""
                        }
                        <Link href={route('logout')} method="post" as="button" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 mr-2" viewBox="0 0 256 256"><path d="M116,216a12,12,0,0,1-12,12H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28h56a12,12,0,0,1,0,24H52V204h52A12,12,0,0,1,116,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L187,116H104a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,224.49,119.51Z"></path>
                            </svg>
                            Keluar
                        </Link>
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
                    <p>{auth.user.name}</p>
                </div>
                <div>
                    {children}
                </div>

            </div>
        </div>
    );
}

export default UserLayout;