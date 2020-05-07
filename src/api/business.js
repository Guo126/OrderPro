import request from '@/utils/request'

export function getBusiness(data) {
  return request({
    url: '/business/getBusiness',
    method: 'post',
    params: data
  })
}

export function getType() {
  return request({
    url: '/business/type',
    method: 'post'

  })
}

export function deleteBusiness(data) {
  return request({
    url: '/business/delete',
    method: 'post',
    params: data
  })
}

export function create(data) {
  return request({
    url: '/business/add',
    method: 'post',
    data

  })
}
export function rename(data) {
  return request({
    url: '/business/rename',
    method: 'post',
    params: data

  })
}
