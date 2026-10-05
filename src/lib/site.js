export function assetUrl(path) {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path;
  }
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.replace(/^\/+/, "");
  return `${normalizedBase}${cleanPath}`;
}

export const showrooms = [
  {
    id: "gomathipuram",
    name: "BK Deco Mart",
    title: "Showroom 1 · Gomathipuram (Main)",
    subtitle: "Main Flagship Experience Showroom & Atelier",
    address: "12, Sivagangai Main Road, Gomathipuram, Madurai – 625020, Tamil Nadu",
    addressShort: "12, Sivagangai Main Road, Gomathipuram, Madurai",
    area: "Gomathipuram, Madurai",
    pincode: "625020",
    hours: "Mon – Sat · 10:00 AM – 8:30 PM",
    phone: "+91 97877 13802",
    mapUrl: "https://maps.app.goo.gl/kC2BdLfyC2myZ7aC9",
    mapEmbed: "https://maps.google.com/maps?q=9.9284877,78.1601867+(BK+DECO+MART)&t=&z=17&ie=UTF8&iwloc=B&output=embed",
    isPrimary: true,
  },
  {
    id: "jaihindpuram",
    name: "BK Decors",
    title: "Showroom 2 · Jaihindpuram",
    subtitle: "Decor & Furnishing Studio",
    address: "Arisekara Street, Jaihindpuram, Madurai – 625011, Tamil Nadu",
    addressShort: "Arisekara Street, Jaihindpuram, Madurai",
    area: "Jaihindpuram, Madurai",
    pincode: "625011",
    hours: "Mon – Sat · 10:00 AM – 8:30 PM",
    phone: "+91 97877 13802",
    mapUrl: "https://maps.app.goo.gl/ErbEv1MKdKcETcUn9",
    mapEmbed: "https://maps.google.com/maps?q=9.915172,78.1156707+(BK+DECORS)&t=&z=17&ie=UTF8&iwloc=B&output=embed",
    isPrimary: false,
  },
];

export const site = {
  name: "BK Decomart",
  tagline: "Come, Let's Dressup Your Home",
  since: "1995",
  phone: "+91 97877 13802",
  phoneRaw: "+919787713802",
  whatsappRaw: "919787713802",
  email: "bkdecomartdigital@gmail.com",
  address: "12, Sivagangai Main Road, Gomathipuram, Madurai – 625020",
  addressShort: "Gomathipuram & Jaihindpuram, Madurai",
  locations: showrooms,
  hours: "Mon – Sat · 10:00 AM – 8:30 PM · Sun by appointment",
  mapUrl: "https://maps.app.goo.gl/kC2BdLfyC2myZ7aC9",
  mapEmbed: "https://maps.google.com/maps?q=9.9284877,78.1601867+(BK+DECO+MART)&t=&z=17&ie=UTF8&iwloc=B&output=embed",
  logoUrl: assetUrl("images/logo.png"),
  social: {
    instagram: "https://www.instagram.com/bk.decomart?stkn=MTc4ODQ2YmV5OG96Yw==",
    facebook: "https://facebook.com/",
  },
  showreelUrl: "",
};

export const imageMap = {
  "hero-living": "images/curtains-0.jpg",
  "brand-story": "images/curtains-5.jpg",
  "cat-curtains": "images/curtains-0.jpg",
  "cat-blinds": "images/blinds-0.jpg",
  "cat-wallpapers": "images/wallpapers-0.jpg",
  "wallpapers-0": "images/wallpapers-0.jpg",
  "wallpapers-1": "images/wallpapers-1.jpg",
  "wallpapers-2": "images/wallpapers-2.jpg",
  "wallpaper-3": "images/wallpaper-3.jpg",
  "wallpaper-4": "images/wallpaper-4.jpg",
  "wallpaper-5": "images/wallpaper-5.jpg",
  "wallpaper-6": "images/wallpaper-6.jpg",
  "wallpapers-5": "images/wallpaper-5.jpg",
  "wallpapers-6": "images/wallpaper-6.jpg",
  "cat-carpets": "images/carpet-0.jpg",
  "carpets-0": "images/carpets-0.jpg",
  "store-main": "images/store-main.png",
  "store-img": "images/store-main.png",
  "store-pic": "images/store-main.png",
  "cat-mattresses": "images/bed-1.jpg",
  "mattress-0": "images/mattress-0.jpg",
  "mattress-1": "images/mattress-1.jpg",
  "bed-0": "images/bed-0.jpg",
  "bed-1": "images/bed-1.jpg",
  "cat-plants": "images/plants.jpg",
  plants: "images/plants.jpg",
  "plants-0": "images/plants.jpg",
  "wallpaper-0": "images/wallpapers-0.jpg",
  "room-living": "images/curtains-2.jpg",
  "room-bedroom": "images/curtains-3.jpg",
  "room-dining": "images/wallpapers-1.jpg",
  "room-office": "images/blinds-1.jpg",
  before: "images/blinds-2.jpg",
  after: "images/blinds-0.jpg",
  "gallery-1": "images/curtains-0.jpg",
  "gallery-2": "images/blinds-0.jpg",
  "gallery-3": "images/wallpapers-0.jpg",
  consultation: "images/curtains-4.jpg",
  "showroom-2": "images/showroom-2.jpg",
  "client-hannah-joseph": "images/client-hannah-joseph.jpg",
  "client-dwarka-palace": "images/client-dwarka-palace.jpg",
  "client-chellam-saraswathy": "images/client-chellam-saraswathy.jpg",
  "client-bharathi-infinity": "images/client-bharathi-infinity.jpg",
  "client-anjali": "images/client-anjali.jpg",
  "client-star": "images/client-star.jpg",
  "client-union": "images/client-union.jpg",
  "client-smj": "images/client-smj.jpg",
  "client-royal": "images/client-royal.jpg",
  "client-meenakshi": "images/client-meenakshi.jpg",
};

export function getCandidates(name) {
  if (!name) return [];
  if (
    name.startsWith("http://") ||
    name.startsWith("https://") ||
    name.startsWith("data:") ||
    name.startsWith("blob:")
  ) {
    return [name];
  }
  const clean = name
    .replace(/^\//, "")
    .replace(/\.(jpg|jpeg|png|webp)$/i, "")
    .replace(/^(images|Product-images|product-img2|jpegmini_optimized)\//, "");
  return [
    assetUrl(`images/${clean}.jpg`),
    assetUrl(`images/${clean}.png`),
    assetUrl(`Product-images/${clean}.jpg`),
    assetUrl(`product-img2/${clean}.jpg`),
    assetUrl(`images/${clean}.webp`),
    assetUrl(`${clean}.jpg`),
    assetUrl(`${clean}.png`),
  ];
}

export function getImageSources(name) {
  const mapped = imageMap[name];
  return {
    candidates: getCandidates(name),
    fallback: mapped ? assetUrl(mapped) : assetUrl("images/curtains-0.jpg"),
  };
}

export function getWhatsAppUrl(message = "") {
  const text = encodeURIComponent(
    message || "Hi BK Decomart, I'd like to know more about your home décor collection."
  );
  return `https://wa.me/${site.whatsappRaw}?text=${text}`;
}

export function getPhoneUrl() {
  return `tel:${site.phoneRaw}`;
}

export function getEmailUrl() {
  return `mailto:${site.email}`;
}
