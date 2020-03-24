import React from 'react';
import classes from './Layout.css';
import List from '../../components/List/List';
import Detail from '../../containers/Detail/DetailBuilder';
import GenderGraph from '../../components/GenderGraph/GenderGraph';
import Header from '../../containers/Header/HeaderBuilder';

const Layout = () => {
    return(
        <>
        <Header />
        <div className={classes.Layout}>
                <List />
            <div>
                <Detail />
                <GenderGraph />              
            </div>
        </div>
        </>
    );
};
export default Layout;