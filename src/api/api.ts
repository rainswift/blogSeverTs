// @ts-ignore
import request from '@/utils/request'

let headForm = {
	'Content-Type':"application/x-www-form-urlencoded"
}

export const editList = (data) => request.get('edit/list', {params: data});
export const getUserInfo = (data) => request.get('getUserInfo', {params: data});
export const editSave = (data) => request.post('edit/save',data);
export const editDeatils = (data) => request.get('edit/deatils', {params: data});

// export const editDelect = (data) => request.post('edit/delect',data,{headers:headForm});
export function editDelect(data) {
	return request({
		url: 'edit/delect',
		method: 'post',
		data: data,
		headers: {
			'content-type':"application/x-www-form-urlencoded",
		},
	})
}
