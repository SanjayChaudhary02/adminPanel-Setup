import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppConfig from '../config/app.config';
import SimpleBackdrop from '../components/Common/Loader/SimpleBackdrop';
import Layout from '../components/Common/Layout';

const Category = lazy(() => import('../containers/Catalog/Category/Category'));
const AddCategory = lazy(() => import('../containers/Catalog/Category/AddCategory'));

const MainRoutes = () => {
    return (
        <Layout>
            <Suspense fallback={<SimpleBackdrop loading />}>
                <Switch>
                    <Route exact path={`${AppConfig.ROUTE_PATH}/catalog/category/add`} component={AddCategory} />
                    <Route exact path={`${AppConfig.ROUTE_PATH}/catalog/category/edit/:id`} component={AddCategory} />
                    <Route component={Category} />
                </Switch>
            </Suspense>
        </Layout>
    );
};

export default MainRoutes;
