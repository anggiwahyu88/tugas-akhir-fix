import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full pt-5 flex justify-center bg-[rgb(210,210,210)]">
            <div className="w-full h-full max-w-6xl mx-2 lg:px-0">
                <div className="flex flex-col md:flex-row">
                    <div className="p-4 w-fit">
                        <div className="flex gap-2 mb-4">
                            <img src="/logo-smk-sore.webp" alt="smk sore" className="h-11 w-11" />
                            <div className="h-full flex flex-col justify-center">
                                <h1 className="text-[16px] font-medium">SMK SORE TULUNGAGUNG</h1>
                                <h2 className="text-[9.5px]">DISIPLIN-BERAKHAQUL KARIMAH-SIAP KERJA</h2>
                            </div>
                        </div>
                        <div className="flex gap-1.5 my-2 sm:items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>
                            <p>
                                (0355) 322498 - Fax. (0355) 320910
                            </p>
                        </div>
                        <div className="flex gap-1.5 my-2 sm:items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path></svg>
                            <p>
                                0821 2666 7773
                            </p>
                        </div>
                        <div className="flex gap-1.5 my-2 sm:items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path></svg>
                            <p>
                                Jl. Mastrip No. 100 Kec. Boyolangu - Kab. Tulungagung 66325
                            </p>
                        </div>
                        <div className="flex gap-1.5 my-2 sm:items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path></svg>
                            <p>
                                smk_sore_tagung@yahoo.com
                            </p>
                        </div>
                    </div>
                    <div className="p-4 w-fit flex flex-col md:items-center md:mx-auto">
                        <h3 className="w-fit md:mx-auto text-2xl mb-6 after:content-[''] relative after:w-8 after:h-[1px] after:absolute after:-bottom-2 after:left-1 after:bg-[rgb(229,231,235)]">Company</h3>
                        <div className="flex flex-col gap-3 w-fit">
                            <a href="#" className="hover:text-my-white w-fit">Tentang kami</a>
                        </div>
                    </div>
                    <div className="p-4 w-fit flex flex-col md:items-center md:ml-auto">
                        <h3 className="w-fit md:mx-auto text-2xl mb-6 after:content-[''] relative after:w-8 after:h-[1px] after:absolute after:-bottom-2 after:left-1 after:bg-[rgb(229,231,235)]">Links</h3>
                        <div className="flex flex-col gap-3 w-full">
                            <Link to="/faqs" className="hover:text-my-white w-fit">FAQs</Link>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />
                <div className="text-center w-full py-6">
                    <span className="text-[rgb(61, 61, 61)]">&copy; {new Date().getFullYear()} SMK SORE Tulungagung. </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;