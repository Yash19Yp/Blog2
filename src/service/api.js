import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {},
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const getLatest = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dev.to/api/articles/latest`,
    method: "get",
    params: { per_page: "3", ...params },
    headers,
    data,
  });
};
export const getPublications = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://api.medium.com/v1/users/10142e3c71fe4a90cd8ec59efc7654ef98673dd7b1ee02104a45c0db912a5e083/publications`,
    method: "get",
    params,
    headers: {
      Authorization:
        "Bearer 285a1b0baf6b4b50b2a44b1a0ad6873377a327b19d01f02645e897d521d135436",
      ...headers,
    },
    data,
  });
};
export const getArticles = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dev.to/api/articles`,
    method: "get",
    params: { page: "1", per_page: "6", ...params },
    headers,
    data,
  });
};
