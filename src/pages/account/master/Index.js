import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavbarGeneral } from '../../../components/navbar/NavbarGeneral';
import { AccountNavbar } from '../../../components/navbar/AccountNavbar';
import { Footer } from '../../../components/footer/Index';

import MyMedia from '../myMedia/Index';
import Upload from '../upload/Index';
import Settings from '../settings/Index';
import FourOFour from '../../fourOfour/Index';

const Index = () => {
    return (
        <div>
            <NavbarGeneral searchable />
            <AccountNavbar />
            <div className="py-2 py-lg-3">
                <Switch>
                    <Route exact path="/account" component={MyMedia} />
                    <Route exact path="/account/upload" component={Upload} />
                    <Route exact path="/account/settings" component={Settings} />
                    <Route path="*" component={FourOFour} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
};

export default Index;