// @ts-ignore
import request from '@/utils/request'



export const editList = (data) => request.get('http://localhost:8080/edit/list', {params: data});
export const getUserInfo = (data) => request.get('http://localhost:8080/getUserInfo', {params: data});
export const editSave = (data) => request.post('http://localhost:8080/editSave',data);

// export function editList({data}: { data: any }) {
//   return request.get('http://localhost:8080/edit/list', {
//    	params: data
//    }).then(res => {
// 		 return res
//    })
// }
// export function getUserInfo() {
//     return request.get('http://localhost:8080/getUserInfo').then(res => {
//         return res
//     })
// }


// export function editSave({data}: { data: any }) {
//     console.log(data)
//     return request({
//         url: 'http://localhost:8080/editSave',
//         method: 'post',
//         data
//     })
// }