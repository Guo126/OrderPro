import request from '@/utils/request'

export function getCity(data) {
  return request({
    url: '/office/getCity',
    method: 'post'
  })
}

export function getArea(data) {
    return request({
      url: '/office/getArea',
      method: 'post',
      params: data
    })
  }

  export function getOffice(data) {
    return request({
      url: '/office/getOffice',
      method: 'post',
      params: data
    })
  }

  export function start(data) {
    return request({
      url: '/work/start',
      method: 'post',
      params: data
    })
  }

  export function end(data) {
    return request({
      url: '/work/end',
      method: 'post',
      params: data
    })
  }
  export function getNext(data) {
    return request({
      url: '/mission/getNext',
      method: 'post',
      params: data
    })
  }