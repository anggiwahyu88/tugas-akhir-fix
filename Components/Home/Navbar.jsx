import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
import { getMenu } from "../../redux/slices/menuSlice";
import { major } from "../../data/major.json";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const dispatch = useDispatch()
  const menu = useSelector((state) => state.menu.data)
  const [isMenu, setIsMenu] = useState(menu)

  useEffect(() => {
    if (menu) {
      setTimeout(() => {
        setIsMenu(true)
      }, 1000);
    } else {
      setIsMenu(false)
    }
  }, [menu])

  const location = useLocation();
  return (
    <header>
      <NavbarMobile />
      <div className={`absolute w-full top-0 bg-primary justify-center text-my-white transition-all lg:flex ${isMenu ? "hidden" : "flex"}`}>
        <div className="w-full flex justify-between max-w-6xl px-2 lg:px-0">
          <div className="w-[70%] text-xs  flex justify-center items-center gap-3 md:text-lg md:justify-normal">
            <div>info</div>
            <div className="flex h-full items-center gap-1 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>
              <p>
                081727617763
              </p>
            </div>
            <div className="flex h-full items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>
              <p>
                081727617763
              </p>
            </div>
          </div>
          <div className="w-[30%] flex justify-center items-center gap-1 py-2 md:justify-end">
            <div className="w-9 h-9 rounded-full bg-red-600 text-2xl flex items-center justify-center">
              <a href="https://www.youtube.com/@smkssoreta" target="_blank" rel="noopener noreferrer" aria-label="youtube">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#ffffff" viewBox="0 0 256 256"><path d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-72.11,61.81-48,32A4,4,0,0,1,108,160V96a4,4,0,0,1,6.22-3.33l48,32a4,4,0,0,1,0,6.66Z"></path></svg>
              </a>
            </div>
            <div className="w-9 h-9 rounded-full bg-[rgb(227,86,166)] text-2xl flex items-center justify-center">
              <a href="https://www.instagram.com/smksore_official/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" aria-label="instragam">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#ffffff" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></svg>
              </a>
            </div>
            <div className="w-9 h-9 rounded-full bg-black text-2xl flex items-center justify-center">
              <a href="https://www.tiktok.com/@smksoretulungagung?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="tiktok">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#ffffff" viewBox="0 0 256 256"><path d="M232,80v40a8,8,0,0,1-8,8,103.25,103.25,0,0,1-48-11.71V156a76,76,0,0,1-152,0c0-36.9,26.91-69.52,62.6-75.88A8,8,0,0,1,96,88v42.69a8,8,0,0,1-4.57,7.23A20,20,0,1,0,120,156V24a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8,48.05,48.05,0,0,0,48,48A8,8,0,0,1,232,80Z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute top-[48px] w-full flex justify-center items-center bg-transparent transition-all lg:flex ${isMenu ? "hidden" : "flex"}`}>
        <div className="w-full h-full flex justify-between items-center max-w-6xl px-2 lg:px-0">
          <div className="flex gap-2">
            <img src="/logo-smk-sore.webp" alt="" className="h-10 w-10" />
            <div className="h-full flex flex-col justify-center">
              <h1 className="text-[15px] font-medium">SMK SORE TULUNGAGUNG</h1>
              <h2 className="text-[9px]">DISIPLIN-BERAKHAQUL KARIMAH-SIAP KERJA</h2>
            </div>
          </div>
          <div className="hidden lg:flex gap-8">
            <div className={`flex items-center gap-1 p-2 ${location.pathname == "/" ? "text-thirty" : ""}`}>
              <Link to={"/"} className="hover:text-thirty transition-all duration-200 p-2">Home</Link>
            </div>
            <div className="relative flex items-center gap-1 p-2 ">
              <Link className="peer/1 hover:text-thirty transition-all duration-200 w-full p-2">Tentang Kami</Link>
              <div className="hidden peer-hover/1:absolute peer-hover/1:block hover:absolute hover:block top-12 bg-white w-72 rounded z-20 peer/2">
                <Link to={"/sejarah"} className="my-4 ml-6 w-full block hover:text-thirty transition-all duration-200">Sejarah</Link>
                <Link to={"/visi-dan-misi"} className="my-4 ml-6 w-full block hover:text-thirty transition-all duration-200">Visi dan Misi</Link>
                <Link className="my-4 ml-6 w-full block hover:text-thirty transition-all duration-200">Akreditasi</Link>
                <Link className="my-4 ml-6 w-full block hover:text-thirty transition-all duration-200">Fasilitas Pembelajaran</Link>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="peer-hover/1:rotate-180 peer-hover/2:rotate-180 transition-all duration-500" fill="currentColor" viewBox="0 0 256 256"><path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path></svg>
            </div>
            <div className="relative flex items-center gap-1 p-2">
              <Link className="hover:text-thirty transition-all duration-200 p-2 peer/1">Jurusan</Link>
              <div className="hidden peer-hover/1:absolute peer-hover/1:block hover:absolute hover:block top-12 bg-white w-72 rounded z-20 peer/2">
                {major.map((data, i) => {
                  return (
                    <Link key={i} to={data.path} className="my-4 ml-6 w-full block hover:text-thirty transition-all duration-200">{data.name}</Link>
                  )
                })}
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="peer-hover/1:rotate-180 peer-hover/2:rotate-180 transition-all duration-500" fill="currentColor" viewBox="0 0 256 256"><path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path></svg>
            </div>
            <div className="flex items-center gap-1 p-2">
              <Link to={"/faqs"} className="hover:text-thirty transition-all duration-200 p-2">Gallery</Link>
            </div>
            <div className="flex items-center gap-1 p-2">
              <Link to={"/faqs"} className="hover:text-thirty transition-all duration-200 p-2">FAQs</Link>
            </div>
          </div>
          <div className="block lg:hidden my-3">
            <button onClick={() => dispatch(getMenu(true))} aria-label="menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#050000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
            </button>
          </div>
        </div>
      </div>

    </header>
  );
}

export default Navbar;