const { randomUUID } = require("node:crypto");
const getCurrencyRate = require("./currency");

const measurementId = `G-C9ZHPYH26L`;
const apiSecret = `hm-xb8ZqSPGGd45N6_lu4w`;
const urlToPost = `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`;

async function post() {
  const usdRate = await getCurrencyRate("USD");
  console.log(usdRate);

  const res = await fetch(urlToPost, {
    method: "POST",
    body: JSON.stringify({
      client_id: randomUUID(),
      events: [
        {
          name: "usd_rate",
          params: {
            currency: "USD",
            value: usdRate,
            date: new Date().toISOString(),
          },
        },
      ],
    }),
  });

  console.log("Response status: ", res.status);
}

post();
