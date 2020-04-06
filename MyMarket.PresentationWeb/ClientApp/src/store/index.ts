import * as HomePageStore from './homePage';
import * as Navigation from './navigation';
import * as Session from './session';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

export interface ApplicationState {
    homePage: HomePageStore.State;
    navigation: Navigation.State,
    session: Session.State,
}

export const reducers = {
    homePage: HomePageStore.reducer,
    navigation: Navigation.reducer,
    session: Session.reducer,
};

// Type helpers
export type AppThunkAction<R> = ThunkAction<R, ApplicationState, {}, AnyAction>;
export type AppThunkDispatch = ThunkDispatch<ApplicationState, {}, AnyAction>;