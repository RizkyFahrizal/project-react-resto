import { link } from "./link.js";

export function post() {
    let data={
        pelanggan : 'asaf aasxios',
        alamat : 'aa axassdios',
        telp : '01863222248572',
    }
        link.post('/pelanggan',data).then(res=>{
            console.log(res)
            let tampil =`<h1>${res.data.pesan}</h1>`;
            document.querySelector('#out').innerHTML=tampil;
        });
}