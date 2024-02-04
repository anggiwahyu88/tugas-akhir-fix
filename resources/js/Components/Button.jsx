import Loader from "./Loader";

const Button = ({ children, loading, className, variant, ...props  }) => {
    return (
        <>
            {variant === "primary" ? <button {...props} type="submit" className={`flex justify-center items-center rounded-md bg-blue-600 px-5 py-1.5 text-sm font-semibold leading-6 text-my-white shadow-sm transition-all duration-300 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-blue-500 ${className}`} disabled={loading}>
                {loading ? <Loader /> : children}
            </button> : ""}
            {
                variant === "secondary" ?
                    <button {...props} type="button" className="rounded-md bg-gray-200 px-5 py-2 text-sm leading-6 text-black shadow-sm transition-all duration-300 hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500">{loading ? <Loader /> : children}</button>
                    : ""
            }
        </>
    );
}

export default Button;