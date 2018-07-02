import { KucoinApi } from ".";

const kucoinApi = new KucoinApi();

kucoinApi.orders({ symbol: "KCS-BTC", direction: "SELL" }).then((data) => {
    console.log(data.SELL ? data.SELL : "");
});
