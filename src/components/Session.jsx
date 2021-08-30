import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import '../styles/session.css';

function Session({ cases, session, isNewCases, isNewDeaths }) {
  return (
    <div className="covid-19-statistic-session">
      <Card className={`covid-19-statistic-session__card${isNewCases ? " covid-19-statistic-session--isNewCases" : ""}${isNewDeaths ? " covid-19-statistic-session--isNewDeaths" : ""}`}>
        <div className="covid-19-statistic-session__card--detail">
          <CardContent className="covid-19-statistic-session__case">
            <Typography className="covid-19-statistic-session__case--title" component="h5" variant="h5">
              { cases }
            </Typography>
            <Typography className="covid-19-statistic-session__case--session" variant="subtitle1" color="textSecondary">
              { session }
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

Session.defaultProps = {
  isNewCases: false,
  isNewDeaths: false
}

export default Session;