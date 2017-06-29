import React from "react";
import ElevatedView from "react-native-elevated-view";

const NavDrawer = ({ style }) => <ElevatedView elevation={16} style={style} />;

const SnackBar = ({ style }) => <ElevatedView elevation={6} style={style} />;

const FloatingActionButton = ({ style }) =>
  <ElevatedView elevation={5} style={style} />;

export { NavDrawer, SnackBar, FloatingActionButton };
