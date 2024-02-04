import { useForm, router } from "@inertiajs/react"
import { useState } from "react";
import UserLayout from "@/Layouts/UserLayout";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Modal from "@/Components/Modal";

const InputRapor = () => {
    const [onModal, setOnModal] = useState(false)
    const { data, setData, post, processing, errors } = useForm({
        semester_1: {
            "inggris": 0,
            "indonesia": 0,
            "matematika": 0,
            "ipa": 0,
        },
        semester_2: {
            "inggris": 0,
            "indonesia": 0,
            "matematika": 0,
            "ipa": 0,
        },
        semester_3: {
            "inggris": 0,
            "indonesia": 0,
            "matematika": 0,
            "ipa": 0,
        },
        semester_4: {
            "inggris": 0,
            "indonesia": 0,
            "matematika": 0,
            "ipa": 0,
        },
        semester_5: {
            "inggris": 0,
            "indonesia": 0,
            "matematika": 0,
            "ipa": 0,
        },
    });

    const handleChange = (name, key, value) => {
        let dataRapor = data[name]
        dataRapor[key] = Number(value)
        setData(key, dataRapor)
    }



    const submit = async (e) => {
        e.preventDefault()
        setOnModal(true)
    }

    const submitModal = () => {
        post(route('rapor.create'))
        setOnModal(false)
    }

    return (
        <UserLayout>
            <div className="w-full h-full bg-white px-4 py-6">
                <form className="flex flex-col items-center px-6" onSubmit={submit}>
                    <div className="p-4 rounded-lg w-full max-w-4xl shadow-2xl">
                        <div className="my-8">
                            <h3 className="text-primary text-2xl my-2 w-full px-4">Semester 1</h3>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"B.inggris1"}>
                                        B. Inggris
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"B.inggris1"} type={"number"} onChange={(e) => handleChange('semester_1', "inggris", e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"b.indonesia1"}>
                                        B. Indonesia
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"b.indonesia1"} type={"number"} onChange={(e) => handleChange('semester_1', "indonesia", e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"IPA1"}>
                                        IPA
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"IPA1"} type={"number"} onChange={(e) => handleChange('semester_1', "ipa", e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Mateamtika1"}>
                                        Mateamtika
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Mateamtika1"} type={"number"} onChange={(e) => handleChange('semester_1', "matematika", e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="my-8">
                            <h3 className="text-primary text-2xl my-2 w-full px-4">Semester 2</h3>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"b.inggris2"}>
                                        B. Inggris
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"b.inggris2"} type={"number"} onChange={(e) => handleChange('semester_2', 'inggris', e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"b.indonesia2"}>
                                        B. Indonesia
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"b.indonesia2"} type={"number"} onChange={(e) => handleChange('semester_2', 'indonesia', e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"IPA2"}>
                                        IPA
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"IPA2"} type={"number"} onChange={(e) => handleChange('semester_2', 'ipa', e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Mateamtika2"}>
                                        Mateamtika
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Mateamtika2"} type={"number"} onChange={(e) => handleChange('semester_2', 'matematika', e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="my-8">
                            <h3 className="text-primary text-2xl my-2 w-full px-4">Semester 3</h3>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"b.inggris3"}>
                                        B. Inggris
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"b.inggris3"} type={"number"} onChange={(e) => handleChange('semester_3', 'inggris', e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"b.indonesia3"}>
                                        B. Indonesia
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"b.indonesia3"} type={"number"} onChange={(e) => handleChange('semester_3', 'indonesia', e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"IPA3"}>
                                        IPA
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"IPA3"} type={"number"} onChange={(e) => handleChange('semester_3', 'ipa', e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Mateamtika3"}>
                                        Mateamtika
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Mateamtika3"} type={"number"} onChange={(e) => handleChange('semester_3', 'matematika', e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="my-8">
                            <h3 className="text-primary text-2xl my-2 w-full px-4">Semester 4</h3>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"b.inggris4"}>
                                        B. Inggris
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"b.inggris4"} type={"number"} onChange={(e) => handleChange('semester_4', 'inggris', e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"b.indonesia4"}>
                                        B. Indonesia
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"b.indonesia4"} type={"number"} onChange={(e) => handleChange('semester_4', 'indonesia', e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"IPA4"}>
                                        IPA
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"IPA4"} type={"number"} onChange={(e) => handleChange('semester_4', 'ipa', e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Mateamtika4"}>
                                        Mateamtika
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Mateamtika4"} type={"number"} onChange={(e) => handleChange('semester_4', 'matematika', e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="my-8">
                            <h3 className="text-primary text-2xl my-2 w-full px-4">Semester 5</h3>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"b.inggris5"}>
                                        B. Inggris
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"b.inggris5"} type={"number"} onChange={(e) => handleChange('semester_5', 'inggris', e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"b.indonesia5"}>
                                        B. Indonesia
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"b.indonesia5"} type={"number"} onChange={(e) => handleChange('semester_5', 'indonesia', e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"IPA5"}>
                                        IPA
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"IPA5"} type={"number"} onChange={(e) => handleChange('semester_5', 'ipa', e.target.value)} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"Mateamtika5"}>
                                        Mateamtika
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input name={"Mateamtika5"} type={"number"} onChange={(e) => handleChange('semester_5', 'matematika', e.target.value)} />
                                </div>
                            </div>
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
                            Konfirmasi nilai rapor
                        </h2>


                        <div className="flex justify-around items-center gap-6 flex-wrap">
                            <div>
                                <h3 className="mt-1 font-medium text-gray-700">
                                    semester 1:
                                </h3>
                                <p className="ml-6 font-medium text-sm text-gray-600">B. Inggris: {data.semester_1.inggris}</p>
                                <p className="ml-6 font-medium text-sm text-gray-600">B. Indonesia: {data.semester_1.indonesia}</p>
                                <p className="ml-6 font-medium text-sm text-gray-600">IPA: {data.semester_1.ipa}</p>
                                <p className="ml-6 font-medium text-sm text-gray-600">Matematika: {data.semester_1.matematika}</p>
                            </div>

                            <div>
                                <h3 className="mt-1 font-medium text-gray-700">
                                    semester 2:
                                </h3>
                                <p className="ml-6 font-medium text-sm text-gray-600">B. Inggris: {data.semester_2.inggris}</p>
                                <p className="ml-6 font-medium text-sm text-gray-600">B. Indonesia: {data.semester_2.indonesia}</p>
                                <p className="ml-6 font-medium text-sm text-gray-600">IPA: {data.semester_2.ipa}</p>
                                <p className="ml-6 font-medium text-sm text-gray-600">Matematika: {data.semester_2.matematika}</p>
                            </div>

                            <div>
                                <h3 className="mt-1 font-medium text-gray-700">
                                    semester 3:
                                </h3>
                                <p className="ml-6 font-medium text-sm text-gray-600">B. Inggris: {data.semester_3.inggris}</p>
                                <p className="ml-6 font-medium text-sm text-gray-600">B. Indonesia: {data.semester_3.indonesia}</p>
                                <p className="ml-6 font-medium text-sm text-gray-600">IPA: {data.semester_3.ipa}</p>
                                <p className="ml-6 font-medium text-sm text-gray-600">Matematika: {data.semester_3.matematika}</p>
                            </div>

                            <div>
                                <h3 className="mt-1 font-medium text-gray-700">
                                    semester 4:
                                </h3>
                                <p className="ml-6 font-medium text-sm text-gray-600">B. Inggris: {data.semester_4.inggris}</p>
                                <p className="ml-6 font-medium text-sm text-gray-600">B. Indonesia: {data.semester_4.indonesia}</p>
                                <p className="ml-6 font-medium text-sm text-gray-600">IPA: {data.semester_4.ipa}</p>
                                <p className="ml-6 font-medium text-sm text-gray-600">Matematika: {data.semester_4.matematika}</p>
                            </div>

                            <div>
                                <h3 className="mt-1 font-medium text-gray-700">
                                    semester 5:
                                </h3>
                                <p className="ml-6 font-medium text-sm text-gray-600">B. Inggris: {data.semester_5.inggris}</p>
                                <p className="ml-6 font-medium text-sm text-gray-600">B. Indonesia: {data.semester_5.indonesia}</p>
                                <p className="ml-6 font-medium text-sm text-gray-600">IPA: {data.semester_5.ipa}</p>
                                <p className="ml-6 font-medium text-sm text-gray-600">Matematika: {data.semester_5.matematika}</p>
                            </div>
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

export default InputRapor;