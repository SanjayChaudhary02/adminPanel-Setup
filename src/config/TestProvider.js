import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';
import store from '../store/store';
import theme from '../styles/theme';

const TestProvider = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            {children}
        </Provider>
    </ThemeProvider>
);
TestProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
};

export default TestProvider;
