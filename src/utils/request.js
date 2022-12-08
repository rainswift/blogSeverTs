import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';
import qs from "qs";

const router = useRouter()
console.log(router)
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const service = axios.create({
    timeout: 6000, 
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;',
    }
})
//请求拦截
service.interceptors.request.use(
  (config) => {
	
    // 拦截的业务逻辑

      if (config.method === 'post' && config.headers['content-type'] == "application/x-www-form-urlencoded" ) {
          config.data =  qs.stringify(config.data);
      }
    //获取本地 token
    const token = localStorage.getItem("token");
    //判断是否有 token
    if (token) {
      //设置 token
      config.headers.Authorization = `Bearer ${token}`;
    }
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
		if(res.data.code == 403){
			 ElMessage.error(res.data.message)
			 window.location.href="/#/login";
		}
    return res.data;
  },
  (err) => {
    // 如果 401 状态码
		let response = err.response
		ElMessage.error(response.data.message)
    if (response.data.code === 403) {
			window.location.href="/#/login";
		
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
