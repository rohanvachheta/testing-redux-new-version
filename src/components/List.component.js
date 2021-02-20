import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px",

    "& li": {
      backgroundColor: theme.palette.background.paper,
      marginBottom: "5px",
      borderRadius: "7px",
    },

    "& li[role=separator]": {
      backgroundColor: "transparent",
    },
  },
  inline: {
    display: "inline",
  },
}));

export default function ListItems({ listItem, setSelectedUser }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {listItem.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <ListItem
              alignItems="flex-start"
              onClick={() => setSelectedUser(item.id)}
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={item.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      {item.first_name} {item.last_name}
                    </div>
                    <div>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textSecondary"
                      >
                        {item.id}
                      </Typography>
                    </div>
                  </div>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {item.email}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        );
      })}
    </List>
  );
}
