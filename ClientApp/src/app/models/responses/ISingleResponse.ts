import { IResponse } from './IResponse';

export interface ISingleResponse<TModel> extends IResponse {
    item: TModel;
}