import axios from 'axios'
import { ElMessage } from 'element-plus'
const service = axios.create({
    timeout: 6000, 
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;',
    }
})
//请求拦截
service.interceptors.request.use(
  (config) => {
		console.log(config)
    // 拦截的业务逻辑
    //获取本地 token
    // const profile = store.state.user.profile;
    // //判断是否有 token
    // if (profile.token) {
    //   //设置 token
    //   config.headers.Authorization = `Bearer ${profile.token}`;
    // }
    return config;
  },
  (err) => {
    //拦截失败
    return Promise.reject(err);
  }
);
//响应拦截
service.interceptors.response.use(
  (res) => {
		if(res.data.code == 400){
			 ElMessage.error(res.data.message)
		}
    return res.data;
  },
  (err) => {
    // 如果 401 状态码
    if (err.response && err.response.code === 401) {
	
      // //1. 清空本地无效信息
      // // 2.跳转到登录页面，并且需携带当前路由地址给登录页，以便登录成功后返回原页面
      // store.commit("user/setUser", {}); //引入 store 模块
      // // 当前路由地址--组件中'user?a=10', $router.path=== /user , $route.fullpath=== /user?a=10
      // // js 模块中：router.currentRoute.fullPath 就是当前路由地址，vue3 中 router.currentRoute 是 ref 响应式数据，需加 .value
      // // encodeURIComponent() js 原生转码 防止解析地址出问题，有可能会有特殊字符
      // const fullPath = encodeURIComponent(router.currentRoute.value.fullPath);
      // router.push("/login?redirectUrl=" + ""); //引入 router 模块
    }
    return Promise.reject(err);
  }
);

export default service
