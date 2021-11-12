import { EntityState } from "@ngrx/entity";
import { Basket, BasketEntity } from "../../core/model/basket";



export interface BasketState extends EntityState<BasketEntity> {
  baskets: Basket[];
  loading: boolean;
  error: boolean;
}
