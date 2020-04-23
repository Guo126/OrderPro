import { login, logout, getInfo, search, create, remove } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  userInfo: {},
  // loginInfo: {'username':'admin','password':'test1'}
  loginInfo: {}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_INFO: (state, info) => {
    state.userInfo = info
  },
  SET_LOGIN_INFO: (state, info) => {
    state.loginInfo = info
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo

    return new Promise((resolve, reject) => {
      login({ username: username.trim(), pwd: password }).then(response => {
        const { data } = response
        // console.log(data)

        commit('SET_TOKEN', data.staffId)

        setToken(data.staffId)

        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {

    return new Promise((resolve, reject) => {
      getInfo({ token: state.token }).then(response => {
        let { data } = response
        commit('SET_INFO', data)

        const defaultData = {
          "roles": ["admin"],
          "introduction": "I am a super administrator",
          "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
          "name": "Super Admin"
        }

        if (!response) {
          reject('验证失败，请重新登录！')
        }

        const { roles, name, avatar, introduction } = defaultData

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('用户未维护角色！')
        }

        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)

        resolve(defaultData)

      }).catch(error => {
        reject(error)
      })
    })
  },

  search({ commit }, filterList) { //查询用户
    let { name, role, level, areaId } = filterList;
    name = name == "" || !name ? undefined : name.trim();
    role = role == "" ? undefined : role;

    return new Promise((resolve, reject) => {
      search({ name: name, role: role, level: level, areaId: 1 }).then((data) => {
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  create({ commit }, infoList) { //创建用户
    const { name, username, pwd, sex, level, area, city, office } = infoList;
    return new Promise((resolve, reject) => {
      create({ token: state.token, name: name.trim(), username: username.trim(), pwd: pwd, sex: sex, city: city, level: level, area: area, office: office }).then((data) => {
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  remove({ commit }, info) { //创建用户
    const { targetToken } = info;
    return new Promise((resolve, reject) => {
      remove({ targetToken: targetToken, token: parseInt(state.token) }).then((data) => {
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      dispatch('tagsView/delAllViews', null, { root: true })
         removeToken()
         resetRouter()
      resolve()
      // logout(state.token).then(() => {
      //   commit('SET_TOKEN', '')
      //   commit('SET_ROLES', [])
      //   removeToken()
      //   resetRouter()

      //   // reset visited views and cached views
      //   // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
      //   dispatch('tagsView/delAllViews', null, { root: true })

      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, { root: true })

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
