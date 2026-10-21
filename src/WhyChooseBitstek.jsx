
import './WhyChooseBitstek.css';

const features = [
  {
    icon: 'network',
    title: 'Wide range of instruments',
    description:
      'Explore a variety of instruments designed to meet your needs, offering precision, reliability, and versatility for every task or instrument you invest or trade in.',
  },
  {
    icon: 'puzzle',
    title: 'Unparalleled market returns',
    description:
      'Experience exceptional market dynamics that provide unique opportunities, ensuring growth, stability, and success in every investment.',
  },
  {
    icon: 'global',
    title: 'Globally licensed & regulated',
    description:
      'Our operations adhere to international standards, ensuring compliance, trust, and security across all regions where we provide our services.',
  },
  {
    icon: 'education',
    title: 'Committed to Financial Market education',
    description:
      'We are dedicated to providing comprehensive resources and training to help you master Financial Market Investment and Trading, ensuring you gain the knowledge and skills needed for success.',
  },
  {
    icon: 'trophy',
    title: 'Regular contests & promotions',
    description:
      'Participate in exciting contests and enjoy exclusive promotions, providing opportunities to win rewards and experience thrilling challenges regularly.',
  },
  {
    icon: 'trophy',
    title: 'Regular contests & promotions',
    description:
      'Participate in exciting contests and enjoy exclusive promotions, providing opportunities to win rewards and experience thrilling challenges regularly.',
  },
];

function FeatureIcon({ type }) {
  return (
    <svg
      className={`why-bitstek-svg-icon icon-${type}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {type === 'network' && (
        <>
          <g stroke="#a58a25" strokeWidth="3">
            <path d="M50 50L20 20M50 50L80 20M50 50L10 50M50 50L90 50M50 50L20 80M50 50L80 80M50 50L50 10M50 50L50 90" />
            {[ [20,20], [80,20], [10,50], [90,50], [20,80], [80,80], [50,10], [50,90] ].map(([x,y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="#4a4940" />
            ))}
          </g>
          <circle cx="50" cy="50" r="21" fill="#e9e5ce" stroke="#a58a25" strokeWidth="3" />
          <path d="M29 50H71M50 29C39 39 39 61 50 71M50 29C61 39 61 61 50 71M32 39H68M32 61H68" stroke="#8d792b" strokeWidth="2.5" />
        </>
      )}

      {type === 'puzzle' && (
        <>
          <path d="M10 32H31C26 18 45 14 48 27H66V43C80 39 85 57 70 61V78H49C54 64 35 60 32 74H10Z" fill="#45443d" stroke="#9b8527" strokeWidth="3" />
          <path d="M50 44H69C65 31 84 28 87 41H94V61H83C87 74 68 78 65 64H50Z" fill="#e9e5ce" stroke="#a58a25" strokeWidth="3" />
          <path d="M19 43H27M23 39V47M18 57H27" stroke="#a58a25" strokeWidth="3" />
        </>
      )}

      {type === 'global' && (
        <>
          <path d="M30 54V17H43V8H70V57" fill="#45443d" stroke="#8d8a7b" strokeWidth="3" />
          <path d="M43 17H70V57H43Z" fill="#56554c" stroke="#8d8a7b" strokeWidth="3" />
          <g fill="#c7b77b">
            <rect x="36" y="23" width="6" height="6" />
            <rect x="48" y="23" width="6" height="6" />
            <rect x="60" y="23" width="6" height="6" />
            <rect x="36" y="35" width="6" height="6" />
            <rect x="48" y="35" width="6" height="6" />
            <rect x="60" y="35" width="6" height="6" />
          </g>
          <path d="M9 84C14 62 30 53 50 53S86 62 91 84Z" fill="#e9e5ce" stroke="#a58a25" strokeWidth="3" />
          <path d="M50 55L42 65L50 70L45 80M24 62L31 69L26 78M72 62L65 70L75 77" stroke="#a58a25" strokeWidth="3" />
        </>
      )}

      {type === 'education' && (
        <>
          <path d="M12 16H88V55L77 62L66 55L55 62L44 55L33 62L22 55L12 62Z" fill="#45443d" stroke="#8d8a7b" strokeWidth="3" />
          <circle cx="50" cy="35" r="14" fill="#e9e5ce" stroke="#a58a25" strokeWidth="3" />
          <path d="M45 31H55L52 38V46H48V38Z" fill="#8d792b" />
          <g fill="#e9e5ce" stroke="#a58a25" strokeWidth="2.5">
            <circle cx="25" cy="70" r="9" />
            <circle cx="50" cy="70" r="9" />
            <circle cx="75" cy="70" r="9" />
            <path d="M12 94V85C12 77 38 77 38 85V94M37 94V85C37 77 63 77 63 85V94M62 94V85C62 77 88 77 88 85V94" />
          </g>
        </>
      )}

      {type === 'trophy' && (
        <>
          <path d="M35 13H65V28C65 42 59 49 50 49S35 42 35 28Z" fill="#45443d" stroke="#8d8a7b" strokeWidth="3" />
          <path d="M35 19H20V27C20 38 28 42 38 41M65 19H80V27C80 38 72 42 62 41" stroke="#8d8a7b" strokeWidth="4" />
          <path d="M46 49H54V65H46Z" fill="#a58a25" />
          <path d="M30 65H70V90H30Z" fill="#e9e5ce" stroke="#a58a25" strokeWidth="3" />
          <path d="M50 69L54 77H62L56 82L58 89L50 84L42 89L44 82L38 77H46Z" fill="#a58a25" />
          <path d="M20 90H80" stroke="#a58a25" strokeWidth="4" />
          <path d="M50 2V8M28 7L32 12M72 7L68 12" stroke="#a58a25" strokeWidth="3" />
        </>
      )}
    </svg>
  );
}

function WhyChooseBitstek() {
  return (
    <section className="why-bitstek">
      <div className="why-bitstek-header">
        <h2>Why choose Bitstek Advisory?</h2>
        <p>
          We offer one-click trading experience with 30+ world-renowned markets.
        </p>
      </div>

      <div className="why-bitstek-grid">
        {features.map((feature, index) => (
          <article className="why-bitstek-card" key={index}>
            <div className="why-bitstek-icon">
              <FeatureIcon type={feature.icon} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseBitstek;
