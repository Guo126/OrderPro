import { getBusiness, getType, deleteBusiness, create, rename } from '@/api/business'
import router, { resetRouter } from '@/router'
import { getToken } from '@/utils/auth'

const state = {
  token: getToken()
}

const mutations = {

}

const actions = {
  //
  getBusiness({ commit }, params) {
    return new Promise((resolve, reject) => {
      getBusiness(params).then(response => {
        const { data } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getTypeList({ commit }) {
    return new Promise((resolve, reject) => {
      getType().then(response => {
        const { data } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  deleteBusiness({ commit }, info) {
    return new Promise((resolve, reject) => {
      deleteBusiness({ id: info.id, token: parseInt(state.token) }).then(response => {
        const { data } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  create({ commit }, form) {
    const { name, type, content } = form
    return new Promise((resolve, reject) => {
      create({ token: parseInt(state.token), businessName: name, businessDetail: content, businessTypeId: type }).then(response => {
        const { data } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  rename({ commit }, form) {
    const { id, name, type_id, content } = form
    return new Promise((resolve, reject) => {
      rename({ token: parseInt(state.token), id: id, name: name, desc: content, typeId: type_id }).then(response => {
        const { data } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
