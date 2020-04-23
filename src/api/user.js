import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/staff/login',
    method: 'post',
    // params: { username: "admin", pwd: "admin" }

    params: { username: data.username, pwd: data.pwd }
  })
}
// export function login(data) {
//   return request({
//     url: '/vue-element-admin/user/login',
//     method: 'post',
//     data
//   })
// }

// export function getInfo(token) {
//   return request({
//     url: '/vue-element-admin/user/info',
//     method: 'get',
//     params: { token }
//   })
// }
export function getInfo(data) {
  return request({
    url: '/staff/getStaffInfo',
    method: 'post',
    params: data
  })
}

export function logout(token) {
  return request({
    url: '/staff/login',
    method: 'post',
    params: { username: 'admin', pwd: 'test1' }
  })
}

export function search(data) {
  return request({
    url: '/staff/searchStaff',
    method: 'post',
    params: { name: data.name , role: data.role ,levelId: data.level ,areaId: data.areaId }
  })
}

export function create(data) {
  return request({
    url: '/staff/create',
    method: 'post',
    data
  })
}

export function remove(data){
  return request({
    url: './staff/delete',
    method: 'post',
    params: data
  })
}

// export function logout() {
//   return request({
//     url: '/vue-element-admin/user/logout',
//     method: 'post'
//   })
// }
