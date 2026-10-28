import hero from '../assets/revive-hero.jpg';
import detail from '../assets/revive-detail.jpg';
import product from '../assets/revive-product.jpg';

const steps = [
  { number: '01', title: 'A quieter first impression', text: 'An editorial product story with room to breathe, designed to make the essentials easy to find.' },
  { number: '02', title: 'Details that have purpose', text: 'Close-up imagery, readable content and a considered rhythm across desktop and mobile.' },
  { number: '03', title: 'Ready for Shopify', text: 'The matching Liquid section uses merchant-editable content and Shopify product data.' },
];

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="concept-bar">Independent Shopify design concept · No product is for sale here</div>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="REVIVE, back to top">REVIVE<span>®</span></a>
        <nav aria-label="Main navigation">
          <a href="#story">The story</a><a href="#details">The details</a><a href="#project">The project</a>
        </nav>
        <a className="header-link" href="#project">Explore concept <span aria-hidden="true">↗</span></a>
      </header>
      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">01 / A skincare storefront concept</p>
            <h1 id="hero-title">A fresh<br /><em>perspective</em><br />on the everyday.</h1>
            <p className="lead">REVIVE imagines a calm, confident product experience where imagery, typography and useful information do the work.</p>
            <a className="button" href="#story">Discover the concept <span aria-hidden="true">↗</span></a>
            <p className="micro">Designed as a portfolio concept. Product imagery is illustrative.</p>
          </div>
          <div className="hero-art"><img src={hero} alt="Concept serum bottle on a pale stone surface" /><span className="image-caption">An exercise in considered commerce · 2026</span></div>
        </section>
        <section className="intro section-pad" id="story">
          <p className="eyebrow">The design intention</p>
          <div><h2>Less noise.<br /><em>More clarity.</em></h2><p>A product page should feel effortless to explore. This concept pairs an editorial visual language with a practical path from first glance to product details.</p></div>
        </section>
        <section className="image-story" aria-label="Editorial concept imagery">
          <img src={detail} alt="Serum texture and natural materials in soft light" loading="lazy" />
          <div><span className="eyebrow">Made to feel different</span><p>Warm light. Tactile surfaces. Space for the product story.</p></div>
        </section>
        <section className="details section-pad" id="details">
          <div className="details-heading"><p className="eyebrow">A thoughtful experience</p><h2>Every detail<br /><em>has a role.</em></h2></div>
          <div className="steps">{steps.map(step => <article className="step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div>
        </section>
        <section className="product-spotlight"><div className="product-image"><img src={product} alt="Illustrative REVIVE serum packaging" loading="lazy" /></div><div className="product-copy"><p className="eyebrow">The Shopify implementation</p><h2>Beauty in<br /><em>the build.</em></h2><p>The real project deliverable is a Shopify Liquid product section with editable copy, selected images, and a product form that connects to Shopify data when installed in a test theme.</p><a className="text-link" href="#project">See what is included <span aria-hidden="true">↗</span></a></div></section>
        <section className="project section-pad" id="project"><p className="eyebrow">Project notes</p><h2>Designed to be seen.<br /><em>Built to be used.</em></h2><div className="project-grid"><p>Concept storefront and responsive preview</p><p>Shopify Online Store 2.0 Liquid section</p><p>Merchant-editable copy and imagery</p></div><p className="disclaimer">REVIVE is a fictional brand. This preview does not include checkout, validated product benefits, or real customer reviews.</p></section>
      </main>
      <footer><a className="wordmark" href="#top">REVIVE<span>®</span></a><span>Shopify product page concept</span><a href="#top">Back to top ↑</a></footer>
    </>
  );
}
