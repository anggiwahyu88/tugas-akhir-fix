import { Link } from "react-router-dom";
import UserLayout from "../../../Layout/UserLayout";
import { useState, lazy, Suspense } from "react";
const ReactQuill = lazy(() => import('react-quill'));
import 'react-quill/dist/quill.snow.css'

const Dashboard = () => {
    const [value, setValue] = useState('');

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
    return (
        <UserLayout>
            <div className="flex gap-4 justify-center flex-wrap px-4 py-6">
                <div className="rounded w-[26rem] h-56 flex flex-col border border-yellow-500  opacity-50">
                    <div className="flex items-center bg-yellow-500 p-3 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2" viewBox="0 0 256 256"><path d="M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z"></path></svg>
                        <p>Mengisi Biodata</p>
                    </div>
                    <div className="p-3 w-full h-full flex flex-col justify-between">
                        <p>Harap lengkapi biodata terlebih dahulu</p>
                        <Link href={"/biodata"} className="text-center bg-yellow-500 w-full py-1.5 border border-yellow-600 text-white">Lengkapi Biodata</Link>
                    </div>
                </div>
                <div className="rounded w-[26rem] h-56 flex flex-col border border-yellow-600">
                    <div className="flex items-center bg-yellow-500 p-3 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2" viewBox="0 0 256 256"><path d="M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z"></path></svg>
                        <p>Mengisi Nilai Rapor</p>
                    </div>
                    <div className="p-3 w-full h-full flex flex-col justify-between">
                        <p>Harap lengkapi biodata terlebih dahulu</p>
                        <button className="bg-yellow-500 w-full py-1.5 border border-yellow-600 text-white">Lengkapi Biodata</button>
                    </div>
                </div>
                <div className="rounded w-[26rem] h-56 flex flex-col border border-green-600">
                    <div className="flex items-center bg-green-500 p-3 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2" viewBox="0 0 256 256"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg>
                        <p>Memilih Jurusan</p>
                    </div>
                    <div className="p-3 w-full h-full flex flex-col justify-between">
                        <p>Harap lengkapi biodata terlebih dahulu</p>
                        <button className="bg-green-600 w-full py-1.5 border border-green-700 text-white">Lengkapi Biodata</button>
                    </div>
                </div>
                <div className="rounded w-[26rem] h-56 flex flex-col border border-yellow-500">
                    <div className="flex items-center bg-yellow-500 p-3 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2" viewBox="0 0 256 256"><path d="M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z"></path></svg>
                        <p>Kelengkapan Biodata</p>
                    </div>
                    <div className="p-3 w-full h-full flex flex-col justify-between">
                        <p>Harap lengkapi biodata terlebih dahulu</p>
                        <button className="bg-yellow-500 w-full py-1.5 border border-yellow-600 text-white">Lengkapi Biodata</button>
                    </div>
                </div>
            </div>
            <Suspense>
                <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    placeholder="write your content ...."
                    onChange={setValue}
                    style={{ height: "220px" }}
                />
            </Suspense>
        </UserLayout>
    );
}

export default Dashboard;