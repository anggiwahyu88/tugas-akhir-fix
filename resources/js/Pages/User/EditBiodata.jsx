import UserLayout from "@/Layouts/UserLayout";
import TablePerent from "@/Components/TablePerent";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import { useForm, router } from "@inertiajs/react"
import Dropdown from "@/Components/Dropdown";
import { useEffect, useState } from "react";
import Button from "@/Components/Button";

const EditBiodata = ({ province, auth }) => {
    const { data, setData, put, processing, errors } = useForm({
        email: auth.user.email,
        name: auth.user.name,
        phone: auth.user.phone,
        school: '',
        birth_place: '',
        date_birthday: '',
        address: '',
        province: '',
        city: '',
        subdistrict: '',
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

    const [kab, setKab] = useState([{ value: "DEFAULT", title: "::Pilih Kabupaten::" }])
    const [kec, setkec] = useState([{ value: "DEFAULT", title: "::Pilih Kecamatan::" }])
    const [kel, setKel] = useState([{ value: "DEFAULT", title: "::Pilih Kelurahan/Desa::" }])

    const handleChange = (name, key, value) => {
        let dataPerent = data[name]
        dataPerent[key] = value;
        setData(name, dataPerent)
    }

    const getData = async (type, id) => {
        const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/${type}/${id}.json`)
        const data = await response.json()
        const dataFilter = data.map((value) => {
            return {
                "title": value.name,
                "value": value.id
            }
        })
        return dataFilter;
    }

    useEffect(() => {
        if (data.province) {
            setData('subdistrict', '')
            setData('city', '')
            setData('village', '')
            setKab((prev => [prev[0]]))
            setkec((prev => [prev[0]]))
            setKel((prev => [prev[0]]))
            getData('regencies', data.province.value).then((response) => {
                const x = response
                x.splice(0, 0, kab[0]);
                setKab(x)
            })
        }
    }, [data.province])
    useEffect(() => {
        if (data.city) {
            setData('subdistrict', '')
            setData('village', '')
            setkec((prev => [prev[0]]))
            setKel((prev => [prev[0]]))
            getData('districts', data.city.value).then((response) => {
                const x = response
                x.splice(0, 0, kec[0]);
                setkec(x)
            })
        }
    }, [data.city])
    useEffect(() => {
        if (data.subdistrict) {
            setData('village', '')
            setKel((prev => [prev[0]]))
            getData('villages', data.subdistrict.value).then((response) => {
                const x = response
                x.splice(0, 0, kel[0]);
                setKel(x)
            })
        }
    }, [data.subdistrict])

    const submit = (e) => {
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
                                        Email
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
                                    <Dropdown name={"Provinsi"} value={province} onChange={(e) => setData('province', {
                                        "title": e.target.selectedOptions[0].text,
                                        "value": e.target.value
                                    })} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Wilayah/Kota"}>
                                        Wilayah/Kota
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Dropdown name={"Wilayah/Kota"} value={kab} onChange={(e) => setData('city', {
                                        "title": e.target.selectedOptions[0].text,
                                        "value": e.target.value
                                    })} disabled={kab.length < 2} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Kecamatan"}>
                                        Kecamatan
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Dropdown name={"Kecamatan"} value={kec} onChange={(e) => setData('subdistrict', {
                                        "title": e.target.selectedOptions[0].text,
                                        "value": e.target.value
                                    })} disabled={kec.length < 2} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Kelurahan/Desa"}>
                                        Kelurahan/Desa
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Dropdown name={"Kelurahan/Desa"} value={kel} onChange={(e) => setData('village', {
                                        "title": e.target.selectedOptions[0].text,
                                        "value": e.target.value
                                    })} disabled={kel.length < 2} />
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
                            <Button variant={"secondary"} disabled={processing} className={"w-24"} onClick={() => router.get("/dashboard")}>Batal</Button>
                            <Button variant={"primary"} loading={processing} className={"w-24"}>Simpan</Button>
                        </div>
                    </div>
                </form >
            </div >
        </UserLayout >
    );
}

export default EditBiodata;