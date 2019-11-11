import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Navigate} from '@ngxs/router-plugin';

import {App} from '../models/app.models';
import {AppDefaultsSetFailed, AppDefaultsSetSuccess, setAppDefaults} from './app.actions';

export const getAppInitialState = (): App => ({
    appdefaults: {
        entityid: '',
        countryid: ''
    },
    cart: []
});

@State<App>({
    name: 'app',
    defaults: getAppInitialState()
})
export class AppState {
    constructor() {
    }

    @Selector()
    static getAppDefaults(state: App) {
        return state.appdefaults;
    }

    @Action(setAppDefaults)
    set(ctx: StateContext<App>, {payload}: setAppDefaults) {

        /* const state = getState();       
        const current = {
            appdefaults: {...state.appdefaults, ...payload}
        };
        setState({
            ...state,
            ...current
        });
        */
        console.log('app defaults set sucstarted cessful');

        ctx.patchState({
            appdefaults: payload
        });

        ctx.dispatch(new AppDefaultsSetSuccess());
    }

    @Action(AppDefaultsSetSuccess)
    setSucess(ctx: StateContext<App>) {
        console.log('app defaults set successful');
        ctx.dispatch(new Navigate(['/home']));
    }

    @Action(AppDefaultsSetFailed)
    setFailed() {
        console.log('app defaults set failed');
    }

}
