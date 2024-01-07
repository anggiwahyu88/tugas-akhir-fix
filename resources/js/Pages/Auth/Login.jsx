import { Link, useForm } from "@inertiajs/react";
import Guest from '@/Layouts/GuestLayout';
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import Label from "@/Components/Label";
import { useEffect } from "react";

const Login = () => {
    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        email: '',
        password: '',
        invalid: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = async (e) => {
        e.preventDefault()
        clearErrors('invalid')
        post(route('login'));
    }

    return (
        <Guest title={"Login Pendaftar"}>
            <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={submit}>
                        <div>
                            <Label className={"block text-sm leading-6 text-gray-900"} htmlFor={"email"}>
                                Eamil
                            </Label>
                            <Input
                                className="my-2"
                                name={"email"}
                                type={"email"}
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                err={errors.email}
                            />
                        </div>
                        <div>
                            <Label className={"block text-sm leading-6 text-gray-900"} htmlFor={"password"}>
                                Password
                            </Label>
                            <Input
                                className="my-2"
                                name={"password"}
                                type={"password"}
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                err={errors.password}
                            />
                        </div>

                        <div className="my-2 flex items-center gap-2">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span>
                                Remember me
                            </span>
                        </div>

                        <div>
                            {
                                errors.invalid ?
                                    <p className="text-sm text-center text-red-600 mt-0 my-2 capitalize">{errors.invalid}</p>
                                    : ""
                            }
                            <button type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-my-white shadow-sm transition-all duration-300 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" disabled={processing}>Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-base text-gray-500">
                        Belum Mempunyai Akun?
                        <Link href={route("register")} className="font-semibold mx-2 leading-6 text-blue-600 hover:text-blue-500">Daftar</Link>
                    </p>
                </div>
            </div>
        </Guest>

    );
}

export default Login;