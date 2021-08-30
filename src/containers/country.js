import { connect } from "react-redux";
import CountryStatistic from "../components/CountryStatistic";
import { setData, fetchDataCountry } from "../actions/action.js";

const mapStates = (state) => {
  return {
    dataCovid: state.covid.data
  }
}

const mapActions = (dispatch) => ({
  setData: (data) => dispatch(setData(data)),
  fetchDataCountry: (data) => dispatch(fetchDataCountry(data))
});

export default connect(mapStates, mapActions)(CountryStatistic);