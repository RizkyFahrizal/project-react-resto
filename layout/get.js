import { link } from "./link.js";

export function get() {
    link.get('/pelanggan').then(res=>{
        console.log(res);
        let tampil=`<table class="table">
            <tr>
                <th>ID</th>    
                <th>Pelanggan</th>    
                <th>Alamat</th>    
                <th>Telp</th>    
            </tr>`;
            
        res.data.forEach(element=>{
            tampil+=` <tr>
                <th>${element.idpelanggan}</th>    
                <th>${element.pelanggan}</th>    
                <th>${element.alamat}</th>    
                <th>${element.telp}</th>    
            </tr>`
        });
        tampil+=`</tabel>`;
        document.querySelector('#out').innerHTML=tampil;
    });
  }