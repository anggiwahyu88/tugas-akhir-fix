import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";

const Layout = ({ children, title }) => {
    const msg = () => {
        open("https://api.whatsapp.com/send?phone=6282126667773", "_blank")
    }
    return (
        <>
            <Navbar />
            <div className="fixed bottom-8 right-8 flex gap-2 items-center z-20">
                <div className="h-full bg-white rounded px-4 py-2">
                    <p>
                        Hubungi Kami
                    </p>
                </div>
                <button onClick={msg} className="rounded-full bg-green-500 p-3" aria-label="whatsapp">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="32" height="32" viewBox="0 0 256 256"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path></svg>                </button>
            </div>
            <main>
                {title ?
                    <div className="bg-primary  pt-32 pb-8 text-center text-2xl text-my-white font-semibold">
                        <h1>{title}</h1>
                    </div>
                    : ""
                }
                {title ?
                    <div className="mt-5 mb-6 flex justify-center w-full">
                        <div className="w-full h-full max-w-6xl mx-2 px-4 lg:px-0">
                            {children}
                        </div>
                    </div>
                    :
                    <>
                        {children}
                    </>
                }
            </main>
            <Footer />
        </>
    );
}

export default Layout;