import UserLayout from "@/Layouts/UserLayout";
import Button from "@/Components/Button";
import { router } from "@inertiajs/react"

const Pendaftar = ({ registrant }) => {
    return (
        <UserLayout>
            <div className="overflow-x-auto shadow-md sm:rounded-lg px-4 py-6 min-h-[calc(100vh-64px)] bg-white">
                {
                    registrant.length <= 0 ?
                        <div className="w-full mt-14 text-center text-2xl font-bold">
                            <h4>Tidak ada Pendaftar</h4>
                        </div>
                        :
                        <>
                            <div className="w-full flex justify-end px-6 my-5">
                                <Button variant="primary" onClick={()=>router.get('/dashboard/pendaftar/pengumuman')}>Terima Siswa</Button>
                            </div>
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 font-bold">
                                            No
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Nama
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Asal Sekolah
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Tanggal Lahir
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Total Nilai
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Pilihan 1
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Pilihan 2
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Pilihan 3
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        registrant.map((data, i) => {
                                            return (
                                                <tr className="text-gray-900 bg-white border-b hover:bg-gray-50" key={i}>
                                                    <th scope="row" className="px-6 py-4 font-bold whitespace-nowrap capitalize">
                                                        {i + 1}
                                                    </th>
                                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap capitalize">
                                                        {data.name}
                                                    </th>
                                                    <td className="px-6 py-4 capitalize">
                                                        {data.school.name}
                                                    </td>
                                                    <td className="px-6 py-4 capitalize">
                                                        {data.date_birthday}
                                                    </td>
                                                    <td className="px-6 py-4 capitalize">
                                                        {data.value.semester_1 + data.value.semester_2 + data.value.semester_3 + data.value.semester_4 + data.value.semester_5}
                                                    </td>
                                                    <td className="px-6 py-4 capitalize">
                                                        {data.major.option_1.name}
                                                    </td>
                                                    <td className="px-6 py-4 capitalize">
                                                        {data.major.option_2.name}
                                                    </td>
                                                    <td className="px-6 py-4 capitalize">
                                                        {data.major.option_3.name}
                                                    </td>

                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </>
                }
            </div>
        </UserLayout>
    );
}

export default Pendaftar;