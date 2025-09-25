const { useState, useMemo } = React;

export function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [startCurrency, setStartCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");

  const mapping = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7,
  };

  // memoize calculation based only on amount and startCurrency, NOT targetCurrency
  const baseValue = useMemo(() => {
    return amount * mapping[startCurrency];
  }, [amount, startCurrency]);

  // formatted display with targetCurrency
  const converted = (baseValue / mapping[targetCurrency]).toFixed(2) + " " + targetCurrency;

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
      />
      <select
        value={startCurrency}
        onChange={e => setStartCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
      <select
        value={targetCurrency}
        onChange={e => setTargetCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>
      <div>{converted}</div>
    </div>
  );
}
