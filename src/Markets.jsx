import {
    Landmark,
    Sprout,
    ChartNoAxesColumn,
    ChartPie,
    Presentation,
    Filter,
    Handshake,
     ShieldCheck,
  CircleDollarSign,
  Headset,
  ChartNoAxesCombined,
} from "lucide-react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Markets.css";

const marketOptions = [
    {
        icon: Sprout,
        title: "Investing",
        description:
            "A wide selection of investment products to help build a diversified portfolio.",
        color: "investing",
    },
    {
        icon: ChartNoAxesColumn,
        title: "Trading",
        description:
            "Powerful trading tools, resources, insight and support.",
        color: "trading",
    },
    {
        icon: ChartPie,
        title: "Wealth management",
        description:
            "Dedicated financial guidance to help you work toward your financial goals.",
        color: "wealth",
    },
    {
        icon: Presentation,
        title: "Investment advisory",
        description:
            "A wide selection of investing strategies from seasoned portfolio managers.",
        color: "advisory",
    },
    {
        icon: Filter,
        title: "Smart portfolio",
        description:
            "A revolutionary, fully-automated investment advisory service.",
        color: "portfolio",
    },
    {
        icon: Handshake,
        title: "Mutual fund advisor",
        description:
            "Specialized guidance from independent advisors for HNI clients.",
        color: "mutual",
    },
];
const benefits = [
    "Direct Market Access (DMA)",
    "Free from UK Stamp Duty",
    "Leverage up to 1:500",
    "Short selling available",
    "T+0 settlement",
    "Commissions from 0.08%",
    "Dividends paid in cash",
    "Access to more than 10,000 global financial instruments",
];

function Markets() {
    return (
        <>
            <Navbar />

            <main className="markets-page">
                <section className="markets-intro">
                    <h1>
                        A <span>relationship</span> on your terms.
                    </h1>

                    <h2>Work with us the way you want.</h2>

                    <p>
                        Some believe you must choose between an online broker
                        and a wealth management firm. Whether you invest on your
                        own, with an advisor, or a little of both — we can support you.
                    </p>
                </section>

                <section className="markets-cards">
                    {marketOptions.map((item) => (
                        <article
                            className={`markets-card ${item.color}`}
                            key={item.title}
                        >
                            <div className="markets-card-icon">
                                <item.icon size={28} strokeWidth={2.5} />
                            </div>

                            <h3>{item.title}</h3>

                            <div className="markets-card-line" />

                            <p>{item.description}</p>
                        </article>
                    ))}
                </section>

                <section className="why-markets">
                   <div className="why-markets-icon">
    <Landmark size={32} strokeWidth={2} />
</div>
                    <div className="why-markets-content">
                        <h2>Why Bitstek?</h2>

                        <p className="why-markets-description">
                            Discover the benefits of trading with Bitstek Advisory,
                            offering competitive rates, secure platforms, and expert
                            support to help you achieve your financial goals with confidence.
                        </p>

                        <ul className="benefits-list">
                            {benefits.map((benefit) => (
                                <li key={benefit}>
                                    <span className="benefit-check">✓</span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Markets;
