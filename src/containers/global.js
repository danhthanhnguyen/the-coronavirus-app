import { connect } from "react-redux";
import WorldStatistic from "../components/WorldStatistic";
import { setData, fetchData } from "../actions/action.js";

const mapStates = (state) => {
  return {
    dataCovid: state.covid.data
  }
}

const mapActions = (dispatch) => ({
  setData: (data) => dispatch(setData(data)),
  fetchData: () => dispatch(fetchData())
});

export default connect(mapStates, mapActions)(WorldStatistic);