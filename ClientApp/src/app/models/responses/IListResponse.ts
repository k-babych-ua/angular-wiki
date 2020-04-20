import { IResponse } from './IResponse';

export interface IListResponse<TModel> extends IResponse {
    items: TModel[];
}