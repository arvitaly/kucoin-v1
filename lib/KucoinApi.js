"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class KucoinApi {
    orders(params) {
        return this.request("open/orders", params);
    }
    ordersBuy(params) {
        return this.request("open/orders-buy", params);
    }
    ordersSell(params) {
        return this.request("open/orders-sell", params);
    }
    ordersDeal(params) {
        return this.request("open/deal-orders", params);
    }
    markets() {
        return this.request("open/markets");
    }
    marketSymbolsTick(market) {
        return this.request("market/open/symbols", { market });
    }
    tick(symbol) {
        return this.request("open/tick", {
            symbol,
        });
    }
    ticks() {
        return this.request("open/tick");
    }
    request(path, params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const httpParams = [];
            Object.keys(params).map((paramName) => {
                httpParams.push(paramName + "=" + params[paramName]);
            });
            const response = yield fetch("https://api.kucoin.com/v1/" + path + (httpParams.length > 0 ? "?" + httpParams.join("&") : ""));
            if (response.status !== 200) {
                throw new Error("Invalid request, status " + response.status);
            }
            const result = yield response.json();
            if (!result.success) {
                throw new Error("Failure result, code: " + result.code + ", msg: " + result.msg);
            }
            return result.data;
        });
    }
}
exports.KucoinApi = KucoinApi;
exports.default = KucoinApi;
