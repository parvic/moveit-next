import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";

const userPersistedState = (key: string, initialState: any) => {

  const [state, setState] = useState(initialState);

  useEffect(() => {
    Cookies.set(key, JSON.stringify(state))
  }, [key, state]);
  return [state, setState];
}

export default userPersistedState;
