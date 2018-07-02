export interface IMarketOrdersParams {
    symbol: string;
    group?: number;
    limit?: number;
}
export type IMarketOrder = [number, number, number];
export interface IMarketOrders {
    SELL?: IMarketOrder[];
    BUY?: IMarketOrder[];
    timestamp: number;
}

export interface ITickValue {
    symbol: string;
    change: number;
    coinType: string;
    trading: boolean;
    lastDealPrice: number;
    buy: number;
    sell: number;
    coinTypePair: string;
    sort: 0 | 1;
    feeRate: number;
    volValue: number;
    high: number;
    datetime: number;
    vol: number;
    low: number;
    changeRate: number;
}
export interface IRequestSuccessResult<T> {
    success: boolean;
    code: "OK";
    msg: string;
    data: T;
}
export interface IRequestFailureResult {
    code: string;
    msg: string;
    success: false;
    timestamp: number;
}
export type IRequestResult<T> = IRequestSuccessResult<T> | IRequestFailureResult;
