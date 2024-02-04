const Input = ({ type, name, onChange, value, err, accept, className = "" }) => {
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
                        className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ${className} ${err ? "ring-2 ring-inset ring-red-600" : "ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"}`} >
                    </textarea>
                    :
                    ""
            }
            {
                type == "file" ?
                    <input
                        accept={accept}
                        onChange={onChange}
                        value={value}
                        id={name}
                        name={name}
                        type={type}
                        autoComplete={name}
                        className={`block px-2 rounded-md py-1.5 text-gray-900 focus:outline-0 ${className} placeholder:text-gray-400 sm:text-sm sm:leading-6"}`} />
                    : ""
            }
            {
                type != "textarea" && type != "file" ?
                    <input
                        onChange={onChange}
                        value={value}
                        id={name}
                        name={name}
                        type={type}
                        autoComplete={name}
                        className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ${className} ${err ? "ring-2 ring-inset ring-red-600" : "ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"}`} />
                    : ""
            }
            {err ?
                <p className="text-sm text-red-600">{err}</p> : ""}
        </div>
    );
}

export default Input;