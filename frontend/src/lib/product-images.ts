const IMG = (name: string) => `/images/products/${name}`;

const RULES: { test: RegExp; image: string }[] = [
  // Seafood
  { test: /shrimp/i, image: IMG("shrimp.jpg") },
  { test: /squid/i, image: IMG("squid.jpg") },
  { test: /crab/i, image: IMG("crab.jpg") },
  { test: /herring/i, image: IMG("herring.jpg") },
  { test: /lambie/i, image: IMG("lambie.jpg") },
  { test: /shark/i, image: IMG("shark-fillet.jpg") },
  { test: /marlin/i, image: IMG("marlin.jpg") },
  { test: /salmon/i, image: IMG("salmon.jpg") },
  { test: /tuna/i, image: IMG("tuna.jpg") },
  { test: /mahi/i, image: IMG("mahi-mahi.jpg") },
  { test: /carite/i, image: IMG("carite.jpg") },
  { test: /king.?fish/i, image: IMG("kingfish.jpg") },
  { test: /^fish/i, image: IMG("kingfish.jpg") },
  { test: /ocean delight|fresh shrimp/i, image: IMG("shrimp.jpg") },

  // Poultry seasoned flavors (match before generic seasoned)
  { test: /jerk/i, image: IMG("jerk-chicken.jpg") },
  { test: /mediterranean.*herb|herb/i, image: IMG("herb-chicken.jpg") },
  { test: /spicy.*khan's|khan's.*herb|geera/i, image: IMG("spicy-chicken.jpg") },

  // Specialty meats
  { test: /oxtail/i, image: IMG("oxtail.jpg") },
  { test: /minced.?lamb|lamb.*mince/i, image: IMG("minced-lamb.jpg") },
  { test: /minced (beef|lamb)/i, image: IMG("minced-beef.jpg") },
  { test: /minced/i, image: IMG("minced-chicken.jpg") },
  { test: /beef liver/i, image: IMG("beef-liver.jpg") },
  { test: /soup bone/i, image: IMG("beef-bone.jpg") },
  { test: /trimmings|cow heel|heel/i, image: IMG("beef.jpg") },
  { test: /beef clod/i, image: IMG("beef.jpg") },
  { test: /beef (stir.?fry|stew)/i, image: IMG("beef-stew.jpg") },
  { test: /beef.*(roast|shortloin|striploin|ribeye|t-bone)|beef steak/i, image: IMG("beef-steak.jpg") },
  { test: /beef/i, image: IMG("beef.jpg") },
  { test: /goat/i, image: IMG("goat.jpg") },
  { test: /lamb.*(chop|loin)/i, image: IMG("lamb-chops.jpg") },
  { test: /lamb rack/i, image: IMG("lamb-rack.jpg") },
  { test: /lamb leg/i, image: IMG("lamb-leg.jpg") },
  { test: /lamb shoulder/i, image: IMG("lamb-shoulder.jpg") },
  { test: /lamb stew/i, image: IMG("lamb-stew.jpg") },
  { test: /lamb/i, image: IMG("lamb-chops.jpg") },
  { test: /turkey/i, image: IMG("turkey.jpg") },

  // Poultry parts (fresh)
  { test: /whole chicken/i, image: IMG("whole-chicken.jpg") },
  { test: /breast.*(kebab|tender)|tenders/i, image: IMG("chicken-tenders.jpg") },
  { test: /bone.?less.*breast|center breast|breast/i, image: IMG("chicken-breast.jpg") },
  { test: /thigh/i, image: IMG("chicken-thighs.jpg") },
  { test: /wing/i, image: IMG("chicken-wings.jpg") },
  { test: /drumstick/i, image: IMG("chicken-drumsticks.jpg") },
  { test: /whole legs|legs/i, image: IMG("chicken-legs.jpg") },
  { test: /liver/i, image: IMG("chicken-liver.jpg") },
  { test: /gizzard|feet|neck|cut.?up|mixed pack/i, image: IMG("chicken-offal.jpg") },
  { test: /duck/i, image: IMG("duck.jpg") },

  // Generic seasoned
  { test: /seasoned/i, image: IMG("seasoned-chicken.jpg") },

  // Fallbacks
  { test: /chicken/i, image: IMG("chicken-breast.jpg") },
  { test: /meat/i, image: IMG("beef-steak.jpg") },
];

const FALLBACKS: Record<string, string> = {
  "poultry-fresh": IMG("chicken-breast.jpg"),
  "poultry-seasoned": IMG("seasoned-chicken.jpg"),
  "specialty-meats": IMG("beef-steak.jpg"),
  seafood: IMG("seafood.jpg"),
};

export function productImage(
  name: string,
  categorySlug: string | null,
  slug?: string | null
): string {
  if (slug) return IMG(`${slug}.jpg`);
  const nameOnly = name.replace(/\(.*?\)/g, "").trim();
  for (const rule of RULES) {
    if (rule.test.test(nameOnly)) return rule.image;
  }
  if (categorySlug && FALLBACKS[categorySlug]) return FALLBACKS[categorySlug];
  return FALLBACKS.specialty;
}