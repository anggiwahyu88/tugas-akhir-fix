import Button from "@/Components/Button";
import UserLayout from "@/Layouts/UserLayout";
import { router } from "@inertiajs/react";

const StudentsAccepted = ({ students }) => {
    return (
        <UserLayout>
            <div className="overflow-x-auto shadow-md sm:rounded-lg px-4 py-6 min-h-[calc(100vh-64px)] bg-white">
                {
                    students.length <= 0 ?
                        <div className="w-full mt-14 text-center text-2xl font-bold">
                            <h4>Tidak ada Siswa</h4>
                        </div>
                        :
                        <>
                            <div className="w-full flex justify-end px-6 my-5">
                                <Button variant="primary" onClick={() => window.location.replace('/dashboard/siswa/export')}>Download</Button>
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
                                            Jenis Kelamin
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
                                            Jurusan
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Diterima pada tanggal
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        students.map((student, i) => {
                                            const dateObject = new Date(student.created_at);
                                            const year = dateObject.getFullYear();
                                            const month = dateObject.getMonth() + 1;
                                            const day = dateObject.getDate();
                                            return (
                                                <tr className="text-gray-900 bg-white border-b hover:bg-gray-50" key={i}>
                                                    <th scope="row" className="px-6 py-4 font-bold whitespace-nowrap capitalize">
                                                        {i + 1}
                                                    </th>
                                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap capitalize">
                                                        {student.user.name}
                                                    </th>
                                                    <td className="px-6 py-4 capitalize">
                                                        {student.user.gender == "male" ? "Laki-Laki" : "Perempuan"}
                                                    </td>
                                                    <td className="px-6 py-4 capitalize">
                                                        {student.user.school.name}
                                                    </td>
                                                    <td className="px-6 py-4 capitalize">
                                                        {student.user.date_birthday}
                                                    </td>
                                                    <td className="px-6 py-4 capitalize">
                                                        {student.user.total_nilai}
                                                    </td>
                                                    <td className="px-6 py-4 capitalize">
                                                        {student.major.name}
                                                    </td>
                                                    <td className="px-6 py-4 capitalize">
                                                        {`${year}-${month}-${day}`}
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

export default StudentsAccepted;