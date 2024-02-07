import { useNavigate } from "react-router-dom"
import UserLayout from "../../../../Layout/UserLayout";
import TablePerent from "./TablePerent";
import Input from "../../../Libs/Input";
import Label from "../../../Libs/Label"
import { useEffect, useState } from "react";
import { api } from "../../../../Libs/api/api";

const EditBiodata = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [birth_place, setbirth_place] = useState("")
    const [date_birthday, setdate_birthday] = useState("")
    const [scholl, setscholl] = useState("")
    const [province, setprovince] = useState("")
    const [city, setcity] = useState("")
    const [subdistrict, setsubdistrict] = useState("")
    const [village, setvillage] = useState("")
    const [address, setaddress] = useState("")
    const [mother, setmother] = useState({
        name: "",
        income: "",
        work: "",
        education: "",
        phone: ""
    })
    const [father, setfather] = useState({
        name: "",
        income: "",
        work: "",
        education: "",
        phone: ""
    })

    const getData = async () => {
        const response = await api("GET", "/user");
        if (response == 401) navigate("/auth/login")
        setEmail(response.user.email)
        setName(response.user.name)
        setPhone(response.user.phone)
        setLoading(false)
    }

    useEffect(() => {
        getData();
    }, [])

    const submit = async (e) => {
        e.preventDefault()

        const response = await api("PUT", `api/user/{user}`, {
            email,
            name,
            phone,
            birth_place,
            date_birthday,
            scholl,
            province,
            city,
            subdistrict,
            village,
            address,
            mother,
            father
        })
    }

    if (loading) {
        return (
            <h1>loading</h1>
        )
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
                                    <Input name={"Email"} type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Nama lengkap"}>
                                        Nama Lengkap
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Nama lengkap"} type={"text"} value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"No HP"}>
                                        No HP
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"No HP"} type={"number"} value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Tempat Lahir"}>
                                        Tempat Lahir
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Tempat Lahir"} type={"text"} value={birth_place} onChange={(e) => setbirth_place(e.target.value)} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Tanggal lahir"}>
                                        Tanggal Lahir
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Tanggal lahir"} type={"date"} value={date_birthday} onChange={(e) => setdate_birthday(e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Asal Sekolah"}>
                                        Asal Sekolah
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Asal Sekolah"} type={"text"} value={scholl} onChange={(e) => setscholl(e.target.value)} />
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
                                    <Input name={"Provinsi"} type={"text"} value={province} onChange={(e) => setprovince(e.target.value)} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Wilayah/Kota"}>
                                        Wilayah/Kota
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Wilayah/Kota"} type={"text"} value={city} onChange={(e) => setcity(e.target.value)} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Kecamatan"}>
                                        Kecamatan
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Kecamatan"} type={"text"} value={subdistrict} onChange={(e) => setsubdistrict(e.target.value)} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Kelurahan/Desa"}>
                                        Kelurahan/Desa
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Kelurahan/Desa"} type={"text"} value={village} onChange={(e) => setvillage(e.target.value)} />
                                </div>
                            </div>

                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Alamat"}>
                                        Alamat
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    {/* <Input name={"Alamat"} type={"textarea"} value={address} onChange={(e) => setaddress(e.target.value)} /> */}
                                </div>
                            </div>
                        </div>

                        <TablePerent title={"Ibu"} setState={setmother} />
                        <TablePerent title={"Ayah"} setState={setfather} />

                        <div className="w-full flex justify-between my-8 px-6  border-t-2 border-gray-200 pt-4">
                            <button onClick={() => navigate("/student/dashboard/")} type="button" className="rounded-md bg-gray-200 px-5 py-2 text-sm leading-6 text-black shadow-sm transition-all duration-300 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500">Batal</button>
                            <button type="submit" className="rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold leading-6 text-my-white shadow-sm transition-all duration-300 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Simpan</button>
                        </div>
                    </div>
                </form >
            </div >
        </UserLayout >
    );
}

export default EditBiodata;