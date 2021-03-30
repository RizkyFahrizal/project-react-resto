import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { link } from "../Axios/link";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const history = useHistory();

  async function login(data) {
    const res = await link.post("/login", data);
    let token = await res.data.token;

    sessionStorage.setItem("token", token);
    sessionStorage.setItem("email", res.data.data.email);
    sessionStorage.setItem("level", res.data.data.level);

    reset();

    const gettoken = () => sessionStorage.getItem("token");

    if (gettoken() != "undefined") {
      history.push("/admin");
      window.location.reload();
    }
  }

  return (
    <div>
      <div className="row mt-5">
        <div className="mx-auto col-4">
          <h1>Login User</h1>
        </div>
      </div>
      <div className="row my-auto">
        <div className="mx-auto col-4">
          <form onSubmit={handleSubmit(login)}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="email"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="passsword"
                ref={register({ required: true })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

//memahami bagaimana cara menambahkan fungsi login pada react resto. menggunakan session storage unntuk menyimpan session tokennya agar tokennya tersimpan pada set item token jika login yg dimasukan benar.

//lalu untuk validasinya menggunakan required pada file back.js. yaitu meng importkan required lalu membuat kondisi jika sessionstorage.getitem token sama gdn undefined maka ia akan selalu diarahkan ke halaman login.

//memahami bagaiamana membuat fungsi logout lalu melakukan login kembali dan juga menampilkan email dan level yang login.

//caranya dengan menambahkan navbar lalu membuat fungsi tombol Logout memiliki evennt onclick hapus, lalu di dalam function hapus memanggil history dari router-dom untuk mengarahkan atau .push ke halaman login.

//lalu agar setelah itu kita harus login ulang maka kita melakukan validasi lagi di dalam if session tokennya undefined maka ia tidak dibolehkan untuk masuk ke admin, dan jika tokennya null maka ia juga tidak boleh masuk ke admin.

//lalu menampilkan email dan level user mana yang login pada navbar, lalu mengambilnya menngunakan session storage get item email dan level.

//memahami bagaimana cara mengenkripsikan password yang di inputkan dari react resto. caranya yaitu memasang use Illuminate\Support\Facades\Hash lalu mamasang fungsi hash pada password di method register.

//dan juga memasangkan hash pada method login untuk mengechek password aslinya. lalu melakukan login untuk pengechekan, dan juga ditambahkan window.location.reload(); agar saat login otomatis melakukan reload

//membuat fungsi link pada dashboard agar jika dashboard di klik maka halaman akan dikosongkan. lalu menambahkan kondisi pada side.js agar jika level yang diambil melalui session storage . getitem itu admin, maka admin dapat mengakses semua halaman admin, jika koki atau kasir maka level tersebut akan dipillihkan sesuai kebutuhan dari level tersebut
