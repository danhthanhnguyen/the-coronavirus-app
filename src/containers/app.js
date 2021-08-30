import { connect } from "react-redux";
import App from "../App";
import { setDataCountries, fetchDataCountries } from "../actions/action.js";

const mapStates = (state) => {
  return {
    dataCountries: state.covid.dataCountry
  }
}

const mapActions = (dispatch) => ({
  setDataCountries: (data) => dispatch(setDataCountries(data)),
  fetchDataCountries: () => dispatch(fetchDataCountries())
});

export default connect(mapStates, mapActions)(App);