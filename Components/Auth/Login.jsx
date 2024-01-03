import { Link, useNavigate } from "react-router-dom";
import { checkIsRequired } from "../../Libs/checkIsRequired";
import { useState } from "react";
import { api } from "../../Libs/api/api";
import Layout from "../../Layout/Layout";
import Input from "../Libs/Input";
import Label from "../Libs/Label";

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errMsg, setErrMsg] = useState()
    const navigate = useNavigate()

    const initialState = {
        there_is_an_error: false,
        Email: "",
        Password: "",
    }

    const [invalid, setInvalid] = useState(initialState)

    const submit = async (e) => {
        e.preventDefault()
        setInvalid(initialState)

        checkIsRequired(e.target, setInvalid);

        const response = await api('POST', '/auth/login', {
            email,
            password
        })
        if (response.status_code == 400) return setErrMsg(response.message)
        localStorage.setItem("user", JSON.stringify(response.user))
        navigate("/student/dashboard")
    }
    return (
        <Layout title={"Login Pendaftar"}>
            <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={submit}>
                        <div>
                            <Label className={"block text-sm leading-6 text-gray-900"}>
                                Eamil
                            </Label>
                            <Input className="my-2" name={"Email"} type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} errMsg={invalid.Email} />
                        </div>
                        <div>
                            <Label className={"block text-sm leading-6 text-gray-900"}>
                                Password
                            </Label>
                            <Input className="my-2" name={"Password"} type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} errMsg={invalid.Password} />
                        </div>

                        <div>
                            {
                                errMsg ?
                                    <p className="text-sm text-center text-red-600 mt-0 my-2 capitalize">{errMsg}</p>
                                    : ""
                            }
                            <button type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-my-white shadow-sm transition-all duration-300 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Belum Mempunyai Akun?
                        <Link to="/auth/register" className="font-semibold mx-2 leading-6 text-blue-600 hover:text-blue-500">Daftar</Link>
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default Login;