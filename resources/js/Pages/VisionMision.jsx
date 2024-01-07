import Guest from '@/Layouts/GuestLayout';

const VisionMision = () => {
    return (
        <Guest title={"Visi dan Misi"}>
            <div className="text-justify">
                <h3 className="font-semibold my-4 text-xl">Visi Sekolah</h3>
                <p>Menjadi Sekolah Besar, berkompetisi global dan berakhlakul karimah</p>

                <h3 className="font-semibold my-4 text-xl">Misi Sekolah</h3>
                <ul className="flex flex-col gap-2">
                    <li>Menjaga eksistensi pelayanan terhadap pelanggan</li>
                    <li>Melaksanakan Proses Belajar Mengajar dengan kurikulum berbasis Kompetensi.
                    </li>
                    <li>Melaksanakan Pembinaan Kesiswaan yang berbudi pekerti luhur, berkarakter serta berakhlakul karimah.</li>
                    <li>Melaksanakan pengembangan Sarana dan Prasarana yang berwawasan Lingkungan Hidup.</li>
                    <li> Melaksanakan hubungan kerja pada tingkat global</li>
                    <li>  Melaksanakan pembinaan terhadap keterampilan agar mampu bersaing tingkat global.</li>
                    <li> Melaksanakan hubungan kerjasama industri yang bersifat saling mengisi dan mengikuti perkembangan zaman.</li>
                </ul>

                <h3 className="font-semibold my-4 text-xl">Tujuan Sekolah</h3>
                <ul className="flex flex-col gap-2">
                    <li>Menyiapkan siswa untuk memasuki lapangan kerja serta mengembangkan sikap professional.</li>
                    <li> Menyiapkan siswa agar mampu memilih karier, mampu berkompetisi dan mampu mengembangkan diri.</li>
                    <li>Menyiapkan tenaga kerja tingkat menengah untuk mengisi kebutuhan dunia usaha atau dunia industri pada saat ini maupun masa yang akan datang.</li>
                    <li>Menyiapkan tamatan agar menjadi warga negara yang Produktif, Adaptif , Kreatif, berbudi pekerti luhur/berakhlaq mulia.</li>
                    <li>Menyiapkan siswa yang masih ingin melanjutkan ke jenjang pendidikan yang lebih tinggi.</li>
                </ul>
            </div>
        </Guest>
    );
}

export default VisionMision;