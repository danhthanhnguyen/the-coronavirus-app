import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapData from "@highcharts/map-collection/custom/world.geo.json";
import HighchartsMap from "highcharts/modules/map";
import '../styles/map.css';
import { useContext } from "react";
import { CovidContext } from "./WorldStatistic";

HighchartsMap(Highcharts);

function Map() {
  const data = useContext(CovidContext);
  let dataCountry = [];
  if(data.dataCovid.Countries) {
    dataCountry = data.dataCovid.Countries.map((data) => {
      return {
        key: data.CountryCode,
        value: data.TotalConfirmed
      }
    });
  }
  const options = {
    chart: {
      backgroundColor: '#2c2c2f',
      height: 500
    },
    title: null,
    mapNavigation: {
      enabled: true
    },
    colorAxis: {
      min: 1,
      max: 100000000,
      type: 'logarithmic'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'bottom',
    },
    series: [{
      joinBy: ['iso-a2', 'key'],
      mapData: mapData,
      data: dataCountry,
      animation: true,
      name: 'Total Cases',
      states: {
        hover: {
          color: '#a4edba'
        }
      },
      tooltip: {
        valueSuffix: ' cases'
      }
    }]
  }
  return(
    <div className="covid-19-map">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType = { 'mapChart' }
      />
    </div>
  );
}

export default Map;