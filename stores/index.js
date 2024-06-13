// store/index.js
export const state = () => ({
  currentStep: 1,
  formData: {}
})

export const mutations = {
  setCurrentStep(state, step) {
    state.currentStep = step
  },
  setFormData(state, data) {
    state.formData = { ...state.formData, ...data }
  }
}

export const actions = {
  updateStep({ commit }, step) {
    commit('setCurrentStep', step)
  },
  updateFormData({ commit }, data) {
    commit('setFormData', data)
  }
}
