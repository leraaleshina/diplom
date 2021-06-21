import axios from 'axios'

const fetchServices = () => dispatch => {
  axios.get('http://localhost:3000/db.json')
    .then(({ data }) => dispatch(setServices(data.services)))
}

const setServices = items => ({
  type: 'SET_SERVICES',
  payload: items
})

export { fetchServices }


