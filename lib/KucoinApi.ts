import { IRequestResult, ITickValue, IMarketOrders, IMarketOrdersParams, IMarketOrder } from "./typings";

export class KucoinApi {
    public orders(
        params: IMarketOrdersParams & {
            direction?: "BUY" | "SELL";
        },
    ): Promise<IMarketOrders> {
        return this.request("open/orders", params);
    }
    public ordersBuy(params: IMarketOrdersParams): Promise<IMarketOrder[]> {
        return this.request("open/orders-buy", params);
    }
    public ordersSell(params: IMarketOrdersParams): Promise<IMarketOrder[]> {
        return this.request("open/orders-sell", params);
    }
    public ordersDeal(params: { symbol: string; limit?: number; since?: number }): Promise<IMarketOrder[]> {
        return this.request("open/deal-orders", params);
    }
    public markets(): Promise<string[]> {
        return this.request("open/markets");
    }
    public marketSymbolsTick(market?: string): Promise<ITickValue[]> {
        return this.request("market/open/symbols", { market });
    }
    public tick(symbol: string): Promise<ITickValue> {
        return this.request("open/tick", {
            symbol,
        });
    }
    public ticks(): Promise<ITickValue[]> {
        return this.request("open/tick");
    }
    public async request(path: string, params: any = {}): Promise<any> {
        const httpParams: string[] = [];
        Object.keys(params).map((paramName) => {
            httpParams.push(paramName + "=" + params[paramName]);
        });
        const response = await fetch(
            "https://api.kucoin.com/v1/" + path + (httpParams.length > 0 ? "?" + httpParams.join("&") : ""),
        );
        if (response.status !== 200) {
            throw new Error("Invalid request, status " + response.status);
        }
        const result: IRequestResult<any> = await response.json();
        if (!result.success) {
            throw new Error("Failure result, code: " + result.code + ", msg: " + result.msg);
        }
        return result.data;
    }
}
export default KucoinApi;
