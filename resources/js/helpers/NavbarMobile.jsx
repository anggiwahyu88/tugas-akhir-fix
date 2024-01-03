import { useEffect, useState } from "react";
import SubMenu from "./SubMenu";

const NavbarMobile = ({ menu, setMenu }) => {
    const [isMenu, setIsMenu] = useState(menu)
    const [isSubMenu, setIsSubMenu] = useState({
        isActive: false,
        name: "",
    })

    useEffect(() => {
        if (menu) {
            setTimeout(() => {
                setIsMenu(true)

            }, 1000);
        } else {
            setIsMenu(false)
        }
    }, [menu])

    const habdlePath = (path) => {
        setMenu(fasle)
        route(path)
    }

    return (
        <>
            <div className={`lg:hidden fixed z-40 top-0 flex flex-col h-full w-60 bg-gray-800 transition-all duration-1000 ${!menu ? "-translate-x-full" : "translate-x-0"}`}>
                <div className="flex items-center h-14 bg-gray-900 text-white px-4">
                    {
                        isSubMenu.isActive ?
                            <button className="flex px-4 py-2 justify-center items-center gap-1.5 hover:bg-gray-700" onClick={() => setIsSubMenu((prev) => ({ ...prev, isActive: false }))} aria-label="close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path></svg>
                                Back
                            </button>
                            : ""
                    }
                    <button onClick={() => setMenu(false)} aria-label="close" className="ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 mr-2" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
                        </svg>
                    </button>
                </div>
                <div className="relative flex flex-col flex-1 overflow-y-auto ">
                    <SubMenu isSubMenu={isSubMenu} />
                    <nav className="flex flex-col px-2 py-4 bg-gray-800 gap-2">
                        <button onClick={() => habdlePath("/")} className="w-full flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                            Home
                        </button>
                        <button onClick={() => setIsSubMenu({ isActive: true, name: "about" })} className="w-full flex items-center justify-between px-4 py-2 text-gray-100 hover:bg-gray-700">
                            <p>
                                Tentang Kami
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>
                        </button>
                        <button onClick={() => setIsSubMenu({ isActive: true, name: "major" })} className="w-full flex items-center justify-between px-4 py-2 text-gray-100 hover:bg-gray-700">
                            <p>
                                Jurusan
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>
                        </button>
                        <button onClick={() => habdlePath("gallery")} className="w-full flex items-center justify-between px-4 py-2 text-gray-100 hover:bg-gray-700">
                            <p>
                                Gallery
                            </p>
                        </button>
                        <button onClick={() => habdlePath("faqs")} className="w-full flex items-center justify-between px-4 py-2 text-gray-100 hover:bg-gray-700">
                            <p>
                                Faqs
                            </p>
                        </button>
                    </nav>
                </div>
            </div >
            {
                isMenu ?
                    <div className={`lg:hidden fixed z-30 h-full w-full`
                    } onClick={() => setMenu(false)} style={{ backgroundColor: "rgba(0, 0, 0, 0.598)" }}></div > : ""
            }
        </>

    );
}

export default NavbarMobile;