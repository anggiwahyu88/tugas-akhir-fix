import Label from "@/Components/Label";
import Modal from "@/Components/Modal";
import UserLayout from "@/Layouts/UserLayout";
import { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import { major } from "@/helpers/data/major.json";
import Dropdown from "@/helpers/Dropdown";


const ChooseMajor = () => {
    const [onModal, setOnModal] = useState(false)

    const { data, setData, post, processing, errors } = useForm({
        option_1: "",
        option_2: "",
        option_3: ""
    });

    const option = major.map((data) => {
        return {
            title: data.name,
            value: data.id
        }
    })

    const getTitle = (id) => {
        return option.find((data) => data.value == id)?.title || ""
    }

    option.splice(0, 0, {
        title: "::Pilih Jurusan",
        value: "DEFAULT"
    });


    const submit = async (e) => {
        e.preventDefault()
        setOnModal(true)
    }

    const submitModal = () => {
        post(route('major.create'))
        setOnModal(false)
    }

    return (
        <UserLayout>
            <div className="w-full h-full bg-white px-4 py-6 min-h-[calc(100vh-64px)]">
                <form className="flex flex-col items-center px-6" onSubmit={submit}>
                    <div className="p-4 rounded-lg w-full max-w-4xl shadow-2xl">
                        <div className="my-8">
                            <h3 className="text-primary text-2xl my-2 w-full px-4">Jurusan</h3>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"option 1"}>
                                        Pilihan 1
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Dropdown name={"option 1"} value={option} onChange={(e) => setData('option_1', e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"option 2"}>
                                        Pilihan 2
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Dropdown name={"option 2"} value={option} onChange={(e) => setData('option_2', e.target.value)} disabled={!data.option_1} disabledOption={[data.option_1]} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"option 3"}>
                                        Pilihan 3
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Dropdown name={"option 3"} value={option} onChange={(e) => setData('option_3', e.target.value)} disabled={!data.option_1 || !data.option_2} disabledOption={[data.option_1, data.option_2]} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-between my-8 px-6  border-t-2 border-gray-200 pt-4">
                            <Link href={"/dashboard"} as="button" type="button" className="rounded-md bg-gray-200 px-5 py-2 text-sm leading-6 text-black shadow-sm transition-all duration-300 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500">Batal</Link>
                            <button onClick={submit} type="submit" className="rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold leading-6 text-my-white shadow-sm transition-all duration-300 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" disabled={processing}>Simpan</button>
                        </div>
                    </div>
                </form >

                <Modal show={onModal} onClose={() => setOnModal(false)}>
                    <div className="p-6 w-full">
                        <h2 className="text-lg font-medium text-gray-900">
                            Konfirmasi pilihan jurusan
                        </h2>

                        <div className="">
                            <p className="my-2 text-lg font-medium  text-gray-700">Pilihan 1: <span className="text-base text-gray-600">{getTitle(data.option_1)}</span>
                            </p>
                            <p className="my-2 text-lg font-medium  text-gray-700">Pilihan 2: <span className="text-base text-gray-600">{getTitle(data.option_2)}</span>
                            </p>
                            <p className="my-2 text-lg font-medium  text-gray-700">Pilihan 3: <span className="text-base text-gray-600">{getTitle(data.option_3)}</span>
                            </p>
                        </div>

                        <div className="w-full flex justify-between my-5 px-6 pt-4">
                            <button onClick={() => setOnModal(false)} type="button" className="rounded-md bg-gray-200 px-5 py-2 text-sm leading-6 text-black shadow-sm transition-all duration-300 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500">Batal</button>
                            <button onClick={submitModal} type="submit" className="rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold leading-6 text-my-white shadow-sm transition-all duration-300 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" disabled={processing}>Simpan</button>
                        </div>
                    </div>
                </Modal>
            </div >
        </UserLayout >
    );
}

export default ChooseMajor;