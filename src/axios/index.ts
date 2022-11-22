// @ts-ignore
import request from '@/utils/request'

// export const getInfoDe = (params) => http.get('/bedrooms/check/dorm/getInfoDe', {
// 	params,
// 	header: headForm,
// })

export function add({data}: { data: any }) {
  return request({
    url: 'http://localhost:8080/add',
    method: 'post',
    data
  })
}

