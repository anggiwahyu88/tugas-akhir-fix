import { useLocation } from "react-router-dom"
import { major } from "../../data/major.json";
import NotFound from "../NotFound/NotFound";
import Layout from "../../Layout/Layout";

const Major = () => {
    const location = useLocation()

    const data = major.filter((major) => { return major.path == location.pathname })
    if (data.length <= 0) return <NotFound />

    return (
        <Layout title={data[0].name}>
            <div className="w-full flex justify-center py-6">
                <img src={data[0].img_url} alt="" />
            </div>
        </Layout>
    );
}

export default Major;