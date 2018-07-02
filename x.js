"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const kucoinApi = new _1.KucoinApi();
kucoinApi.orders({ symbol: "KCS-BTC", direction: "SELL" }).then((data) => {
    console.log(data.SELL ? data.SELL : "");
});
