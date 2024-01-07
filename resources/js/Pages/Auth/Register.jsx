import { Link, useForm } from "@inertiajs/react";
import Guest from '@/Layouts/GuestLayout';
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import { useEffect } from "react";
import InputError from "@/Components/InputError";
import Dropdown from "@/helpers/Dropdown";

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        pin: '',
        email: '',
        gender: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        console.log(errors);
    }, [errors])

    const listGender = [
        {
            title: "::Plilih Jenis Kelamin::",
            value: "DEFAULT"
        },
        {
            title: "laki-laki",
            value: "male"
        },
        {
            title: "perempuan",
            value: "female"
        }
    ]

    const submit = async (e) => {
        e.preventDefault()
        post(route('register'));
    }

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    return (
        <Guest title={"Pembuatan Akun"}>
            <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={submit}>
                        <div>
                            <Label htmlFor={"Pin"} className={"block text-sm leading-6 text-gray-900"}>
                                Pin
                            </Label>
                            <Input className="my-2" name={"Pin"} type={"number"} value={data.pin} onChange={(e) => setData('pin', e.target.value)} err={errors.pin}/>
                        </div>
                        <div>
                            <Label htmlFor={"Nama lengkap"} className={"block text-sm leading-6 text-gray-900"}>
                                Nama Lengkap
                            </Label>
                            <Input className="my-2" name={"Nama lengkap"} type={"text"} value={data.name} onChange={(e) => setData('name', e.target.value)} err={errors.name}/>
                        </div>
                        <div>
                            <Label htmlFor={"Email"} className={"block text-sm leading-6 text-gray-900"}>
                                Eamil
                            </Label>
                            <Input className="my-2" name={"Email"} type={"email"} value={data.email} onChange={(e) => setData('email', e.target.value)} err={errors.email}/>
                        </div>
                        <div>
                            <Label htmlFor={"Jenis Kelamin"} className={"block text-sm leading-6 text-gray-900"}>
                                Pilih Jenis Kelamin
                            </Label>
                            <Dropdown name={"Jenis Kelamin"} value={listGender} onChange={(e) => setData('gender', e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor={"No HP"} className={"block text-sm leading-6 text-gray-900"}>
                                No. HP Aktif (Whatsapp)
                            </Label>
                            <Input className="my-2" name={"No HP"} type={"number"} value={data.phone} onChange={(e) => setData('phone', e.target.value)} err={errors.phone}/>
                        </div>
                        <div>
                            <Label htmlFor={"Password"} className={"block text-sm leading-6 text-gray-900"}>
                                Password
                            </Label>
                            <Input className="my-2" name={"Password"} type={"password"} value={data.password} onChange={(e) => setData('password', e.target.value)} err={errors.password}/>
                        </div>
                        <div>
                            <Label htmlFor={"Ulangi password"} className={"block text-sm leading-6 text-gray-900"}>
                                Ulangi Password
                            </Label>
                            <Input className="my-2" label={"Ulangi Password"} name={"Ulangi password"} type={"password"} value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} err={errors.password_confirmation}/>
                        </div>

                        <div>
                            {/* {
                                errMsg ?
                                    <p className="text-sm text-center text-red-600 mt-0 my-2 capitalize">{errMsg}</p>
                                    : ""
                            } */}
                            <button type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-my-white shadow-sm transition-all duration-300 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Daftar</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-base text-gray-500">
                        Sudah Punya Akun?
                        <Link href={route("login")} className="font-semibold mx-2 leading-6 text-blue-600 hover:text-blue-500">Login</Link>
                    </p>
                </div>
            </div>
        </Guest>
    );
}

export default Register;