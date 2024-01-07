import UserLayout from "@/Layouts/UserLayout";
import TablePerent from "@/Components/TablePerent";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import { useForm, usePage } from "@inertiajs/react"

const EditBiodata = () => {
    const { auth } = usePage().props
    const { data, setData, put, processing, errors } = useForm({
        email: auth.user.email,
        name: auth.user.name,
        phone: auth.user.phone,
        school: '',
        birth_place: '',
        date_birthday: '',
        address: '',
        province: '',
        subdistrict: '',
        city: '',
        village: '',
        father: {
            name: '',
            education: '',
            work: '',
            income: '',
            phone: '',
        },
        mother: {
            name: '',
            education: '',
            work: '',
            income: '',
            phone: '',
        },
        password: '',
    });

    const handleChange = (name, key, value) => {
        let dataPerent = data[name]
        dataPerent[key] = value;
        setData(name, dataPerent)
    }



    const submit = async (e) => {
        e.preventDefault()
        put(route('user.update'))
    }

    return (
        <UserLayout>
            <div className="w-full h-full bg-white px-4 py-6">
                <form className="flex flex-col items-center px-6" onSubmit={submit}>
                    <div className="p-4 rounded-lg w-full max-w-4xl shadow-2xl">
                        <div className="my-8">
                            <h3 className="text-primary text-2xl my-2 w-full px-4">Profil</h3>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Email"}>
                                        Eamil
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Email"} type={"email"} value={data.email} onChange={(e) => setData('email', e.target.value)} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Nama lengkap"}>
                                        Nama Lengkap
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Nama lengkap"} type={"text"} value={data.name} onChange={(e) => setData('name', e.target.value).toUpperCase()} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"No HP"}>
                                        No HP
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"No HP"} type={"number"} value={data.phone} onChange={(e) => setData('phone', e.target.value)} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Tempat Lahir"}>
                                        Tempat Lahir
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Tempat Lahir"} type={"text"} value={data.birth_place} onChange={(e) => setData('birth_place', e.target.value.toUpperCase())} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Tanggal lahir"}>
                                        Tanggal Lahir
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Tanggal lahir"} type={"date"} value={data.date_birthday} onChange={(e) => setData('date_birthday', e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Asal Sekolah"}>
                                        Asal Sekolah
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4 ">
                                    <Input name={"Asal Sekolah"} type={"text"} value={data.school} onChange={(e) => setData('school', e.target.value.toUpperCase())} />
                                </div>
                            </div>
                        </div>



                        <div className="my-8">
                            <h3 className="text-primary text-2xl my-2 w-full px-4">Alamat</h3>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Provinsi"}>
                                        Provinsi
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Provinsi"} type={"text"} value={data.province} onChange={(e) => setData('province', e.target.value.toUpperCase())} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Wilayah/Kota"}>
                                        Wilayah/Kota
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Wilayah/Kota"} type={"text"} value={data.city} onChange={(e) => setData('city', e.target.value.toUpperCase())} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Kecamatan"}>
                                        Kecamatan
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Kecamatan"} type={"text"} value={data.subdistrict} onChange={(e) => setData('subdistrict', e.target.value.toUpperCase())} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Kelurahan/Desa"}>
                                        Kelurahan/Desa
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Kelurahan/Desa"} type={"text"} value={data.village} onChange={(e) => setData('village', e.target.value.toUpperCase())} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Alamat"}>
                                        Alamat
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Alamat"} type={"textarea"} value={data.address} onChange={(e) => setData('address', e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <TablePerent title={"Ibu"} setState={handleChange} value={data.mother} />
                        <TablePerent title={"Ayah"} setState={handleChange} value={data.father} />

                        <div className="w-full flex justify-between my-8 px-6  border-t-2 border-gray-200 pt-4">
                            <button onClick={() => navigate("/student/dashboard/")} type="button" className="rounded-md bg-gray-200 px-5 py-2 text-sm leading-6 text-black shadow-sm transition-all duration-300 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500">Batal</button>
                            <button type="submit" className="rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold leading-6 text-my-white shadow-sm transition-all duration-300 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" disabled={processing}>Simpan</button>
                        </div>
                    </div>
                </form >
            </div >
        </UserLayout >
    );
}

export default EditBiodata;