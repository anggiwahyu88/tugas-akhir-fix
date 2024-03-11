import { useForm, router } from "@inertiajs/react"
import { useState } from "react";
import UserLayout from "@/Layouts/UserLayout";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Modal from "@/Components/Modal";
import { major } from "@/helpers/data/major.json";

const FormPengumuman = () => {
    const [onModal, setOnModal] = useState(false)
    const { data, setData, post, processing, errors } = useForm({
        dpib: 0,
        titl: 0,
        tpm: 0,
        tp: 0,
        tkro: 0,
        tbsm: 0,
        tei: 0,
        tkj: 0
    });

    const submit = async (e) => {
        e.preventDefault()
        setOnModal(true)
    }

    const submitModal = () => {
        post(route('pendaftar.create'))
        setOnModal(false)
    }

    return (
        <UserLayout>
            <div className="w-full h-full bg-white px-4 py-6">
                <form className="flex flex-col items-center px-6" onSubmit={submit}>
                    <div className="p-4 rounded-lg w-full max-w-4xl shadow-2xl">
                        <div className="my-8">
                            <h3 className="text-primary text-2xl my-2 w-full px-4">Jumlah Siswa</h3>
                            {major.map((data, i) => {
                                return (
                                    <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`} key={i}>
                                        <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                            <Label className={"text-end uppercase tracking-widest"} htmlFor={data.nickname}>
                                                {data.nickname}
                                            </Label>
                                        </div>
                                        <div className="md:col-span-3 col-span-4">
                                            <Input name={data.nickname} type={"number"} onChange={(e) => setData(data.nickname, e.target.value)} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="w-full flex justify-between my-8 px-6  border-t-2 border-gray-200 pt-4">
                            <Button variant={"secondary"} className={"w-24"} onClick={() => router.get("/dashboard")}>Batal</Button>
                            <Button variant={"primary"} onClick={submit} className={"w-24"}>Simpan</Button>
                        </div>
                    </div>
                </form >

                <Modal show={onModal} onClose={() => setOnModal(false)}>
                    <div className="p-6 w-full">
                        <h2 className="text-2xl font-medium text-gray-900">
                            Konfirmasi Jumlah Siswa
                        </h2>


                        <div className="grid grid-cols-4 gap-6 py-4 mt-2">
                            {major.map((major, i) => {
                                return (
                                    <p className="ml-6 font-medium text-md text-center text-gray-600 uppercase tracking-wider" key={i}>{major.nickname}: {data[major.nickname]}</p>
                                )
                            })}
                        </div>

                        <div className="w-full flex justify-between my-5 px-6 pt-4">
                            <Button variant={"secondary"} disabled={processing} className={"w-24"} onClick={() => setOnModal(false)}>Batal</Button>
                            <Button variant={"primary"} onClick={submitModal} loading={processing} className={"w-24"}>Simpan</Button>
                        </div>
                    </div>
                </Modal>
            </div >
        </UserLayout >
    );
}

export default FormPengumuman;