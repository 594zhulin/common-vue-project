import request from '@/utils/request'

export const getAdminList = (params) => {
 return request('GET', '/api/v1/topics', params)
}