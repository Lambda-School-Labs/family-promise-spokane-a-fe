import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { DataGrid } from '@material-ui/data-grid';
import MaterialTable from 'material-table';
import { useHistory } from 'react-router-dom';
import NoteIcon from '@material-ui/icons/Note';
import PeopleIcon from '@material-ui/icons/People';
import InfoIcon from '@material-ui/icons/Info';
import { tableIcons } from '../../utils/tableIcons';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Circle from 'react-circle';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
});

const columns = [
  { title: 'name', field: 'first_name' },
  { title: 'surname', field: 'last_name' },
  { title: 'email', field: 'email' },
  { title: '', field: 'clocked_in', type: 'boolean' },
];
const rows = [
  { name: 'Snow', surname: 'Jon', age: 35 },
  { name: 'Lannister', surname: 'Cersei', age: 42 },
  { name: 'Lannister', surname: 'Jaime', age: 45 },
  { name: 'Stark', surname: 'Arya', age: 16 },
  { name: 'Targaryen', surname: 'Daenerys', age: null },
  { name: 'Melisandre', surname: null, age: 150 },
  { name: 'Clifford', surname: 'Ferrara', age: 44 },
  { name: 'Frances', surname: 'Rossini', age: 36 },
  { name: 'Roxie', surname: 'Harvey', age: 65 },
];

const Analytics = () => {
  const [staffMembers, setStaffMembers] = useState([]);
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className="dashboard-container">
      <div className="cards-container">
        <div className="cards">
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textPrimary"
                gutterBottom
              >
                Clocked in
              </Typography>
              <Typography>22</Typography>
            </CardContent>
          </Card>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textPrimary"
                gutterBottom
              >
                Staying the night
              </Typography>
              <Typography>Total: 37</Typography>
              <Typography>Adults: 17</Typography>
              <Typography>Children: 24</Typography>
            </CardContent>
          </Card>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textPrimary"
                gutterBottom
              >
                Total # of guests
              </Typography>
              <Typography>90</Typography>
            </CardContent>
          </Card>
        </div>
        <div className="second">
          <div style={{ height: 400, width: '100%' }}>
            <MaterialTable
              icons={tableIcons}
              title="Staff"
              columns={columns}
              data={staffMembers}
              actions={[]}
              editable={
                {
                  // onRowRedirect: (newData) =>
                  //     new Promise((resolve) => {
                  //         setTimeout(() => {
                  //             resolve();
                  //             setState((prevState) => {
                  //                 const data = [...prevState.data];
                  //                 data.push(newData);
                  //                 return { ...prevState, data };
                  //             });
                  //         }, 600);
                  //     }),
                }
              }
            />
          </div>
          <div className="carrying-capacity">
            <h2>Carrying Capacity</h2>
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="4s" //String: Length of animation
              // responsive={true} // Boolean: Make SVG adapt to parent size
              size={380} // Number: Defines the size of the circle.
              lineWidth={10} // Number: Defines the thickness of the circle's stroke.
              progress={43} // Number: Update to change the progress and percentage.
              progressColor="cornflowerblue" // String: Color of "progress" portion of circle.
              bgColor="whitesmoke" // String: Color of "empty" portion of circle.
              textColor="hotpink" // String: Color of percentage text color.
              textStyle={{
                font: 'bold 5rem Helvetica, Arial, sans-serif', // CSSProperties: Custom styling for percentage.
              }}
              percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
