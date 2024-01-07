import { Link } from "@inertiajs/react";
import UserLayout from "@/Layouts/UserLayout";
// const ReactQuill = lazy(() => import('react-quill'));
// import 'react-quill/dist/quill.snow.css'

const Dashboard = ({ auth }) => {
    const user = auth.user

    const Icon = ({ step }) => {
        if (user[step] == "false") {
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
        if (user.step_1 == "false") return "Harap lengkapi biodata terlebih dahulu"
        if (user.step_2 == "false") return "Harap mengisi nilai rapor terlebih dahulu"
        if (user.step_2 == "false") return "Harap memilih jurusan terlebih dahulu"
    }

    return (
        <UserLayout>
            <div className="flex gap-4 justify-center flex-wrap px-4 py-6">
                <div className={`rounded w-[26rem] h-56 flex flex-col border ${user.step_1 == "true" ? "border-green-600" : "border-yellow-500"}`}>
                    <div className={`flex items-center p-3 text-white ${user.step_1 == "true" ? "bg-green-600" : "bg-yellow-500"}`}>
                        <p className="mr-2 font-bold">1)</p>
                        <Icon step={"step_1"}/>
                        <p>Mengisi Biodata</p>
                    </div>
                    <div className="p-3 w-full h-full flex flex-col justify-between">
                        <p>{
                            user.step_1 == "true" ? "Data berhasil dikirim" : getBodyCard()
                        }</p>
                        <Link href={"/dashboard/biodata"} className={`text-center w-full py-1.5 border text-white ${user.step_1 == "true" ? "bg-green-600 border-green-700" : "bg-yellow-500 border-yellow-600"}`} disabled={user.step_1 == "true"} as="button">Lengkapi Biodata</Link>
                    </div>
                </div>
                <div className={`rounded w-[26rem] h-56 flex flex-col border ${user.step_2 == "true" ? "border-green-600" : "border-yellow-500"} ${user.step_1 == "false" ? "opacity-50" : ""}`}>
                    <div className={`flex items-center p-3 text-white ${user.step_2 == "true" ? "bg-green-600" : "bg-yellow-500"}`}>
                        <p className="mr-2 font-bold">2)</p>
                        <Icon step={"step_2"}/>
                        <p>Mengisi Nilai Rapor</p>
                    </div>
                    <div className="p-3 w-full h-full flex flex-col justify-between">
                        <p>{
                            user.step_2 == "true" ? "Data berhasil dikirim" : getBodyCard()
                        }</p>
                        <Link href={"/dashboard/rapor"} className={`text-center w-full py-1.5 border text-white ${user.step_2 == "true" ? "bg-green-600 border-green-700" : "bg-yellow-500 border-yellow-600"}`} disabled={user.step_1 == "false" || user.step_2 == "true"} as="button">Lengkapi Nilai Rapor</Link>
                    </div>
                </div>
                <div className={`rounded w-[26rem] h-56 flex flex-col border ${user.step_3 == "true" ? "border-green-600" : "border-yellow-500"} ${user.step_2 == "false" ? "opacity-50" : ""}`}>
                    <div className={`flex items-center p-3 text-white ${user.step_3 == "true" ? "bg-green-600" : "bg-yellow-500"}`}>
                        <p className="mr-2 font-bold">3)</p>
                        <Icon step={"step_3"}/>
                        <p>Memilih Jurusan</p>
                    </div>
                    <div className="p-3 w-full h-full flex flex-col justify-between">
                        <p>{
                            user.step_3 == "true" ? "Data berhasil dikirim" : getBodyCard()
                        }</p>
                        <Link href={"/dashboard/jurusan"} className={`text-center w-full py-1.5 border text-white ${user.step_3 == "true" ? "bg-green-600 border-green-700" : "bg-yellow-500 border-yellow-600"}`} disabled={user.step_2 == "false" || user.step_3 == "true"} as="button">Pilih Jurusan</Link>
                    </div>
                </div>
                <div className={`rounded w-[26rem] h-56 flex flex-col border ${user.step_3 == "true" ? "border-green-600" : "border-yellow-500 opacity-50"}`}>
                    <div className={`flex items-center p-3 text-white ${user.step_3 == "true" ? "bg-green-600" : "bg-yellow-500"}`}>
                        <p className="mr-2 font-bold">4)</p>
                        <Icon step={"step_3"}/>
                        <p>Lihat Hasil PPDB</p>
                    </div>
                    <div className="p-3 w-full h-full flex flex-col justify-between">
                        <p>{
                            user.step_3 == "true" ? "Data berhasil dikirim" : getBodyCard()
                        }</p>
                        <Link href={"/dashboard/biodata"} className={`text-center w-full py-1.5 border text-white ${user.step_3 == "true" ? "bg-green-600 border-green-700" : "bg-yellow-500 border-yellow-600"}`} disabled={user.step_3 == "false"} as="button">Pilih Jurusan</Link>
                    </div>
                </div>
            </div>
            
        </UserLayout>
    );
}

export default Dashboard;