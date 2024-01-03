const Input = ({ type, name, onChange, value, errMsg, className = "" }) => {
    return (
        <div>
            {
                type == "textarea" ?
                    <textarea
                        cols="30"
                        rows="4"
                        onChange={onChange}
                        value={value}
                        id={name}
                        name={name}
                        autoComplete={name}
                        className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ${className} ${errMsg ? "ring-2 ring-inset ring-red-600" : "ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"}`} >
                    </textarea>
                    :
                    <input
                        onChange={onChange}
                        value={value}
                        id={name}
                        name={name}
                        type={type}
                        autoComplete={name}
                        className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ${className} ${errMsg ? "ring-2 ring-inset ring-red-600" : "ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"}`} />
            }
            {errMsg ? <p className="text-red-600 text-sm mt-1.5">{errMsg}</p> : ""}
        </div>
    );
}

export default Input;