import React, { useState } from "react";
import { link } from "../Axios/link";
import { useForm } from "react-hook-form";
import useGet from "../Hook/useGet";

const Detail = () => {
  let today = new Date().toISOString().slice(0, 10);
  const [awal, setAwal] = useState("2021-01-01");
  const [akhir, setAkhir] = useState(today);
  const [isi] = useGet(`/detail/${awal}/${akhir}`);
  const { register, handleSubmit } = useForm();

  let no = 1;

  function cari(data) {
    setAwal(data.tawal);
    setAkhir(data.takhir);
  }
  return (
    <div>
      <div className="row">
        <div>
          <h2>Detail Penjualan</h2>
        </div>
      </div>
      <div className="row">
        <form onSubmit={handleSubmit(cari)}>
          <div className="mb-3">
            <label htmlFor="tawal" className="form-label">
              Tanggal Awal
            </label>
            <input
              type="date"
              className="form-control"
              name="tawal"
              ref={register}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="takhir" className="form-label">
              Tanggal Akhir
            </label>
            <input
              type="date"
              className="form-control"
              name="takhir"
              ref={register}
            />
            <div className="mt-3">
              <input type="submit" className="btn btn-primary" name="submit" />
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        <table className="table mt-4">
          <thead>
            <tr>
              <th>No</th>
              <th>Faktur</th>
              <th>Tgl Order</th>
              <th>Menu</th>
              <th>Harga</th>
              <th>Jumlah</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {isi.map((val, index) => (
              <tr key={index}>
                <td>{no++}</td>
                <td>{val.idorder}</td>
                <td>{val.tglorder}</td>
                <td>{val.menu}</td>
                <td>{val.hargajual}</td>
                <td>{val.jumlah}</td>
                <td>{val.jumlah * val.hargajual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Detail;
