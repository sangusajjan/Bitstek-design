import { useState } from 'react'
import Navbar from '../Navbar'
import './Calculator.css'
import { calculateBlackScholes } from './blackScholes'
import Footer from '../Footer';

const initialValues = {
  optionType: 'call',
  spot: '100',
  strike: '105',
  volatility: '20',
  rate: '5',
  dividend: '1',
  time: '1',
  useDates: false,
  currentDate: new Date().toISOString().slice(0, 10),
  expiryDate: '',
}

function Calculator() {
  const [values, setValues] = useState(initialValues)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setValues((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  function handleCalculate(event) {
    event.preventDefault()
    setError('')
    setResult(null)

    const spot = Number(values.spot)
    const strike = Number(values.strike)
    const volatility = Number(values.volatility)
    const rate = Number(values.rate)
    const dividend = Number(values.dividend)
    let time = Number(values.time)

if (values.useDates) {
  if (!values.currentDate || !values.expiryDate) {
    setError('Please select both dates.')
    return
  }

  const start = new Date(`${values.currentDate}T00:00:00`)
  const end = new Date(`${values.expiryDate}T00:00:00`)

  const days = (end - start) / (1000 * 60 * 60 * 24)

  if (days <= 0) {
    setError('Expiry date must be after the current date.')
    return
  }

  time = days / 365
}

    if (
      values.spot.trim() === '' ||
      values.strike.trim() === '' ||
      values.volatility.trim() === '' ||
      values.rate.trim() === '' ||
      values.dividend.trim() === '' ||
      values.time.trim() === ''
    ) {
      setError('Please fill in all fields.')
      return
    }

    if (
      !Number.isFinite(spot) ||
      !Number.isFinite(strike) ||
      !Number.isFinite(volatility) ||
      !Number.isFinite(rate) ||
      !Number.isFinite(dividend) ||
      !Number.isFinite(time) ||
      spot <= 0 ||
      strike <= 0 ||
      volatility <= 0 ||
      time <= 0
    ) {
      setError(
        'Spot, strike, volatility, and time must be positive numbers. Check all other inputs too.'
      )
      return
    }

    try {
      const calculation = calculateBlackScholes({
        optionType: values.optionType,
        spot,
        strike,
        volatility: volatility / 100,
        rate: rate / 100,
        dividend: dividend / 100,
        time,
      })

      setResult(calculation)
    } catch (err) {
      setError(err.message || 'Unable to calculate the option price.')
    }
  }

  function handleReset() {
    setValues(initialValues)
    setResult(null)
    setError('')
  }

  function formatNumber(value) {
    return Number.isFinite(value) ? value.toFixed(4) : '—'
  }

  return (
     <>
    <Navbar />
    <main className="calculator-page">
      <header className="calculator-header">
        <h1>Black–Scholes Option Calculator</h1>
        <p>
          Calculate European call and put option prices and measure
          their sensitivity to market changes.
        </p>
      </header>

      <section className="calculator-card">
        <h2>Option Parameters</h2>

        <form className="calculator-form" onSubmit={handleCalculate}>
          <div className="calculator-field">
            <label htmlFor="optionType">Option Type</label>
            <select
              id="optionType"
              name="optionType"
              value={values.optionType}
              onChange={handleChange}
            >
              <option value="call">Call</option>
              <option value="put">Put</option>
            </select>
          </div>

          <div className="calculator-field">
            <label htmlFor="spot">Spot Price ($)</label>
            <input
              id="spot"
              name="spot"
              type="number"
              min="0.01"
              step="any"
              value={values.spot}
              onChange={handleChange}
            />
          </div>

          <div className="calculator-field">
            <label htmlFor="strike">Strike Price ($)</label>
            <input
              id="strike"
              name="strike"
              type="number"
              min="0.01"
              step="any"
              value={values.strike}
              onChange={handleChange}
            />
          </div>

          <div className="calculator-field">
            <label htmlFor="volatility">Volatility (% annually)</label>
            <input
              id="volatility"
              name="volatility"
              type="number"
              min="0.01"
              step="any"
              value={values.volatility}
              onChange={handleChange}
            />
          </div>

          <div className="calculator-field">
            <label htmlFor="rate">Risk-Free Interest Rate (%)</label>
            <input
              id="rate"
              name="rate"
              type="number"
              step="any"
              value={values.rate}
              onChange={handleChange}
            />
          </div>

          <div className="calculator-field">
            <label htmlFor="dividend">Dividend Yield (%)</label>
            <input
              id="dividend"
              name="dividend"
              type="number"
              min="0"
              step="any"
              value={values.dividend}
              onChange={handleChange}
            />
          </div>

          <div className="calculator-field">
            <label htmlFor="time">Time to Expiry (years)</label>
            <input
              id="time"
              name="time"
              type="number"
              min="0.0001"
              step="any"
              value={values.time}
              onChange={handleChange}
            />
          </div>

          <div className="calculator-field date-toggle">
  <label>
    <input
      type="checkbox"
      checked={values.useDates}
      onChange={(event) => {
        setValues((previous) => ({
          ...previous,
          useDates: event.target.checked,
        }))
      }}
    />
    Use dates for expiry
  </label>
</div>

{values.useDates && (
  <>
    <div className="calculator-field">
      <label htmlFor="currentDate">Current Date</label>
      <input
        id="currentDate"
        type="date"
        value={values.currentDate}
        onChange={handleChange}
        name="currentDate"
        required
      />
    </div>

    <div className="calculator-field">
      <label htmlFor="expiryDate">Expiry Date</label>
      <input
        id="expiryDate"
        type="date"
        value={values.expiryDate}
        onChange={handleChange}
        name="expiryDate"
        min={values.currentDate}
        required
      />
    </div>
  </>
)}

          <div className="calculator-actions">
            <button type="submit" className="calculate-button">
              Calculate
            </button>

            <button
              type="button"
              className="reset-button"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>

        {error && (
          <p role="alert" style={{ color: '#ff8585', marginTop: '20px' }}>
            {error}
          </p>
        )}

        {result && (
          <section className="results-section" aria-live="polite">
            <h2>Calculation Results</h2>

            <div className="results-grid">
              <div className="result-item">
                <span>Option Price</span>
                <strong>${formatNumber(result.price)}</strong>
              </div>

              <div className="result-item">
                <span>Delta</span>
                <strong>{formatNumber(result.delta)}</strong>
              </div>

              <div className="result-item">
                <span>Gamma</span>
                <strong>{formatNumber(result.gamma)}</strong>
              </div>

              <div className="result-item">
                <span>Vega (per 1% volatility)</span>
                <strong>{formatNumber(result.vega)}</strong>
              </div>

              <div className="result-item">
                <span>Theta (per day)</span>
                <strong>{formatNumber(result.theta)}</strong>
              </div>

              <div className="result-item">
                <span>Rho (per 1% interest rate)</span>
                <strong>{formatNumber(result.rho)}</strong>
              </div>

              <div className="result-item">
                <span>D1</span>
                <strong>{formatNumber(result.d1)}</strong>
              </div>

              <div className="result-item">
                <span>D2</span>
                <strong>{formatNumber(result.d2)}</strong>
              </div>
            </div>
          </section>
        )}
      </section>
    </main>

    <Footer/>
     </>
  )
}

export default Calculator