import Guest from "@/Layouts/GuestLayout";
import { Link } from "@inertiajs/react";

const NewsList = ({ news, title }) => {
    return (
        <Guest title={title}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((data, i) => {
                    return (
                        <Link href={`/news/${data.id}`} key={i}>
                            <div className='h-44 w-80 bg-gray-100 flex justify-center shadow-md'>
                                <img
                                    alt={data.title}
                                    src={`/storage/${data.thumnil}`}
                                    className='h-full object-cover'
                                />
                            </div>
                            <p className="py-4 text-2xl">
                                {data.title}
                            </p>
                        </Link>
                    )
                })}
            </div>
        </Guest>
    );
}

export default NewsList;