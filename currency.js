const URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

const getCurrencies = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

const currentCurrencyRate = async (currency) => {
  const data = await getCurrencies();

  return data.find((item) => item.cc === currency).rate;
};

module.exports = currentCurrencyRate;
