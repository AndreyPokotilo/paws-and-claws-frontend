import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://paws-and-claws-store.onrender.com',
  // baseURL: "https://paws-and-claws-store-k6lb.onrender.com",
  // baseURL: 'http://localhost:4000',
  baseURL: 'https://paws-and-claws-backend.onrender.com',
  withCredentials: true,
});

const setToken = token => {
  return (instance.defaults.headers.common.authorization = token
    ? `Bearer ${token}`
    : '');
};

instance.interceptors.response.use(
  response => response,
  async error => {
    if (
      error?.response?.status === 401 &&
      !error?.config?._retry &&
      error.request.responseURL !==
        'https://paws-and-claws-backend/api/auth/verifyResetToken'
    ) {
      try {
        const { data } = await instance.post(
          '/api/auth/refresh',
          {},
          { withCredentials: true },
        );
        localStorage.setItem('accessToken', data?.accessToken);
        error.config.headers.authorization = `Bearer ${data?.accessToken}`;
        error.config._retry = true;
        setToken(data?.accessToken);
        return instance(error.config);
      } catch (refeshError) {
        console.error('Unable to refresh token', refeshError);
        Promise.reject(refeshError);
      }
    }

    return Promise.reject(error);
  },
);

export const register = async newUser => {
  const { data: result } = await instance.post('/api/auth/register', newUser);
  setToken(result.data.user.accessToken);
  localStorage.setItem('accessToken', result.data.user.accessToken);
  return result;
};

export const login = async user => {
  const { data: result } = await instance.post('/api/auth/login', user);
  setToken(result.data.user.accessToken);
  localStorage.setItem('accessToken', result.data.user.accessToken);
  return result;
};

export const logout = async () => {
  const { data } = await instance.get('/api/auth/logout');
  setToken();
  localStorage.clear();
  return data;
};

export const getCurrent = async () => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    setToken(accessToken);

    const { data } = await instance.get('/api/auth/current', {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.log('error:', error);
    setToken();
    throw error;
  }
};

export const resendVerifyEmail = async email => {
  const data = await instance.post('/api/auth/verify', { email });
  return data;
};

export const resetPassword = async email => {
  const data = await instance.post('/api/auth/resetPassword', { email });
  return data;
};

export const verifyResetToken = async resetPasswordToken => {
  const data = await instance.post('/api/auth/verifyResetToken', {
    resetPasswordToken,
  });
  return data.status;
};

export const updatePassword = async newPass => {
  const data = await instance.patch('/api/auth/updatePassword', newPass);
  return data.request.status;
};

export default instance;
