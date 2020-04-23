import { getCity, getArea, getOffice ,start ,end ,getNext} from '@/api/office'
import router, { resetRouter } from '@/router'
import { getToken } from '@/utils/auth'


const state = {
  token: getToken()
}


const mutations = {

}

const actions = {
  // 
  getCity({ commit }) {
    return new Promise((resolve, reject) => {
      getCity().then(response => {
        const { data } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getArea({ commit }, info) {
    const { cityId } = info;
    return new Promise((resolve, reject) => {
      getArea({ cityId: cityId }).then(response => {
        const { data } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getOffice({ commit }, info) {
    return new Promise((resolve, reject) => {
      getOffice(info).then(response => {
        const { data } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  start({ commit }, info) {
    return new Promise((resolve, reject) => {
      start({ token: parseInt(state.token) , windowId: 1}).then(response => {
        const { data } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  end({ commit }, info) {
    return new Promise((resolve, reject) => {
      end({token: state.token}).then(response => {
        const { data } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getNext({ commit }, info) {
    return new Promise((resolve, reject) => {
      getNext(info).then(response => {
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
