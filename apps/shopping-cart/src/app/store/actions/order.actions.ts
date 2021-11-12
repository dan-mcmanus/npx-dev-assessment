import { createAction, props } from '@ngrx/store';

import { Order } from '../../core/model/order';
import { ActionError } from '../../shared/action-error.type';

export const GET_ORDER = '[Order] GET_ORDER';
export const GET_ORDER_SUCCESS = '[Order] GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = '[Order] GET_ORDER_ERROR';

export const GET_ORDERS = '[Order] GET_ORDERS';
export const GET_ORDERS_SUCCESS = '[Order] GET_ORDERS_SUCCESS';
export const GET_ORDERS_ERROR = '[Order] GET_ORDERS_ERROR';

export type GetOrdersProps = { id: number };
export const GetOrders = createAction(
  GET_ORDERS,
  props<GetOrdersProps>()
);

export type GetOrdersSuccessProps = { orders: Order[] };
export const GetOrdersSuccess = createAction(
  GET_ORDERS_SUCCESS,
  props<GetOrdersSuccessProps>()
);

export const GetOrdersError = createAction(
  GET_ORDERS_ERROR,
  props<ActionError>()
);

export type GetOrderProps = { payload: string };
export const GetOrder = createAction(
  GET_ORDER,
  props<GetOrderProps>()
);

export const GetOrderSuccess = createAction(
  GET_ORDER_SUCCESS
);

export const GetOrderError = createAction(
  GET_ORDER_ERROR
);

