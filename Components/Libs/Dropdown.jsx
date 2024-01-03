const Dropdown = ({ name, onChange, value, errMsg, className = "" }) => {
    return (
        <>
            <select id={name} name={name} type={name} autoComplete={name} required className={`mt-2 block w-full px-2 rounded-md border-0 py-1.5 sm:py-2.5 bg-white text-gray-900 shadow-sm ${className} ${errMsg ? "ring-2 ring-inset ring-red-600" : "ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"}`} defaultValue={'DEFAULT'} onChange={onChange}>
                {
                    value.map((data, i) => {
                        return (
                            <option key={i} className="w-full" disabled={data.value == "DEFAULT"} value={data.value}>{data.title}</option>
                        )
                    })
                }
            </select>
            <p className="text-red-600 text-sm mt-1.5">{errMsg}</p>
        </>
    );
}

export default Dropdown;