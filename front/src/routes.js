import React from "react";
import { Route, Switch } from "react-router-dom";
import Delivery from "./pages/delivery";
import Contact from "./pages/contact";
import Persona from "./pages/personal_area";
import Product from "./pages/product";
import FirstPage from "./pages/first_page";
import Registration from "./pages/registration";
import Avtorization from "./pages/avtorization";
import Catalog from "./pages/catalog";
import Service from "./pages/service";
import Feedback from "./pages/feedback";
import Basket from "./pages/basket";
import Like from "./pages/like";
import Recording from "./pages/recording_service"

export const Routes = () => {
  return (
    <Switch>
      <Route path={"/"} exact>
        <FirstPage />
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
      <Route path={"/product"}>
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
      <Route path={"/service"}>
        <Service />
      </Route>
      <Route path={"/feedback"}>
        <Feedback />
      </Route>
      <Route path={"/basket"}>
        <Basket />
      </Route>
      <Route path={"/like"}>
        <Like />
      </Route>
      <Route path={"/recording"}>
        <Recording/>
      </Route>
    </Switch>
  );
};
