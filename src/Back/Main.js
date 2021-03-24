import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Content from "./Content";
// import Kategori from "./Kategori";
// import Menu from "./Menu";
// import Pelanggan from "./Pelanggan";

const Main = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/:isi`}>
        <Content></Content>
      </Route>
      {/* <Route path={`${path}/kategori`}>
        <Kategori></Kategori>
      </Route>
      <Route path={`${path}/menu`}>
        <Menu></Menu>
      </Route>
      <Route path={`${path}/pelanggan`}>
        <Pelanggan></Pelanggan>
      </Route> */}
    </Switch>
  );
};

export default Main;
