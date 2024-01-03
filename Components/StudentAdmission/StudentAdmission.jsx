import { useEffect } from "react";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";

const StudentAdmission = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])
    return (
        <Layout title={"Pendaftaran Siswa Baru SMK SORE Tulungagung"}>
            <div className="w-full flex justify-center my-4 px-2" >
                <div className="rounded grid grid-cols-1 md:grid-cols-2 shadow-2xl">
                    <img src="/brosur.jpeg" alt="" className="rounded-t md:rounded-l h-[30rem] w-96" />
                    <div className="md:w-96 max-w-sm rounded-b-lg md:rounded-r p-4">
                        <h3 className="text-3xl text-center font-semibold mt-2">Syarat Pendaftaran</h3>
                        <ol className="p-6">
                            <li>Lulusan SMP/MTs dan Sederajat</li>
                            <li>Usia Maksimal 21 Tahun</li>
                            <li>Tidal Buta Warna Total</li>
                            <li>Tidak Bertato dan Bertindik</li>
                            <li>Pada saat Pendaftaran Calon Peserta Didik Wajib datang ke SMK SORE Tulungagung dengan membawa foto copy Rapor semester 3-5 yang sudah dilegalisir</li>
                        </ol>
                        <div className="w-full flex justify-end mt-12 pr-6">
                            <Link to="/auth/register" className=" bg-blue-600 hover:bg-blue-700 transition-all py-3 px-7 rounded-2xl text-center text-[#fff]">Daftar Sekarang</Link>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="text-xl font-semibold mt-5 mb-2">Informasi Pendaftaran</h3>
            <div className="grid grid-cols-1 w-full gap-2 md:grid-cols-2">
                <div className="">
                    <div className="bg-secondary text-my-white text-center p-2">
                        <h4>Gelomang 1</h4>
                    </div>
                    <div className="flex">
                        <ul className="pl-4 py-2">
                            <li className="flex w-28 justify-between">
                                <p>
                                    Pendaftaran
                                </p>
                                <span>:</span>
                            </li>
                            <li className="flex w-28 justify-between">
                                <p>
                                    Pengumuman
                                </p>
                                <span>:</span>
                            </li>
                            <li className="flex w-28 justify-between">
                                <p>
                                    Daftar Ulang
                                </p>
                                <span>:</span>
                            </li>
                            <li className="flex w-28 justify-between">
                                <p>
                                    Keuntungan
                                </p>
                                <span>:</span>
                            </li>
                        </ul>
                        <div className="py-2 ml-2">
                            <p>1 Maret s/d 19 Mei 2023</p>
                            <p>19 Mei 2023</p>
                            <p>22 Mei s/d 26 Mei 2023</p>
                            <p>Gratis Buku Modul Pembeljaran selama 3 tahun dan Gratis Seragam Praktik bagi Yatim Piatu</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="bg-secondary text-my-white text-center p-2">
                        <h4>Gelomang 2</h4>
                    </div>
                    <div className="flex">
                        <ul className="pl-4 py-2">
                            <li className="flex w-28 justify-between">
                                <p>
                                    Pendaftaran
                                </p>
                                <span>:</span>
                            </li>
                            <li className="flex w-28 justify-between">
                                <p>
                                    Pengumuman
                                </p>
                                <span>:</span>
                            </li>
                            <li className="flex w-28 justify-between">
                                <p>
                                    Daftar Ulang
                                </p>
                                <span>:</span>
                            </li>
                            <li className="flex w-28 justify-between">
                                <p>
                                    Keuntungan
                                </p>
                                <span>:</span>
                            </li>
                        </ul>
                        <div className="py-2 ml-2">
                            <p>1 Maret s/d 19 Mei 2023</p>
                            <p>19 Mei 2023</p>
                            <p>22 Mei s/d 26 Mei 2023</p>
                            <p>Gratis Buku Modul Pembeljaran selama 3 tahun </p>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="text-xl font-semibold mt-5 mb-2">Alur Pendaftaran</h3>
            <ol className="px-4">
                <li>Mengambil PIN & INPUT DATA di SMK SORE Tulungagung </li>
                <li>Verifikasi Data oleh Panitia PPDB</li>
                <li>Melihat Pengumuman PPDB di SMK SORE Tulungagung</li>
                <li>Proses Daftar Ulang di SMK SORE Tulungagung</li>
            </ol>
        </Layout>
    );
}

export default StudentAdmission;