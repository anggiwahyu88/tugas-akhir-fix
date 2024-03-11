import { Link } from "@inertiajs/react";
import UserLayout from "@/Layouts/UserLayout";

const Dashboard = ({ auth, is_announcement }) => {
    const user = auth.user
    const Icon = ({ step }) => {
        if (!user[step]) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-1" viewBox="0 0 256 256"><path d="M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z"></path></svg>
            )
        }
        else {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-1" viewBox="0 0 256 256"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg>
            )
        }
    }



    const getBodyCard = () => {
        if (!user.step_1) return "Harap lengkapi biodata terlebih dahulu"
        if (!user.step_2) return "Harap mengisi nilai rapor terlebih dahulu"
        if (!user.step_3) return "Harap memilih jurusan terlebih dahulu"
    }

    return (
        <UserLayout>
            {
                user.is_admin ?
                    <div className="mx-4 my-6 text-4xl font-semibold bg-green-600 text-white rounded-md px-4 py-8 shadow-md text-center">
                        <h1>Selamat Datang ADMIN SMK Sore</h1>
                    </div>
                    :
                    <div className="flex gap-4 justify-center flex-wrap px-4 py-6">
                        <div className={`rounded w-[26rem] h-56 flex flex-col border ${user.step_1 ? "border-green-600" : "border-yellow-500"}`}>
                            <div className={`flex items-center p-3 text-white ${user.step_1 ? "bg-green-600" : "bg-yellow-500"}`}>
                                <p className="mr-2 font-bold">1)</p>
                                <Icon step={"step_1"} />
                                <p>Mengisi Biodata</p>
                            </div>
                            <div className="p-3 w-full h-full flex flex-col justify-between">
                                <p>{
                                    user.step_1 ? "Data berhasil dikirim" : getBodyCard()
                                }</p>
                                <Link href={"/dashboard/biodata"} className={`text-center w-full py-1.5 border text-white ${user.step_1 ? "bg-green-600 border-green-700" : "bg-yellow-500 border-yellow-600"}`} disabled={user.step_1} as="button">Lengkapi Biodata</Link>
                            </div>
                        </div>
                        <div className={`rounded w-[26rem] h-56 flex flex-col border ${user.step_2 ? "border-green-600" : "border-yellow-500"} ${!user.step_1 ? "opacity-50" : ""}`}>
                            <div className={`flex items-center p-3 text-white ${user.step_2 ? "bg-green-600" : "bg-yellow-500"}`}>
                                <p className="mr-2 font-bold">2)</p>
                                <Icon step={"step_2"} />
                                <p>Mengisi Nilai Rapor</p>
                            </div>
                            <div className="p-3 w-full h-full flex flex-col justify-between">
                                <p>{
                                    user.step_2 ? "Data berhasil dikirim" : getBodyCard()
                                }</p>
                                <Link href={"/dashboard/rapor"} className={`text-center w-full py-1.5 border text-white ${user.step_2 ? "bg-green-600 border-green-700" : "bg-yellow-500 border-yellow-600"}`} disabled={!user.step_1 || user.step_2} as="button">Lengkapi Nilai Rapor</Link>
                            </div>
                        </div>
                        <div className={`rounded w-[26rem] h-56 flex flex-col border ${user.step_3 ? "border-green-600" : "border-yellow-500"} ${!user.step_2 ? "opacity-50" : ""}`}>
                            <div className={`flex items-center p-3 text-white ${user.step_3 ? "bg-green-600" : "bg-yellow-500"}`}>
                                <p className="mr-2 font-bold">3)</p>
                                <Icon step={"step_3"} />
                                <p>Memilih Jurusan</p>
                            </div>
                            <div className="p-3 w-full h-full flex flex-col justify-between">
                                <p>{
                                    user.step_3 ? "Data berhasil dikirim" : getBodyCard()
                                }</p>
                                <Link href={"/dashboard/jurusan"} className={`text-center w-full py-1.5 border text-white ${user.step_3 ? "bg-green-600 border-green-700" : "bg-yellow-500 border-yellow-600"}`} disabled={!user.step_2 || user.step_3} as="button">Pilih Jurusan</Link>
                            </div>
                        </div>
                        <div className={`rounded w-[26rem] h-56 flex flex-col border ${is_announcement && user.step_3 ? "border-green-600" : "border-yellow-500 opacity-50"}`}>
                            <div className={`flex items-center p-3 text-white ${is_announcement && user.step_3 ? "bg-green-600" : "bg-yellow-500"}`}>
                                <p className="mr-2 font-bold">4)</p>
                                {
                                    is_announcement && user.step_3 ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-1"  viewBox="0 0 256 256"><path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path></svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-1" viewBox="0 0 256 256"><path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"></path></svg>
                                }
                                <p>Lihat Hasil PPDB</p>
                            </div>
                            <div className="p-3 w-full h-full flex flex-col justify-between">
                                <p>{
                                    is_announcement && user.step_3 ? "Silahkan Lihat Pengumuman" : "Silahkan Tunggu Pengumuan"
                                }</p>
                                <Link href={"/dashboard/siswa"} className={`text-center w-full py-1.5 border text-white ${is_announcement && user.step_3 ? "bg-green-600 border-green-700" : "bg-yellow-500 border-yellow-600"}`} disabled={!is_announcement || !user.step_3} as="button">Lihat Pengumuman</Link>
                            </div>
                        </div>
                    </div>}

        </UserLayout>
    );
}

export default Dashboard;