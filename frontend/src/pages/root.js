import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation.js';

function RootLayout() { 
    // const navigation = useNavigation();
    return (
        <>
            <MainNavigation />
            <main>
                {/* {navigation.state === 'loading' && <p>Loading......</p>} */}
                <Outlet />
            </main>
        </>
        )
}
export default RootLayout;

/**
 * useNavigation:-
 *  get information about the current navigation state. , access to the navigation state,
 */