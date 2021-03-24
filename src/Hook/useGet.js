import { useState, useEffect } from "react";
import { link } from "../Axios/link";

const useGet = (url) => {
  const [isi, setIsi] = useState([]);

  // useEffect(() => {
  //   async function fetchdata() {
  //     const request = await link.get(url);
  //     setIsi(request.data);
  //   }
  //   fetchdata();
  // }, [isi]);

  useEffect(() => {
    let ambil = true;
    async function fetchdata() {
      const res = await link.get(url);
      if (ambil) {
        setIsi(res.data);
      }
    }
    fetchdata();
    return () => {
      ambil = false;
    };
  }, [isi]);

  return [isi];
};

export default useGet;
