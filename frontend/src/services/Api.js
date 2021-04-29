import Base from "../services/Base.js";

const getRobots = async () => {
  return await Base({
    url: `/api/robots`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const Api = {
  getRobots,
};

export default Api;
