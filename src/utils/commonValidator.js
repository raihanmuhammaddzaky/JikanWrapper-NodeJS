export default function validateId(id){
    if(!id) throw new Error ("ID Tidak Boleh Kosong");
    if(isNaN(id)) throw new Error ("ID Harus berupa Angka");
    if(id < 0) throw new Error("ID Tidak Boleh 0 atau Negatif");
}