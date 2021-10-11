
import { Route, Redirect } from 'react-router-dom'
// import { isLoggedin } from '../../utils/Authenticate'

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const isLoggedin = true

    return (
        <>
            {isLoggedin ?
                <Route
                    {...rest}
                    render={(props) => (
                        <>
                            <Component {...props} />
                        </>
                    )}
                />
                :
                <Redirect to={{ pathname: "/" }} />
            }
        </>
    );
}
