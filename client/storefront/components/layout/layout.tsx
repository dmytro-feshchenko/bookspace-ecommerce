import * as React from 'react';
import Header from './header';
import Footer from './footer';

const Layout: React.FC = (props) => {
    return (
        <div>
            <Header />
            <div className="content">
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
