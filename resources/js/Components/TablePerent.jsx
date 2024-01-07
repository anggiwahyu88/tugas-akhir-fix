import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Dropdown from "@/helpers/Dropdown";

const TablePerent = ({ title, setState, value }) => {
    const key = title == "Ibu" ? "mother" : "father"
    const optionsEducatin = [
        {
            value: 'DEFAULT',
            title: `::Pendidikan ${title}::`
        },
        {
            value: 'Tidak sekolah',
            title: "Tidak sekolah"
        },
        {
            value: 'SD/SMP/SMA atau yang sederajat',
            title: "SD/SMP/SMA atau yang sederajat"
        },
        {
            value: 'Diploma',
            title: "Diploma"
        },
        {
            value: 'S-1',
            title: "S-1"
        },
        {
            value: 'S-2',
            title: "S-2"
        },
        {
            value: 'S-2',
            title: "S-2"
        },
        {
            value: 'Lainnya',
            title: "Lainnya"
        },
    ]
    const optionsWork = [
        {
            value: 'DEFAULT',
            title: `::Pekerjaan ${title}::`
        },
        {
            value: 'Pegawai Negeri Sipil (Aparatur Negara)',
            title: "Pegawai Negeri Sipil (Aparatur Negara)"
        },
        {
            value: 'Guru Negeri/Swasta',
            title: "Guru Negeri/Swasta"
        },
        {
            value: 'Dosen Negeri/Swasta',
            title: "Dosen Negeri/Swasta"
        },
        {
            value: 'BUMN/BUMD',
            title: "BUMN/BUMD"
        },
        {
            value: 'Dokter/Tenaga Medis',
            title: "Dokter/Tenaga Medis"
        },
        {
            value: 'PENGACARA/LAWYER',
            title: "PENGACARA/LAWYER"
        },
        {
            value: 'TNI/POLRI',
            title: "TNI/POLRI"
        },
        {
            value: 'Karyawan Swasta',
            title: "Karyawan Swasta"
        },
        {
            value: 'Pengusaha/Wiraswasta',
            title: "Pengusaha/Wiraswasta"
        },
        {
            value: 'Swasta',
            title: "Swasta"
        },
        {
            value: 'Tidak Bekerja/Ibu Rumah Tangga',
            title: "Tidak Bekerja/Ibu Rumah Tangga"
        },
        {
            value: 'Sudah Meninggal',
            title: "Sudah Meninggal"
        },
        {
            value: 'Lainnya',
            title: "Lainnya"
        },
    ]

    const optionsIncome = [
        {
            value: 'DEFAULT',
            title: `::Penghasilan ${title}::`
        },
        {
            value: '0 - 5.000.000',
            title: "0 - 5.000.000"
        },
        {
            value: '5.000.000 - 10.000.000',
            title: "5.000.000 - 10.000.000"
        },
        {
            value: '10.000.000 - 15.000.000',
            title: "10.000.000 - 15.000.000"
        },
        {
            value: '15.000.000 - 20.000.000',
            title: "15.000.000 - 20.000.000"
        },
        {
            value: '20.000.000 - 25.000.000',
            title: "20.000.000 - 25.000.000"
        },
        {
            value: '25.000.000 - 30.000.000',
            title: "25.000.000 - 30.000.000"
        },
        {
            value: 'Lebih dari 30.000.0000',
            title: "Lebih dari 30.000.0000"
        },
    ]

    return (
        <div className="my-8">
            <h3 className="text-primary text-2xl my-2 w-full px-4">Data {title}</h3>
            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                    <Label className={"text-end"} htmlFor={`Nama ${title}`}>
                        {`Nama ${title}`}
                    </Label>
                </div>
                <div className="md:col-span-3 col-span-4">
                    <Input value={value.name} name={`Nama ${title}`} type={"text"} onChange={(e) => setState(key, 'name', e.target.value.toUpperCase())} />
                </div>
            </div>
            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                    <Label className={"text-end"} htmlFor={`Pendidikan ${title}`}>
                        {`Pendidikan ${title}`}
                    </Label>
                </div>
                <div className="md:col-span-3 col-span-4">
                    <Dropdown name={`Pendidikan ${title}`} value={optionsEducatin} onChange={(e) => setState(key, 'education', e.target.value)} />
                </div>
            </div>
            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                    <Label className={"text-end"} htmlFor={`Pekerjaan ${title}`}>
                        {`Pekerjaan ${title}`}
                    </Label>
                </div>
                <div className="md:col-span-3 col-span-4">
                    <Dropdown name={`Pekerjaan ${title}`} value={optionsWork} onChange={(e) => setState(key, 'work', e.target.value)} />
                </div>
            </div>
            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                    <Label className={"text-end"} htmlFor={`Penghasilan ${title}`}>
                        {`Penghasilan ${title}`}
                    </Label>
                </div>
                <div className="md:col-span-3 col-span-4">
                    <Dropdown name={`Penghasilan ${title}`} value={optionsIncome} onChange={(e) => setState(key, 'income', e.target.value)} />
                </div>
            </div>

            <div className={`grid gap-1.5 my-3 md:grid-cols-4 md:grid-rows-1 md:gap-5`}>
                <div className="h-min md:h-full md:flex md:justify-end md:items-center">
                    <Label className={"text-end"} htmlFor={`Nomor TLPN/HP/WA ${title}`}>
                        {`Nomor TLPN/HP/WA ${title}`}
                    </Label>
                </div>
                <div className="md:col-span-3 col-span-4">
                    <Input name={`Nomor TLPN/HP/WA ${title}`} type={"number"} onChange={(e) => setState(key, 'phone', e.target.value)} />
                </div>
            </div>
        </div>
    );
}

export default TablePerent;