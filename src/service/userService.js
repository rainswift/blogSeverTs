import request from '@/utils/request'

// 用户注册
// const add = ({ name, telephone, password }) => {
//   return request.post('auth/register', { name, telephone, password });
// };
export const register = (data) => request.post('add',data);
// 用户登录
export const login = (data) => request.post('login',data);

// 获取用户信息
const info = () => {
  return request.get('auth/info');
};

export default {
  register,
  login,
  info,
};
