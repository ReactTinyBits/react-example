import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import getInjectors from './reducerInjectors';

/**
 * Dynamically injects a reducer
 *
 * @param {Object} injectReducerParams An object containing the key of the reducer and reducer that will be injected
 * @param {string} injectReducerParams.key A key of the reducer
 * @param {function} injectReducerParams.reducer A reducer that will be injected
 *
 */
export default ({ key, reducer }) => WrappedComponent => {
    class ReducerInjector extends React.PureComponent {
        static WrappedComponent = WrappedComponent;

        static contextTypes = {
            store: PropTypes.object.isRequired,
        };

        static displayName = `withReducer(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

        componentWillMount() {
            const { injectReducer } = this.injectors;

            injectReducer(key, reducer);
        }

        injectors = getInjectors(this.context.store);

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};
