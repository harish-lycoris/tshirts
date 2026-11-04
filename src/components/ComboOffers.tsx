export default function ComboOffers() {
  const ads = [
    '/products/acid-wash-combo-ad-front.webp',
    '/products/collar-combo-ad.webp',
    '/products/dragon-combo-ad.webp',
    '/products/eagle-combo-ad.webp',
    '/products/naruto-combo-ad-back.webp',
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
