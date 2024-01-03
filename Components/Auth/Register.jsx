import Dropdown from "../Libs/Dropdown";
import Layout from "../../Layout/Layout";
import Input from "../Libs/Input";
import Label from "../Libs/Label";
import { validatePhoneNumber } from "../../Libs/validatePhoneNumber";
import { Link, useNavigate } from "react-router-dom";
import { checkIsRequired } from "../../Libs/checkIsRequired";
import { useState } from "react";
import { api } from "../../Libs/api/api";

const Register = () => {
    const [name, setName] = useState("")
    const [pin, setPin] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [phone, setPhone] = useState("08")
    const [password, setPassword] = useState("")
    const [repertPassword, setRepertPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")

    const navigate = useNavigate()

    const initialState = {
        "Nama lengkap": "",
        Email: "",
        "Jenis Kelamin": "",
        "No HP": "",
        Password: "",
        "Ulangi password": ""
    }

    const [invalid, setInvalid] = useState(initialState)

    const listGender = [
        {
            title: "--Pilih Jenis Kelamin--",
            value: "DEFAULT"
        },
        {
            title: "Laki-Laki",
            value: "male"
        },
        {
            title: "Perempuan",
            value: "female"
        }
    ]

    const submit = async (e) => {
        e.preventDefault()
        setInvalid(initialState)
        setErrMsg("")

        checkIsRequired(e.target, setInvalid);

        const PhoneIsValid = validatePhoneNumber(phone)
        if (!PhoneIsValid.isValid) {
            setInvalid((prev) => ({
                ...prev,
                ["No HP"]: PhoneIsValid.msg,
            }))
            return
        }

        if (password != repertPassword) {
            setInvalid((prev) => ({
                ...prev,
                "Password": "Password tidak sama",
                "Ulangi password": "Password tidak sama",
            }))
            return
        }

        const response = await api('POST', '/auth/register', {
            pin,
            name,
            email,
            gender,
            phone,
            password
        })
        if (response.status_code == 400) return setErrMsg(response.message)
        localStorage.setItem("user", JSON.stringify(response.user))
        navigate("/student/dashboard")
    }

    return (
        <Layout title={"Pembuatan Akun"}>
            <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={submit}>
                        <div>
                            <Label htmlFor={"Pin"} className={"block text-sm leading-6 text-gray-900"}>
                                Pin
                            </Label>
                            <Input className="my-2" name={"Pin"} type={"number"} value={pin} onChange={(e) => setPin(e.target.value)} errMsg={invalid["Pin"]} />
                        </div>
                        <div>
                            <Label htmlFor={"Nama lengkap"} className={"block text-sm leading-6 text-gray-900"}>
                                Nama Lengkap
                            </Label>
                            <Input className="my-2" name={"Nama lengkap"} type={"text"} value={name} onChange={(e) => setName(e.target.value)} errMsg={invalid["Nama lengkap"]} />
                        </div>
                        <div>
                            <Label htmlFor={"Email"} className={"block text-sm leading-6 text-gray-900"}>
                                Eamil
                            </Label>
                            <Input className="my-2" name={"Email"} type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} errMsg={invalid.Email} />
                        </div>
                        <div>
                            <Label htmlFor={"Jenis Kelamin"} className={"block text-sm leading-6 text-gray-900"}>
                                Pilih Jenis Kelamin
                            </Label>
                            <Dropdown name={"Jenis Kelamin"} value={listGender} onChange={(e) => setGender(e.target.value)} errMsg={invalid["Jenis Kelamin"]} />
                        </div>
                        <div>
                            <Label htmlFor={"No HP"} className={"block text-sm leading-6 text-gray-900"}>
                                No. HP Aktif (Whatsapp)
                            </Label>
                            <Input className="my-2" name={"No HP"} type={"number"} value={phone} onChange={(e) => setPhone(e.target.value)} errMsg={invalid["No HP"]} />
                        </div>
                        <div>
                            <Label htmlFor={"Password"} className={"block text-sm leading-6 text-gray-900"}>
                                Password
                            </Label>
                            <Input className="my-2" name={"Password"} type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} errMsg={invalid.Password} />
                        </div>
                        <div>
                            <Label htmlFor={"Ulangi password"} className={"block text-sm leading-6 text-gray-900"}>
                                Ulangi Password
                            </Label>
                            <Input className="my-2" label={"Ulangi Password"} name={"Ulangi password"} type={"password"} value={repertPassword} onChange={(e) => setRepertPassword(e.target.value)} errMsg={invalid["Ulangi password"]} />
                        </div>

                        <div>
                            {
                                errMsg ?
                                    <p className="text-sm text-center text-red-600 mt-0 my-2 capitalize">{errMsg}</p>
                                    : ""
                            }
                            <button type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-my-white shadow-sm transition-all duration-300 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Daftar</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Sudah Punya Akun?
                        <Link to="/auth/login" className="font-semibold mx-2 leading-6 text-blue-600 hover:text-blue-500">Login</Link>
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default Register;