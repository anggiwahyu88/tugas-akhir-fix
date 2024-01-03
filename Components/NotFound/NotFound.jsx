import { useNavigate } from "react-router-dom"
import Layout from "../../Layout/Layout";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Layout title={"Halaman Not Found"}>
            <div className="flex flex-col items-center justify-center flex-wrap gap-4">
                <div className="w-[26rem] my-4">
                    <img src="/error-404.svg" alt="not found" style={{ objectFit: "cover" }} />
                </div>
                <p className="text-6xl font-semibold">Not Found</p>
                <p className="text-3xl">Page tidak ditemukan</p>
                <button onClick={() => navigate(-1)} className="my-4 text-center border border-primary py-2 px-4 rounded text-xl text-primary hover:bg-primary hover:text-my-white transition-all duration-300">Kembali</button>
            </div>
        </Layout>
    );
}

export default NotFound;