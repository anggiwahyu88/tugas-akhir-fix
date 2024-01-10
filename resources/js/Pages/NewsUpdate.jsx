
import UserLayout from "@/Layouts/UserLayout";
import { Link, useForm } from "@inertiajs/react";


const NewsUpdate = ({ news }) => {
    console.log(news);
    return (
        <UserLayout>
            <div class="overflow-x-auto shadow-md sm:rounded-lg px-4 py-6 min-h-[calc(100vh-64px)] bg-white">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Author
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            news.data.map((data, i) => {
                                return (
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={i}>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">
                                            {data.title}
                                        </th>
                                        <td class="px-6 py-4 capitalize">
                                            {data.author.name}
                                        </td>
                                        <td class="px-6 py-4 capitalize">
                                            {data.category.name}
                                        </td>
                                        <td class="px-6 py-4 text-right">
                                            <Link href={`/dashboard/news/update/${data.id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline mx-4">Hapus</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </UserLayout>
    );
}

export default NewsUpdate;