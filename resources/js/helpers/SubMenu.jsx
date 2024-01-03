import { Link } from '@inertiajs/react'
import { major } from "../helpers/data/major.json";

const SubMenu = ({ isSubMenu }) => {
    return (
        <nav className={`h-full absolute z-50 w-full flex flex-col gap-2 px-2 py-4 transition-all duration-1000 bg-gray-800 ${!isSubMenu.isActive ? "-translate-x-full" : "translate-x-0"}`}>
            {
                isSubMenu.name == "major" ?
                    major.map((data, i) => {
                        return (
                            <Link href={data.path} key={i} className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                                {data.name}
                            </Link>
                        )
                    })
                    :
                    <>
                        <Link href={"/sejarah"} className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">Sejarah</Link>
                        <Link href={"/visi-dan-misi"} className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">Visi dan Misi</Link>
                        <Link className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">Akreditasi</Link>
                        <Link className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">Fasilitas Pembelajaran</Link>
                    </>
            }
        </nav>
    );
}

export default SubMenu;
