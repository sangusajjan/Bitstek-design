// Approximation of the standard normal cumulative distribution function
function normalCDF(x) {
  const a1 = 0.319381530
  const a2 = -0.356563782
  const a3 = 1.781477937
  const a4 = -1.821255978
  const a5 = 1.330274429

  const k = 1 / (1 + 0.2316419 * Math.abs(x))

  const density =
    Math.exp((-x * x) / 2) / Math.sqrt(2 * Math.PI)

  const probability =
    1 -
    density *
      (a1 * k +
        a2 * k ** 2 +
        a3 * k ** 3 +
        a4 * k ** 4 +
        a5 * k ** 5)

  return x >= 0 ? probability : 1 - probability
}

// Standard normal probability density function
function normalPDF(x) {
  return Math.exp((-x * x) / 2) / Math.sqrt(2 * Math.PI)
}

export function calculateBlackScholes({
  optionType,
  spot,
  strike,
  volatility,
  rate,
  dividend,
  time,
}) {
  if (
    spot <= 0 ||
    strike <= 0 ||
    volatility <= 0 ||
    time <= 0
  ) {
    throw new Error(
      'Spot price, strike price, volatility, and time must be greater than zero.'
    )
  }

  const sigmaRootT = volatility * Math.sqrt(time)

  const d1 =
    (Math.log(spot / strike) +
      (rate - dividend + (volatility ** 2) / 2) * time) /
    sigmaRootT

  const d2 = d1 - sigmaRootT

  const discountRate = Math.exp(-rate * time)
  const discountDividend = Math.exp(-dividend * time)

  const callPrice =
    spot * discountDividend * normalCDF(d1) -
    strike * discountRate * normalCDF(d2)

  const putPrice =
    strike * discountRate * normalCDF(-d2) -
    spot * discountDividend * normalCDF(-d1)

  const price = optionType === 'call' ? callPrice : putPrice

  const delta =
    optionType === 'call'
      ? discountDividend * normalCDF(d1)
      : discountDividend * (normalCDF(d1) - 1)

  const gamma =
    (discountDividend * normalPDF(d1)) /
    (spot * sigmaRootT)

  const vega =
    (spot * discountDividend * normalPDF(d1) * Math.sqrt(time)) /
    100

  const thetaCall =
    (-spot *
      discountDividend *
      normalPDF(d1) *
      volatility) /
      (2 * Math.sqrt(time)) -
    rate * strike * discountRate * normalCDF(d2) +
    dividend * spot * discountDividend * normalCDF(d1)

  const thetaPut =
    (-spot *
      discountDividend *
      normalPDF(d1) *
      volatility) /
      (2 * Math.sqrt(time)) +
    rate * strike * discountRate * normalCDF(-d2) -
    dividend * spot * discountDividend * normalCDF(-d1)

  const theta =
    (optionType === 'call' ? thetaCall : thetaPut) / 365

  const rho =
    (optionType === 'call'
      ? strike * time * discountRate * normalCDF(d2)
      : -strike * time * discountRate * normalCDF(-d2)) / 100

  return {
    price,
    delta,
    gamma,
    vega,
    theta,
    rho,
    d1,
    d2,
  }
}