const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      dataUser: [],
      dataPlayList: [],
      videosYoutube: [],
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
        setStore({ token: null });
      },

      getUser: async () => {
        try {
          const store = getStore();
          const resp = await fetch(process.env.BACKEND_URL + "/api/user", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + store.token,
            },
          });
          const data = await resp.json();
          setStore({ dataUser: data });
          return store.dataUser;
        } catch (error) {
          console.error("Ha ocurrido un error", error);
        }
      },

      getPlayList: async () => {
        try {
          const store = getStore();
          const resp = await fetch(process.env.BACKEND_URL + "/api/playlists", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await resp.json();
          setStore({ dataPlayList: data });
          return store.dataPlayList;
        } catch (error) {
          console.error("Ha ocurrido un error", error);
        }
      },
    },
  };
};

export default getState;
