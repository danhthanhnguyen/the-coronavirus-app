import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { useEffect } from "react";
import Session from "./Session";
import Map from './Map';

export const CovidContext = React.createContext();

function WorldStatistic({ dataCovid, fetchData }) {
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return(
    <CovidContext.Provider value={{dataCovid: dataCovid}}>
      <div className="covid-19-statistic">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Session isNewCases={true} cases={dataCovid.Global ? `+${dataCovid.Global.NewConfirmed.toLocaleString()}` : <Skeleton/>} session={"New cases"}/>
          </Grid>
          <Grid item xs={12} md={3}>
            <Session isNewDeaths={true} cases={dataCovid.Global ? `+${dataCovid.Global.NewDeaths.toLocaleString()}` : <Skeleton/>} session={"Deaths"}/>
          </Grid>
          <Grid item xs={12} md={3}>
            <Session cases={dataCovid.Global ? dataCovid.Global.TotalConfirmed.toLocaleString() : <Skeleton/>} session={"Total cases"}/>
          </Grid>
          <Grid item xs={12} md={3}>
            <Session cases={dataCovid.Global ? dataCovid.Global.TotalDeaths.toLocaleString() : <Skeleton/>} session={"Deaths"}/>
          </Grid>
        </Grid>
      </div>
      <Map/>
    </CovidContext.Provider>
  );
}

export default WorldStatistic;