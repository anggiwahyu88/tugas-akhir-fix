import Input from "@/Components/Input";
import Label from "@/Components/Label";
import UserLayout from "@/Layouts/UserLayout";
import { Link, useForm } from "@inertiajs/react";


const Pin = () => {
    const { data, setData, post, processing, errors } = useForm({
        pin: "",
    });

    const submit = (e) => {
        e.preventDefault()
        post(route("pin.create"))
    }

    return (
        <UserLayout>
            <div className="w-full h-full bg-white px-4 py-6 min-h-[calc(100vh-64px)]">
                <form className="flex flex-col items-center px-6" onSubmit={submit}>
                    <div className="p-4 rounded-lg w-full max-w-4xl shadow-2xl">
                        <div className="my-8">
                            <h3 className="text-primary text-2xl my-2 w-full px-4">Pin</h3>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"title"}>
                                        Pin
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input type={"number"} onChange={(e) => setData('pin', e.target.value)} name={"title"} value={data.pin} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-between my-8 px-6  border-t-2 border-gray-200 pt-4">
                            <Link href={"/dashboard"} as="button" type="button" className="rounded-md bg-gray-200 px-5 py-2 text-sm leading-6 text-black shadow-sm transition-all duration-300 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500">Batal</Link>
                            <button onClick={submit} type="submit" className="rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold leading-6 text-my-white shadow-sm transition-all duration-300 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" disabled={processing}>Simpan</button>
                        </div>
                    </div>
                </form >
            </div>
        </UserLayout>
    );
}

export default Pin;