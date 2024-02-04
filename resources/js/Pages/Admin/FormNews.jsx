import Input from "@/Components/Input";
import Label from "@/Components/Label";
import UserLayout from "@/Layouts/UserLayout";
import { Link, useForm } from "@inertiajs/react";
import { lazy, Suspense } from "react";
import Dropdown from "@/Components/Dropdown";

const ReactQuill = lazy(() => import('react-quill'));
import 'react-quill/dist/quill.snow.css'

const FormNews = ({ option, news }) => {
    const formats = [
        "header", "height", "bold", "italic",
        "underline", "font",
        "list", "color", "bullet", "indent",
        "link", "align", "size",
    ];
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
                { align: [] }
            ],
            [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
        ]
    };

    const { data, setData, post, put, processing, errors } = useForm({
        title: news?.title || "",
        thumnil: "",
        content: news?.content || "",
        category: news?.id_category || "",
    });

    let urlImg
    if (!data.thumnil && news?.thumnil) urlImg = `/storage/${news.thumnil}`
    else if (news?.thumnil) urlImg = URL?.createObjectURL(data.thumnil)

    const submit = (e) => {
        e.preventDefault()
        if (news) {
            put(route("news.update", news.id))
        } else {
            post(route("news.create"))
        }
    }

    return (
        <UserLayout>
            <div className="w-full h-full bg-white px-4 py-6 min-h-[calc(100vh-64px)]">
                <form className="flex flex-col items-center px-6" onSubmit={submit}>
                    <div className="p-4 rounded-lg w-full max-w-4xl shadow-2xl">
                        <div className="my-8">
                            <h3 className="text-primary text-2xl my-2 w-full px-4">{`${news ? "Update" : "Upload"} news`}</h3>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"title"}>
                                        Judul
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Input type={"text"} onChange={(e) => setData('title', e.target.value)} name={"title"} value={data.title} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"thumnil"}>
                                        Thumnil
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    {urlImg
                                        ?
                                        <div className="w-40 md:mt-2">
                                            <img src={urlImg} alt="thumnil" className="object-cover h-full w-full" />
                                        </div>
                                        : ""
                                    }
                                    <Input type={"file"} accept="image/*" name={"thumnil"} onChange={(e) => setData('thumnil', e.target.files[0])} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                                    <Label className={"text-end"} htmlFor={"option 3"}>
                                        Category
                                    </Label>
                                </div>
                                <div className="md:col-span-3 col-span-4">
                                    <Dropdown name={"option 3"} value={option} onChange={(e) => setData('category', e.target.value)} defaultValue={data.category} />
                                </div>
                            </div>
                            <div className={`grid gap-1.5 my-4 md:grid-cols-4 md:grid-rows-1`}>
                                <div className="h-min col-span-4 flex justify-center">
                                    <Label className={"text-2xl"} htmlFor={"option 3"}>
                                        Content
                                    </Label>
                                </div>
                                <div className="md:col-span-4 col-span-4">
                                    <Suspense>
                                        <ReactQuill
                                            value={data.content}
                                            theme="snow"
                                            modules={modules}
                                            formats={formats}
                                            placeholder="write your content ...."
                                            onChange={(e) => setData("content", e)}
                                        />
                                    </Suspense>
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

export default FormNews;