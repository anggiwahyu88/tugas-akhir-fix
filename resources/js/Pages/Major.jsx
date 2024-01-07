import { major } from "../helpers/data/major.json";
// import NotFound from "../NotFound/NotFound";
import Guest from '@/Layouts/GuestLayout';

const Major = ({ nickname }) => {
    const data = major.filter((major) => { return nickname == major.nickname })
    // if (data.length <= 0) return <NotFound />

    return (
        <Guest title={data[0]?.name} >
            <div className="w-full flex justify-center py-6">
                <img src={data[0]?.img_url} alt="" />
            </div>
        </Guest>
    );
}

export default Major;