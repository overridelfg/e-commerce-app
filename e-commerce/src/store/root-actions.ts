import * as userActions from './user/user.actions';
import {actions as productActions} from './products/products.slice';

export const rootActions = {
    ...userActions,
    ...productActions
}