import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px",
  },
  media: {
    height: 140,
  },
  rootLoader: {
    display: "flex",
    width: "100%",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function ProfileCard({ selectedUser, setSelectedUser }) {
  const classes = useStyles();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const callingUserAPI = async () => {
      const getUserDetails = await axios.get(
        `https://reqres.in/api/users/${selectedUser}`
      );

      setUserDetails(getUserDetails.data);
    };
    callingUserAPI();
  }, [selectedUser]);

  if (!userDetails.data)
    return (
      <div className={classes.rootLoader}>
        <CircularProgress />{" "}
      </div>
    );
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={userDetails.data.avatar}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {userDetails.data.first_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {userDetails.support.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" autoCapitalize={false}>
          {userDetails.support.url}
        </Button>

        <Button size="small" color="primary" onClick={() => setSelectedUser(0)}>
          Close
        </Button>
      </CardActions>
    </Card>
  );
}
