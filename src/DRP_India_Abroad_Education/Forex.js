import React, { useState } from "react";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";
import "../styles/Forex.css";

// Add an image for visual appeal
import forexImage from "../images/foreee.avif";
import axios from "axios";
import { message, Spin } from "antd";

const Forex = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "/api/v1/inquiry/submit-form-drp",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        message.success("Form submitted successfully! Email sent.");
        setFormData({ name: "", email: "", contact: "", message: "" });
      } else {
        message.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false); // Ensure loading state is reset after submission
    }
  };
  return (
    <>
      <Header />
      <DrpEduNavbar />

      <div className="forex-container">
        <div className="forex-banner">
          <img src={forexImage} alt="Forex Market" />
          <h1>Forex (Foreign Exchange)</h1>
        </div>

        <div className="forex-section">
          <h2>Key Concepts in Forex</h2>
          <ul>
            <li>
              <strong>Currency Pairs:</strong> In Forex, currencies are traded
              in pairs. The first currency in the pair is the base currency, and
              the second one is the quote currency. The exchange rate tells you
              how much of the quote currency you need to buy one unit of the
              base currency.
              <br />
              <strong>Example:</strong> EUR/USD (Euro/US Dollar)
              <br />
              If the exchange rate is 1.2000, it means 1 Euro equals 1.20 US
              Dollars.
            </li>
            <li>
              <strong>Major Currency Pairs:</strong> These pairs involve the
              most widely traded currencies, including the US Dollar (USD), Euro
              (EUR), British Pound (GBP), Japanese Yen (JPY), Swiss Franc (CHF),
              Australian Dollar (AUD), and Canadian Dollar (CAD).
              <br />
              <strong>Example pairs:</strong> EUR/USD, GBP/USD, USD/JPY
            </li>
            <li>
              <strong>Cross Currency Pairs:</strong> These are pairs that do not
              include the US Dollar, such as EUR/GBP (Euro/British Pound) or
              EUR/JPY (Euro/Japanese Yen).
            </li>
            <li>
              <strong>Exotic Currency Pairs:</strong> These pairs include one
              major currency and one currency from a developing or emerging
              market, such as USD/TRY (US Dollar/Turkish Lira) or EUR/ZAR
              (Euro/South African Rand).
            </li>
            <li>
              <strong>Bid and Ask Price:</strong>
              <ul>
                <li>
                  <strong>Bid:</strong> The price at which you can sell a
                  currency.
                </li>
                <li>
                  <strong>Ask:</strong> The price at which you can buy a
                  currency.
                </li>
                <li>
                  The difference between these two prices is called the spread.
                </li>
              </ul>
            </li>
            <li>
              <strong>Pip (Percentage in Point):</strong> A pip is the smallest
              price move that a given exchange rate can make. For most currency
              pairs, a pip is 0.0001, but for pairs involving the Japanese Yen,
              a pip is 0.01.
            </li>
            <li>
              <strong>Leverage:</strong> Forex trading allows traders to use
              leverage, which means you can control a larger position with a
              smaller amount of capital. For example, with 50:1 leverage, you
              can control a $50,000 position with just $1,000.
            </li>
            <li>
              <strong>Margin:</strong> Margin is the amount of money required to
              open a leveraged position in Forex trading. It's a percentage of
              the full trade value.
            </li>
            <li>
              <strong>Forex Trading Hours:</strong> The Forex market operates 24
              hours a day, five days a week, with trading sessions in major
              financial centers such as London, New York, Tokyo, and Sydney.
              <br />
              <strong>Asian Session:</strong> 12:00 AM to 9:00 AM GMT
              <br />
              <strong>European Session:</strong> 7:00 AM to 4:00 PM GMT
              <br />
              <strong>US Session:</strong> 1:00 PM to 10:00 PM GMT
            </li>
            <li>
              <strong>Types of Forex Markets:</strong>
              <ul>
                <li>
                  <strong>Spot Market:</strong> A market where currencies are
                  bought and sold for immediate delivery. Transactions occur "on
                  the spot" at the current exchange rate.
                </li>
                <li>
                  <strong>Forward Market:</strong> A market where currency
                  transactions are agreed upon today but executed at a future
                  date. Forward contracts are typically used for hedging.
                </li>
                <li>
                  <strong>Futures Market:</strong> A market where standardized
                  contracts for currency are traded on exchanges like the
                  Chicago Mercantile Exchange (CME).
                </li>
                <li>
                  <strong>Options Market:</strong> Similar to futures, but it
                  gives traders the right (not the obligation) to buy or sell
                  currencies at a set price before a certain date.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="forex-section">
          <h2>How to Start Forex Trading</h2>
          <ol>
            <li>
              <strong>Educate Yourself:</strong> Learn the basics of Forex
              trading, including how the market works, currency pairs, and the
              factors that influence prices.
            </li>
            <li>
              <strong>Choose a Broker:</strong> Select a reliable broker that
              offers competitive spreads, good customer support, and suitable
              platforms for your needs.
            </li>
            <li>
              <strong>Practice with a Demo Account:</strong> Most brokers offer
              demo accounts where you can practice trading with virtual money
              before risking your capital.
            </li>
            <li>
              <strong>Develop a Trading Plan:</strong> Set clear goals, risk
              management strategies, and understand your trading style.
            </li>
            <li>
              <strong>Start Trading with Real Money:</strong> Once you are
              comfortable, deposit funds into your live account and begin
              trading, but start small and gradually increase your exposure.
            </li>
          </ol>
        </div>

        <div className="forex-section">
          <h2>Why Do People Trade Forex?</h2>
          <ul>
            <li>
              <strong>Speculation:</strong> Many traders buy and sell currencies
              to profit from changes in exchange rates. Forex trading offers
              opportunities for profit in both rising and falling markets.
            </li>
            <li>
              <strong>Hedging:</strong> Companies use Forex to protect
              themselves against fluctuations in exchange rates when conducting
              international business, such as buying raw materials from other
              countries or selling goods abroad.
            </li>
            <li>
              <strong>Investment:</strong> Forex can be a way to diversify
              investment portfolios, especially in cases where a trader wants
              exposure to foreign assets or currencies.
            </li>
            <li>
              <strong>Interest Rate Differentials:</strong> Some traders engage
              in carry trades, where they borrow in a currency with a low
              interest rate and invest in a currency with a higher interest
              rate.
            </li>
          </ul>
        </div>

        <div className="forex-section">
          <h2>Forex Trading Strategies</h2>
          <ul>
            <li>
              <strong>Day Trading:</strong> Involves opening and closing
              positions within the same trading day, trying to profit from
              short-term price movements.
            </li>
            <li>
              <strong>Swing Trading:</strong> Involves holding positions for
              several days or weeks to capitalize on medium-term price
              movements.
            </li>
            <li>
              <strong>Scalping:</strong> A strategy that aims to make small
              profits from minor price fluctuations within a very short period
              of time.
            </li>
            <li>
              <strong>Position Trading:</strong> A long-term strategy where
              traders hold positions for weeks, months, or even years, based on
              fundamental analysis.
            </li>
            <li>
              <strong>Carry Trading:</strong> A strategy that involves borrowing
              funds in a currency with a low interest rate and investing in a
              currency with a higher interest rate.
            </li>
          </ul>
        </div>

        <div className="forex-section">
          <h2>Factors Influencing Forex Market</h2>
          <ul>
            <li>
              <strong>Economic Indicators:</strong> Reports on GDP, inflation,
              employment data, and consumer confidence can impact currency
              values.
            </li>
            <li>
              <strong>Interest Rates:</strong> Central banks control interest
              rates, and changes in rates directly affect the strength of a
              country's currency. Higher rates tend to strengthen a currency.
            </li>
            <li>
              <strong>Political Events:</strong> Elections, geopolitical
              tensions, and government policies can cause volatility in Forex
              markets.
            </li>
            <li>
              <strong>Market Sentiment:</strong> News, rumors, and global events
              can quickly influence market sentiment and currency prices.
            </li>
            <li>
              <strong>Natural Disasters:</strong> Events such as earthquakes,
              hurricanes, and pandemics can disrupt economies and impact
              currencies.
            </li>
          </ul>
        </div>

        <div className="forex-section">
          <h2>Risks in Forex Trading</h2>
          <ul>
            <li>
              <strong>Market Risk:</strong> Currency values can fluctuate
              rapidly, and traders may face significant losses.
            </li>
            <li>
              <strong>Leverage Risk:</strong> While leverage can amplify
              profits, it can also amplify losses, leading to significant
              financial risk.
            </li>
            <li>
              <strong>Interest Rate Risk:</strong> Changes in interest rates can
              have a major impact on currency values.
            </li>
            <li>
              <strong>Liquidity Risk:</strong> Some currencies or pairs may have
              low trading volume, making it difficult to enter or exit trades at
              desired prices.
            </li>
            <li>
              <strong>Geopolitical Risk:</strong> Political instability or
              changes can lead to market disruptions, impacting currency values.
            </li>
          </ul>
        </div>
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              placeholder="Your Contact Number"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Inquiry About</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Inquiry About"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <Spin size="small" /> : "Submit"}
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Forex;
