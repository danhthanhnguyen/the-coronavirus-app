import { SET_DATA, SET_DATA_COUNTRY } from '../instances/instances.js';
import axios from '../api/axios.js';
import requests from "../api/request.js";

export const setData = (data) => ({
  type: SET_DATA,
  payload: data
})

export const setDataCountries = (data) => ({
  type: SET_DATA_COUNTRY,
  payload: data
})

export const fetchData = () => async (dispatch) => {
  const result = await axios.get(requests.summary);
  dispatch(setData(result.data));
}

export const fetchDataCountry = (endPoint) => async (dispatch) => {
  const result = await axios.get(requests.byCountry(endPoint));
  dispatch(setData(result.data));
}

export const fetchDataCountries = () => async (dispatch) => {
  const result = await axios.get(requests.countries);
  dispatch(setDataCountries(result.data));
}