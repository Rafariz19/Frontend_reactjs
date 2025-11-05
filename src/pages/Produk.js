import react from "react";
import { useNavigate } from "react-router-dom";
function Produk() {
    const navigate = useNavigate();

    function goTambahData() {
        navigate('/produk/Add');
    }
    return(
        <div>
            <button class="btn btn-primary" onClick={goTambahData}>Tambah Data </button>
            <h1>
                Produk
            </h1>
        </div>
    );
}
export default Produk;