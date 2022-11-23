// @ts-ignore
import request from '@/utils/request'

export function editSave({data}: { data: any }) {
    console.log(data)
    return request({
        url: 'http://localhost:8080/editSave',
        method: 'post',
        data
    })
}