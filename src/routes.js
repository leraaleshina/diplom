import React from "react";
import { Route, Switch } from "react-router-dom";
import Delivery from "./pages/delivery";
import Contact from "./pages/contact";
import Persona from "./pages/personal_area";
import Product from "./pages/product";
import First_page from "./pages/first_page";
import Registration from "./pages/registration";
import Avtorization from "./pages/avtorization";
import Catalog from "./pages/catalog";
import Slider from "./components/slider";

export const Routes = () => {
  return (
    <Switch>
      <Route path={"/"} exact>
        <First_page />
      </Route>
      <Route path={"/contact"}>
        <Contact />
      </Route>
      <Route path={"/delivery"}>
        <Delivery />
      </Route>
      <Route path={"/persona"}>
        <Persona />
      </Route>
      <Route path={"/products"}>
        <Product />
      </Route>
      <Route path={"/avtorization"}>
        <Avtorization />
      </Route>
      <Route path={"/registration"}>
        <Registration />
      </Route>
      <Route path={"/catalog"}>
        <Catalog />
      </Route>
      <Route path={"/s"}>
        <Slider />
      </Route>
    </Switch>
  );
};
