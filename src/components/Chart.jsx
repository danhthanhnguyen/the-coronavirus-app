import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import '../styles/chart.css';
import moment from "moment";
import { useContext } from "react";
import { CovidContext } from "./CountryStatistic";


function Chart() {
  const data = useContext(CovidContext);
  let dataDate = [];
  if(data.dataCovid[0]) {
    dataDate = data.dataCovid.map((data) => moment(data.Date).format('MMM Do YY'));
  }
  let dataConfirm = [];
  if(data.dataCovid[0]) {
    dataConfirm = data.dataCovid.map((data) => data.Confirmed);
  }
  let dataDeath = [];
  if(data.dataCovid[0]) {
    dataDeath = data.dataCovid.map((data) => data.Deaths);
  }
  let dataActive = [];
  if(data.dataCovid[0]) {
    dataActive = data.dataCovid.map((data) => data.Active);
  }
  const options = {
    chart: {
      backgroundColor: '#2c2c2f',
      height: 500
    },
    rangeSelector: {
      selected: 1
    },
    xAxis: {
      lineColor: '#FF0000',
      lineWidth: 1,
      categories: dataDate,
      crosshair: true,
    },
    yAxis: {
      lineColor: '#FF0000',
      lineWidth: 1,
      gridLineDashStyle: "LongDashDot",
      label: {
        align: 'right'
      }
    },
    title: null,
    series: [{
      name: 'Total cases',
      data: dataConfirm,
      type: 'area',
      threshold: null,
      color: 'rgba(134, 67, 230, 1)',
      tooltip: {
        valueDecimals: 2
      }
    },
    {
      name: 'Deaths',
      data: dataDeath,
      type: 'area',
      threshold: null,
      color: 'rgba(255, 65, 108, 1)',
      tooltip: {
        valueDecimals: 2
      }
    },
    {
      name: 'Active cases',
      data: dataActive,
      type: 'area',
      threshold: null,
      tooltip: {
        valueDecimals: 2
      }
    }]
  }
  return(
    <div className="covid-19-chart">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
}

export default Chart;