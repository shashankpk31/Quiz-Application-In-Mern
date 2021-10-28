import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})

export const insertQuiz = payload => api.post(`/quiz`, payload)
export const getAllQuizes = () => api.get(`/quizs`)
export const updateQuizById = (id, payload) => api.put(`/quiz/${id}`, payload)
export const deleteQuizById = id => api.delete(`/quiz/${id}`)
export const getQuizById = id => api.get(`/quiz/${id}`)

const apis = {
    insertQuiz,
    getAllQuizes,
    updateQuizById,
    deleteQuizById,
    getQuizById,
}

export default apis
