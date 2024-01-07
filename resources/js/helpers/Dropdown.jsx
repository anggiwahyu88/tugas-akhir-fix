const Dropdown = ({ name, onChange, value, err, disabled, disabledOption = [], className = "" }) => {
    console.log(disabledOption);
    return (
        <>
            <select id={name} name={name} autoComplete={name} required className={`mt-2 block w-full px-2 rounded-md border-0 py-2 bg-white text-gray-900 shadow-sm ${className} ${err ? "ring-2 ring-inset ring-red-600" : "ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"}`} defaultValue={'DEFAULT'} onChange={onChange} disabled={disabled}>
                {
                    value.map((data, i) => {
                        const disableValue = disabledOption.find((value) => value == data.value)

                        return (
                            <option key={i} className="w-full" disabled={data.value == "DEFAULT" || disableValue} value={data.value}>{data.title}</option>
                        )

                    })
                }
            </select>
        </>
    );
}

export default Dropdown;