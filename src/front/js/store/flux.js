const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
    },
    actions: {
      //
      snyncTokenFromLocateStore: () => {
        const token = localStorage.getItem("token");
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },
      login: async (email, password) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (resp.status !== 200) {
            alert("Ha ocurrido algun error");
            return false;
          }
          const data = await resp.json();
          console.log("El backend devuelve:", data);
          localStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("Ha ocurrido un error", error);
        }
      },
      logout: () => {
        localStorage.removeItem("token");
        console.log("login out");
        setStore({ token: null });
      },
    },
  };
};

export default getState;
