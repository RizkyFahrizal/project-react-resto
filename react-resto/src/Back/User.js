import React, { useState } from "react";
import useGet from "../Hook/useGet";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { link } from "../Axios/link";

const User = () => {
  const [isi] = useGet("/user/");
  const [mopen, setMopen] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  let no = 1;

  function tambah() {
    setMopen(true);
  }

  async function simpan(data) {
    let user = {
      email: data.email,
      password: data.password,
      level: data.level,
      relasi: "back",
    };
    const res = await link.post("/register", user);
    setMopen(false);
  }

  async function status(id) {
    const data = isi.filter((val) => val.id === id);

    let stat = 0;
    if (data[0].status === 1) {
      stat = 0;
    } else {
      stat = 1;
    }
    let kirim = {
      status: stat,
    };
    const res = await link.put("user/" + id, kirim);
  }
  return (
    <div>
      <Modal
        isOpen={mopen}
        onRequestClose={() => setMopen(false)}
        // onAfterOpen={isiForm}
        style={{
          overlay: {
            background: "transparent !important",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "40%",
          },
        }}
      >
        <div className="row">
          <div className="ml-4">
            <h2>Input Data User</h2>
          </div>
        </div>
        <div className="row">
          <div className="ml-2 col">
            <form onSubmit={handleSubmit(simpan)}>
              <div className="mb-3"></div>
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="@gmail.com"
                  ref={register({ required: true })}
                />
                {errors.email && "Email harus di isi!!"}
              </div>
              <div className="mb-3"></div>
              <div>
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="password"
                  ref={register}
                />
                <label htmlFor="posisi" className="form-label mt-3">
                  Posisi
                </label>
                <select name="level" ref={register} className="form-control">
                  <option value="admin">admin</option>
                  <option value="kasir">kasir</option>
                  <option value="koki">koki</option>
                </select>
              </div>
              <div className="mb-3 mt-4">
                <input
                  type="submit"
                  className="btn btn-primary"
                  name="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </Modal>
      <div className="row">
        <div>
          <h2>User</h2>
        </div>
      </div>
      <div className="row">
        <div>
          <input
            onClick={() => tambah()}
            className="btn btn-primary"
            type="submit"
            value="Tambah"
          />
        </div>
      </div>
      <div className="row">
        <div>
          <table className="table mt-4">
            <thead>
              <tr>
                <th>No</th>
                <th>User</th>
                <th>Level</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {isi.map((val, index) => (
                <tr key={index}>
                  <td> {no++}</td>
                  <td>{val.email}</td>
                  <td>{val.level}</td>
                  <td>
                    {val.status === 1 ? (
                      <input
                        className="btn btn-success"
                        type="submit"
                        value="Aktif"
                        onClick={() => status(val.id)}
                      />
                    ) : (
                      <input
                        className="btn btn-danger"
                        type="submit"
                        value="Banned"
                        onClick={() => status(val.id)}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
