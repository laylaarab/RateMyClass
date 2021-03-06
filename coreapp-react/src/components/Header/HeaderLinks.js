/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import viewSelector from "../../views/Aesthetic/ViewSelector";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          {viewSelector.someProp === 'guest'?
              <CustomDropdown
                  noLiPadding
                  buttonText="Menu Options"
                  buttonProps={{
                      className: classes.navLink,
                      color: "transparent"
                  }}
                  buttonIcon={Apps}
                  dropdownList={[
                      <Link to="/company-page" className={classes.dropdownLink}>
                          About Us
                      </Link>,
                      <Link to="/landing-page" className={classes.dropdownLink}>
                          Course Catalogue
                      </Link>,
                      <Link to="/" className={classes.dropdownLink}>
                          Leave Site
                      </Link>
                  ]}
              /> :
              <CustomDropdown
                  noLiPadding
                  buttonText="Menu Options"
                  buttonProps={{
                      className: classes.navLink,
                      color: "transparent"
                  }}
                  buttonIcon={Apps}
                  dropdownList={[
                      <Link to="/company-page" className={classes.dropdownLink}>
                          About Us
                      </Link>,
                      <Link to="/landing-page" className={classes.dropdownLink}>
                          Course Catalogue
                      </Link>,
                      <Link to="/settings-page" className={classes.dropdownLink}>
                          Theme Settings
                      </Link>,
                      <Link to="/profile-page" className={classes.dropdownLink}>
                          My Account
                      </Link>,
                      <Link to="/" className={classes.dropdownLink}>
                          Logout
                      </Link>
                  ]}
              />
          }
      </ListItem>


        {/*
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download
        </Button>
      </ListItem>

      */}
        {/* <ListItem className={classes.listItem}> */}
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}

        {/*
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      */}
    </List>
  );
}
