import Guest from "@/Layouts/GuestLayout";
import { Link  } from "@inertiajs/react";

const News = ({ news }) => {
    return (
        <Guest title={"News"}>
            <div className="w-full h-96 flex justify-center">
                <img src={`/storage/${news.data.thumnil}`} alt="a" className="h-full" style={{ objectFit: "cover" }} />
            </div>
            <div className="mt-4">
                <h4 className="text-5xl font-bold capitalize">{news.data.title}</h4>
            </div>
            <div className="my-4">
                <p className="text-sm text-gray-400">Category</p>
                <Link href={`category/${news.data.category.name}`} className="uppercase font-medium text-blue-700 underline">{news.data.category.name}</Link>
            </div>

            <div dangerouslySetInnerHTML={{ __html: news.data.content }} className="text-gray-600"/>
        </Guest>
    );
}

export default News;