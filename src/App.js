import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import Pagination from "@material-ui/lab/Pagination";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ProfileCard from "./components/Card.component";
import ListItems from "./components/List.component";
import { callUserDetails, sortuserAction as sortuser } from "./actions";

const App = ({
  callUserDetailsAction,
  usersList,
  pageDetails,
  sortuserAction,
}) => {
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);

  const selectRef = useRef(null);

  useEffect(() => {
    callUserDetailsAction(page);
    selectRef.current.value = "None";
  }, [page, callUserDetailsAction]);

  const handleDropdownChange = (e) => {
    sortuserAction(e.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className="app">
          {!!selectedUser ? (
            <ProfileCard
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          ) : (
            <>
              <select ref={selectRef} onChange={handleDropdownChange}>
                <option aria-label="None" value="None">
                  None
                </option>
                <option value={"A-Z"}>A-Z</option>
                <option value={"Z-A"}>Z-A</option>
              </select>
              <ListItems
                listItem={usersList || []}
                setSelectedUser={setSelectedUser}
              />
              <Pagination
                page={page}
                count={pageDetails.total}
                onChange={(e, page) => {
                  setPage(page);
                }}
              />
            </>
          )}
        </div>
      </Container>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    callUserDetailsAction: (page) => dispatch(callUserDetails(page)),
    sortuserAction: (page) => dispatch(sortuser(page)),
  };
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
