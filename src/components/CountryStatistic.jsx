import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useParams } from "react-router";
import React, { useEffect } from 'react';
import Session from "./Session";
import Chart from './Chart';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ReactCountryFlag from 'react-country-flag';

import { Button } from "@material-ui/core";
import {
  Link
} from "react-router-dom";

export const CovidContext = React.createContext();

function CountryStatistic({ dataCovid, fetchDataCountry}) {
  const { country } = useParams();
  useEffect(() => {
    fetchDataCountry(country);
  }, [country]);

  let dataStatistic = {};
  if(dataCovid) {
    dataStatistic = dataCovid[dataCovid.length - 1];
  }

  return(
    <CovidContext.Provider value={{ dataCovid: dataCovid }}>
      <div className="covid-19-nav">
        <Link className="covid-19-nav--link" to="/">
            <Button
              variant="contained"
              color="secondary"
              className="covid-19-nav--button"
              startIcon={<ArrowBackIosIcon />}
            >
              World
            </Button>
        </Link>
        <Link className="covid-19-nav--link" to={`/tracking/${country}`}>
            <Button
              variant="contained"
              color="secondary"
              disabled
              className="covid-19-nav--button"
              startIcon={
                dataCovid[0] && <ReactCountryFlag
                  countryCode={dataCovid[0].CountryCode}
                  svg
                />
              }
            >
              {dataCovid[0] ? dataCovid[0].Country : <Skeleton/>}
            </Button>
        </Link>
      </div>
      <div className="covid-19-statistic">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Session cases={dataStatistic ? dataStatistic.Confirmed.toLocaleString() : <Skeleton/>} session={"Total cases"}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <Session cases={dataStatistic ? dataStatistic.Deaths.toLocaleString() : <Skeleton/>} session={"Deaths"}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <Session cases={dataStatistic ? dataStatistic.Active.toLocaleString() : <Skeleton/>} session={"Active cases"}/>
          </Grid>
        </Grid>
      </div>
      <Chart/>
    </CovidContext.Provider>
  );
}

export default CountryStatistic;