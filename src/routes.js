import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Delivery from './pages/delivery';
import Contact from './pages/contact'
import Persona from './pages/personal_area'
import Product from './pages/product'
import First_page from './pages/first_page'
import Registration from './pages/registration'
import Avtorization from './pages/avtorization';
import Catalog from './pages/catalog'

export const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} exact>
                <First_page />
            </Route>
            <Route path={'/pages/contact'} exact>
                <Contact />
            </Route>
            <Route path={'/pages/delivery'} exact>
                <Delivery />
            </Route>
            <Route path={'/pages/persona'} exact>
                <Persona />
            </Route>
            <Route path={'/pages/products'} exact>
                <Product />
            </Route>
            <Route path={'/pages/avtorization'} exact>
                <Avtorization />
            </Route>
            <Route path={'/pages/registration'} exact>
                <Registration />
            </Route>
            <Route path={'/pages/catalog'} exact>
                <Catalog />
            </Route>
        </Switch>
    )
}

