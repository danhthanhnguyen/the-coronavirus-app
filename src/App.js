import './App.css';
import { Container } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import WorldStatistic from './containers/global';
import CountryStatistic from './containers/country';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App({ dataCountries, fetchDataCountries }) {
  useEffect(() => {
    fetchDataCountries();
  }, [fetchDataCountries]);

  let selector = [];
  if(dataCountries) {
    selector = dataCountries.map((data) => {
      return {
        id: data.ID,
        country: data.Country,
        slug: data.Slug
      }
    });
  }
  // sorting countries
  selector.sort((a, b) => {
    if(a.country > b.country) {
      return 1;
    }
    return -1;
  });

  return (
    <Router>
      <Container maxWidth="lg">
        <div className="covid-19-tracker">
          <div className="covid-19-tracker__selector">
            <TextField
              id="outlined-select-currency"
              select
              label="Select your's country"
              variant="outlined"
            >
              {selector.map((option) => (
                <Link to={`/tracking/${option.slug}`} className="covid-19-tracker__selector--link" key={option.id}>
                  <MenuItem value={option.slug}>
                    {option.country}
                  </MenuItem>
                </Link>
              ))}
            </TextField>
            <h3 className="covid-19-tracker__title">{ "The Coronavirus App" }</h3>
          </div>
          <Switch>
            <Route exact path="/">
              <WorldStatistic/>
            </Route>
            <Route path="/tracking/:country" children={<CountryStatistic/>}/>
          </Switch>
      </div>
    </Container>
    </Router>
  );
}

export default App;
