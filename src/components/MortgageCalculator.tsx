import { useState, useMemo } from 'react';

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(425000);
  const [downPayment, setDownPayment] = useState(85000);
  const [interestRate, setInterestRate] = useState(6.25);
  const [loanTerm, setLoanTerm] = useState(30);

  const downPaymentPct = useMemo(
    () => ((downPayment / homePrice) * 100).toFixed(0),
    [downPayment, homePrice]
  );

  const monthlyPayment = useMemo(() => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    if (monthlyRate === 0) return principal / numPayments;

    const payment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);

    return Math.round(payment);
  }, [homePrice, downPayment, interestRate, loanTerm]);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/8">
      {/* Home Price */}
      <div className="mb-5">
        <label className="text-white/50 text-xs font-medium block mb-1.5">Home Price</label>
        <input
          type="range"
          min={100000}
          max={2000000}
          step={5000}
          value={homePrice}
          onChange={(e) => {
            const val = Number(e.target.value);
            setHomePrice(val);
            setDownPayment(Math.round(val * 0.2));
          }}
          className="w-full accent-cyan-500 mb-1"
        />
        <div className="text-white text-lg font-bold">{formatCurrency(homePrice)}</div>
      </div>

      {/* Down Payment */}
      <div className="mb-5">
        <label className="text-white/50 text-xs font-medium block mb-1.5">Down Payment</label>
        <input
          type="range"
          min={0}
          max={homePrice * 0.5}
          step={1000}
          value={downPayment}
          onChange={(e) => setDownPayment(Number(e.target.value))}
          className="w-full accent-cyan-500 mb-1"
        />
        <div className="text-white text-lg font-bold">
          {formatCurrency(downPayment)}{' '}
          <span className="text-white/30 text-sm font-normal">({downPaymentPct}%)</span>
        </div>
      </div>

      {/* Interest Rate */}
      <div className="mb-5">
        <label className="text-white/50 text-xs font-medium block mb-1.5">Interest Rate</label>
        <input
          type="range"
          min={2}
          max={10}
          step={0.125}
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full accent-cyan-500 mb-1"
        />
        <div className="text-white text-lg font-bold">{interestRate.toFixed(3)}%</div>
      </div>

      {/* Loan Term */}
      <div className="mb-6">
        <label className="text-white/50 text-xs font-medium block mb-2">Loan Term</label>
        <div className="flex gap-2">
          {[15, 20, 30].map((term) => (
            <button
              key={term}
              onClick={() => setLoanTerm(term)}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
                loanTerm === term
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white/5 text-white/50 hover:bg-white/10'
              }`}
            >
              {term} yr
            </button>
          ))}
        </div>
      </div>

      {/* Result */}
      <div className="bg-cyan-500/8 rounded-xl p-5 text-center border border-cyan-500/15">
        <div className="text-white/50 text-xs mb-1">Your Estimated Payment</div>
        <div className="text-cyan-500 text-4xl font-extrabold">{formatCurrency(monthlyPayment)}</div>
        <div className="text-white/30 text-xs mt-1">/month (P&I)</div>
      </div>

      <a
        href="/apply"
        className="block mt-4 bg-cyan-500 hover:bg-cyan-400 text-white text-center py-3 rounded-xl text-sm font-bold transition-colors"
      >
        Get Your Real Rate →
      </a>
    </div>
  );
}
