import { router } from "@inertiajs/react";

const Error401 = () => {
    return ( 
        <div className="h-screen w-full flex items-center justify-center">
            <div className="flex flex-col items-center justify-center flex-wrap gap-4">
                <div className="w-[26rem] my-4">
                    <img src="../storage/error-403.svg" alt="not found" style={{ objectFit: "cover" }} />
                </div>
                <p className="text-6xl font-semibold">Forbidden</p>
                <p className="text-3xl">You are unauthorized to see this page.</p>
                <button onClick={()=> router.get("/") } className="my-4 text-center border border-primary py-2 px-4 rounded text-xl text-primary hover:bg-primary hover:text-my-white transition-all duration-300">Go Home</button>
            </div>
        </div>
     );
}
 
export default Error401;