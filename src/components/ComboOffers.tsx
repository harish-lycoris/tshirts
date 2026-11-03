export default function ComboOffers() {
  const ads = [
    '/products/acid-wash-combo-ad-front.png',
    '/products/collar-combo-ad.png',
    '/products/dragon-combo-ad.png',
    '/products/eagle-combo-ad.png',
    '/products/naruto-combo-ad-back.png',
  ];
  return (
    <section aria-label="Combo Offers">
      <div className="flex overflow-x-auto gap-4 pb-2 scroll-smooth snap-x snap-mandatory">
        {ads.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            loading="lazy"
            className="snap-start h-auto w-auto max-h-[280px] flex-shrink-0 object-contain"
            style={{ maxWidth: 'none' }}
          />
        ))}
      </div>
    </section>
  );
}
