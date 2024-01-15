import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alumni } from "../helpers/data/alumni.json";
import { Link } from "@inertiajs/react";
import Marquee from "react-fast-marquee";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Guest from '@/Layouts/GuestLayout';

function App({ news }) {
    console.log(news)
    return (
        <Guest>
            <section className={`h-screen bg-center bg-cover bg-no-repeat transition-all`} style={{ backgroundImage: "url('/storage/hixbd8bp6d.png')" }}>
            </section>

            <section className="w-full flex justify-center px-2 mt-5 lg:-mt-32 lg:px-0">
                <div className="w-full grid grid-cols-2 max-w-6xl gap-4 lg:grid-cols-6 lg:gap-1">
                    <div className="h-32 flex flex-col justify-around items-center transition-all duration-500 hover:bg-yellow-400 hover:text-my-white hover:opacity-100 lg:bg-white-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-6xl"><path d="M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z"></path></svg>
                        <p className="text-2xl">Progam Kerja</p>
                    </div>
                    <div className="h-32 flex flex-col justify-around items-center transition-all duration-500 hover:bg-yellow-400 hover:text-my-white hover:opacity-100 lg:bg-white-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-6xl"><path d="M232,64H208V56a16,16,0,0,0-16-16H64A16,16,0,0,0,48,56v8H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-28.49,64.64-63.51,64.9H128a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path></svg>
                        <p className="text-2xl">achivment</p>
                    </div>
                    <div className="h-32 flex flex-col justify-around items-center transition-all duration-500 hover:bg-yellow-400 hover:text-my-white hover:opacity-100 lg:bg-white-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-6xl"><path d="M248,120h-8V88a16,16,0,0,0-16-16H208V64a16,16,0,0,0-16-16H168a16,16,0,0,0-16,16v56H104V64A16,16,0,0,0,88,48H64A16,16,0,0,0,48,64v8H32A16,16,0,0,0,16,88v32H8a8,8,0,0,0,0,16h8v32a16,16,0,0,0,16,16H48v8a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V136h48v56a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16v-8h16a16,16,0,0,0,16-16V136h8a8,8,0,0,0,0-16ZM32,168V88H48v80Zm56,24H64V64H88V192Zm104,0H168V64h24V175.82c0,.06,0,.12,0,.18s0,.12,0,.18V192Zm32-24H208V88h16Z"></path></svg>
                        <p className="text-2xl">Character</p>
                    </div>
                    <div className="h-32 flex flex-col justify-around items-center transition-all duration-500 hover:bg-yellow-400 hover:text-my-white hover:opacity-100 lg:bg-white-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-6xl"><path d="M27.2,126.4a8,8,0,0,0,11.2-1.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,93.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,115.2,8,8,0,0,0,27.2,126.4ZM176,40a24,24,0,1,1-24,24A24,24,0,0,1,176,40ZM80,40A24,24,0,1,1,56,64,24,24,0,0,1,80,40ZM203,197.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,219.2a8,8,0,1,0,12.8,9.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,197.51ZM80,144a24,24,0,1,1-24,24A24,24,0,0,1,80,144Zm96,0a24,24,0,1,1-24,24A24,24,0,0,1,176,144Z"></path></svg>
                        <p className="text-2xl">Ekstrakurikuler</p>
                    </div>

                    <div className="h-32 flex flex-col justify-around items-center transition-all duration-500 hover:bg-yellow-400 hover:text-my-white hover:opacity-100 lg:bg-white-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-6xl"><path d="M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path></svg>
                        <p className="text-2xl">Service</p>
                    </div>
                    <div className="h-32 flex flex-col justify-around items-center transition-all duration-500 hover:bg-yellow-400 hover:text-my-white hover:opacity-100 lg:bg-white-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-6xl"><path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path></svg>
                        <p className="text-2xl">Kuliah</p>
                    </div>
                </div>
            </section>

            <section className="w-full mt-5 flex justify-center">
                <div className="max-w-6xl">
                    <div className="py-8">
                        <h3 className="text-4xl font-semibold">News Update</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((data, i) => {
                            return (
                                <Link href={`/news/${data.id}`} key={i}>
                                    <div className='h-44 w-80 bg-gray-100 flex justify-center shadow-md'>
                                        <LazyLoadImage
                                            alt={data.title}
                                            effect="blur"
                                            src={`/storage/${data.thumnil}`}
                                            className='h-full object-cover'
                                        />
                                    </div>
                                    <p className="py-4 text-2xl">
                                        {data.title}
                                    </p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="w-full h-96 mt-5 bg-no-repeat bg-cover bg-[-100px] flex justify-center md:bg-center" style={{ backgroundImage: "url(storage/banweb_3.jpg)" }}>
                <div className="w-full h-full max-w-6xl mx-2 lg:px-0">
                    <div className="h-full flex justify-center flex-col">
                        <h3 className="text-xl md:text-4xl text-[#2c4964] font-semibold">SMK SORE TULUNGAGUNG</h3>
                        <div className="text-lg md:text-2xl text-[#2c4964] ">
                            <h4>Kami berkomitmen untuk membentuk Peserta Didik</h4>
                            <h4> Disiplin, Berakhlaqul Karimah, & Siap Kerja</h4>
                        </div>
                        <Link href="/student-admission" className="w-44 bg-blue-600 hover:bg-blue-700 transition-all text-my-white py-3 rounded-2xl mt-8 text-center">Daftar Sekarang</Link>
                    </div>
                </div>
            </section>

            <section className="mt-5">
                <h3 className="font-semibold text-xl text-center mb-4">Partnership</h3>
                <Marquee>
                    <LazyLoadImage
                        alt={"telkom"}
                        effect="blur"
                        src="/storage/Telkom_Indonesia.png"
                        className="h-40 w-48 mx-5"
                    />
                    <LazyLoadImage
                        alt={"yamaha"}
                        effect="blur"
                        src="/storagehttps://seeklogo.com/images/S/suzuki-logo-5311518DD9-seeklogo.com.png"
                        className="h-40 w-48 mx-5"
                    />
                    <LazyLoadImage
                        alt={"honda"}
                        effect="blur"
                        src="/storage/honda.png"
                        className="h-40 w-48 mx-5"
                    />
                    <LazyLoadImage
                        alt={"maspion"}
                        effect="blur"
                        src="/storage/maspion.png"
                        className="h-40 w-48 mx-5"
                    />
                    <LazyLoadImage
                        alt={"pama"}
                        effect="blur"
                        src="/storage/pama.png"
                        className="h-40 w-48 mx-5"
                    />
                </Marquee>
            </section>

            <section className="mt-5 bg-primary  flex justify-center">
                <div className="w-full h-full max-w-6xl my-6 mx-2 px-2 lg:px-0">
                    <h3 className="text-center text-my-white text-3xl font-bold p-4">Alumni SMK SORE</h3>
                    <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2 gap-4 justify-center">
                        {alumni.map((data, i) => {
                            return (
                                <div className="flex justify-center gap-2" key={i}>
                                    <div className="p-1 border-dotted border-2 border-white rounded-full w-[102px] h-[102px] ">
                                        <LazyLoadImage
                                            alt={data.name}
                                            effect="blur"
                                            src={data.img_url}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="p-2 w-[60%]">
                                        <p className="font-bold text-xl text-my-white">{data.name}</p>
                                        <p className="text-yellow-400 font-medium text-lg">{data.major}</p>
                                        <hr className="w-11 my-2" />
                                        <p className="text-my-white">{data.work}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section >
        </Guest>
    )
}

export default App
