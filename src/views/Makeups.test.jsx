import Makeups from './Makeups';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';

const makeups = [
  {
    id: 1017,
    brand: 'lotus cosmetics usa',
    name: 'Creme to Powder Blush',
    price: '0.0',
    price_sign: '$',
    currency: 'USD',
    image_link:
      'https://www.purpicks.com/wp-content/uploads/2018/03/lotus-cosmetics-usa-creme-to-powder-blush.png',
    product_link: 'https://www.purpicks.com/product/lotus-cosmetics-usa-creme-powder-blush/',
    website_link: 'https://purpicks.com/',
    description:
      'A cream to powder blush made with all natural ingredients that applies like a soft cream but finishes like a silky powder. Antioxidant-rich botanicals help moisturize the skin, while natural pigments provide long-lasting buildable color for a healthy, radiant glow. Made with natural and organic ingredients.',
    rating: null,
    category: 'cream',
    product_type: 'blush',
    tag_list: ['purpicks', 'USDA Organic', 'Organic'],
    created_at: '2018-06-30T19:19:30.678Z',
    updated_at: '2018-09-02T22:52:06.437Z',
    product_api_url: 'https://makeup-api.herokuapp.com/api/v1/products/1017.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/017/original/open-uri20180630-4-1r5paz3?1530390370',
    product_colors: [
      {
        hex_value: '#C7766F',
        colour_name: 'Plum',
      },
      {
        hex_value: '#DF925C',
        colour_name: 'Apricot',
      },
      {
        hex_value: '#E89B7C',
        colour_name: 'Rose',
      },
    ],
  },
  {
    id: 1003,
    brand: 'glossier',
    name: 'Cloud Paint',
    price: '22.0',
    price_sign: '$',
    currency: 'USD',
    image_link:
      'https://static-assets.glossier.com/production/spree/images/attachments/000/001/241/portrait_normal/CP_PDP_02.jpg?1488382023',
    product_link: 'https://www.glossier.com/products/cloud-paint',
    website_link: 'https://www.glossier.com',
    description:
      'With Cloud Paint, we set out to make blush the high point of your routine. The pillowy, gel-cream formula is designed to be the most user-friendly cheek color in existence. If you can finger paint, you can Cloud Paint—simply dab it onto cheeks wherever you please. It’s seamless, sheer, and buildable (i.e. it’s hard to accidentally apply too much). Inspired by gradient pink NYC sunsets, the shades are optimized to work across a wide range of skin tones for a healthy, flushed-from-within glow.',
    rating: null,
    category: 'cream',
    product_type: 'blush',
    tag_list: [],
    created_at: '2017-12-27T03:04:32.907Z',
    updated_at: '2017-12-27T03:05:09.354Z',
    product_api_url: 'https://makeup-api.herokuapp.com/api/v1/products/1003.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/003/original/open-uri20171227-4-13ivnwv?1514343870',
    product_colors: [
      {
        hex_value: '#C78B7C',
        colour_name: 'Dusk',
      },
      {
        hex_value: '#F3D1E0',
        colour_name: 'Puff',
      },
      {
        hex_value: '#F1BB9E',
        colour_name: 'Beam',
      },
      {
        hex_value: '#B65F79',
        colour_name: 'Haze',
      },
    ],
  },
  {
    id: 428,
    brand: 'stila',
    name: 'Stila Convertible Colour Palette Sinrise Splendor',
    price: '51.0',
    price_sign: null,
    currency: null,
    image_link:
      'https://d3t32hsnjxo7q6.cloudfront.net/i/ad55adbfdae0bb8adfe72bcbc41893ac_ra,w158,h184_pa,w158,h184.jpg',
    product_link: 'https://well.ca/products/stila-convertible-colour-palette_120775.html',
    website_link: 'https://well.ca',
    description:
      'Stila Convertible Colour Palette is a fresh arrangement of Convertible Colour Dual Lip & Cheek Creams with five cool toned shades. They blend like a dream, leaving lips and cheeks petal soft with pretty pops of translucent colour. Sunrise Splendor Shades:English Rose (warm rose tone)Lillium (pinky nude)Cherry Blossom (pink)Fuchsia (bright pink)Tulip (deep plum)Application: For lips, apply with fingertips or lip brush. For cheeks, tap your ring finger into product and gently warm against your thumb. Then tap colour onto cheeks, blending outward and upward.  Can also be applied with brush.Ingredients: Ricinus Communis (Castor) Seed Oil, Lanolin Oil, Beeswax (Cera Alba), Octyl Dodecanol, Microcrystalline Wax, Phenyl Trimethicone, Caprylic/Capric Triglyceride, Ozokerite, Hydrogenated Palm Kernel Glycerides, Octyl Palmitate, Isononyl Isononanoate, C-12-15 Alkyl Benzoate, Tocopheryl Acetate, Hydrogenated Palm Glycerides, BHT. May Contain: Titanium Dioxide (CI 77891), Iron Oxides (CI 77491, CI 77492, CI 77499), Red 7 Lake (Cl 15850), Red 28 Lake (CI 45410), Red 30 Lake (CI 73360), Yellow 5 Lake (CI 19140).Red 22 Lake (CI 45380).',
    rating: null,
    category: 'cream',
    product_type: 'blush',
    tag_list: [],
    created_at: '2016-10-01T18:34:33.400Z',
    updated_at: '2017-12-23T21:08:43.243Z',
    product_api_url: 'https://makeup-api.herokuapp.com/api/v1/products/428.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/428/original/data?1514063323',
    product_colors: [],
  },
  {
    id: 427,
    brand: 'stila',
    name: 'Stila Convertible Colour Palette Sunset Serenade',
    price: '51.0',
    price_sign: null,
    currency: null,
    image_link:
      'https://d3t32hsnjxo7q6.cloudfront.net/i/6bb8e9566e2b42bfaf85b9abe36e7cde_ra,w158,h184_pa,w158,h184.jpg',
    product_link: 'https://well.ca/products/stila-convertible-colour-palette_120773.html',
    website_link: 'https://well.ca',
    description:
      'Stila Convertible Colour Palette is a fresh arrangement of Convertible Colour Dual Lip & Cheek Creams with five warm toned shades. They blend like a dream, leaving lips and cheeks petal soft with pretty pops of translucent colour. Sunset Serenade Shades: Petunia (warm pink)Peach blossom (warm peach)Gerbera (peachy nude)Camellia (warm beige)Twilight Rose (deep rose)Application: For lips, apply with fingertips or lip brush. For cheeks, tap your ring finger into product and gently warm against your thumb. Then tap colour onto cheeks, blending outward and upward.  Can also be applied with brush.Ingredients: Ricinus Communis (Castor) Seed Oil, Lanolin Oil, Beeswax (Cera Alba), Octyl Dodecanol, Microcrystalline Wax, Phenyl Trimethicone, Caprylic/Capric Triglyceride, Ozokerite, Hydrogenated Palm Kernel Glycerides, Octyl Palmitate, Isononyl Isononanoate, C-12-15 Alkyl Benzoate, Tocopheryl Acetate, Hydrogenated Palm Glycerides, BHT. May Contain: Titanium Dioxide (CI 77891), Iron Oxides (CI 77491, CI 77492, CI 77499), Red 7 Lake (Cl 15850), Red 28 Lake (CI 45410), Red 30 Lake (CI 73360), Yellow 5 Lake (CI 19140).Red 22 Lake (CI 45380).',
    rating: null,
    category: 'cream',
    product_type: 'blush',
    tag_list: [],
    created_at: '2016-10-01T18:34:32.344Z',
    updated_at: '2017-12-23T21:08:43.144Z',
    product_api_url: 'https://makeup-api.herokuapp.com/api/v1/products/427.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/427/original/data?1514063323',
    product_colors: [],
  },
  {
    id: 421,
    brand: 'anna sui',
    name: 'Anna Sui Cream Cheek Colour',
    price: '27.0',
    price_sign: null,
    currency: null,
    image_link:
      'https://d3t32hsnjxo7q6.cloudfront.net/i/3fd71730443a4f57b798668c24d0ad19_ra,w158,h184_pa,w158,h184.jpg',
    product_link: 'https://well.ca/products/anna-suicream-cheek-colour_115150.html',
    website_link: 'https://well.ca',
    description:
      'This Anna Sui Cream Cheek Colour is an oil-based gel formula that blends colour into the skin while promoting radiance in the cheeks.  Its pore smoothing powder creates a soft focus effect that leaves skin looking smooth and poreless.Directions: Apply with the unique sponge by dabbing the colour onto your cheeks and blending.',
    rating: null,
    category: 'cream',
    product_type: 'blush',
    tag_list: [],
    created_at: '2016-10-01T18:34:26.479Z',
    updated_at: '2017-12-23T21:08:41.639Z',
    product_api_url: 'https://makeup-api.herokuapp.com/api/v1/products/421.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/421/original/data?1514063321',
    product_colors: [
      {
        hex_value: '#FFA8AC',
        colour_name: 'Baby Pink (300) ',
      },
      {
        hex_value: '#E7807F',
        colour_name: 'Coral Pink (301) ',
      },
      {
        hex_value: '#E1506F',
        colour_name: 'Poppy (302) ',
      },
      {
        hex_value: '#C32F3D',
        colour_name: 'Anna Red (400) ',
      },
      {
        hex_value: '#E95E49',
        colour_name: 'Super Orange (600) ',
      },
      {
        hex_value: '#DC6C68',
        colour_name: 'Beige Pink (700) ',
      },
    ],
  },
  {
    id: 420,
    brand: 'nyx',
    name: 'NYX Rouge Cream Blush',
    price: '9.99',
    price_sign: null,
    currency: null,
    image_link:
      'https://d3t32hsnjxo7q6.cloudfront.net/i/7e559a82a8c8b56d75ae5f108d8449ba_ra,w158,h184_pa,w158,h184.png',
    product_link: 'https://well.ca/products/nyx-rouge-cream-blush_105937.html',
    website_link: 'https://well.ca',
    description:
      'NYX Rough Cream Blush is a long-lasting, sheer blusher color in a velvety smooth cream.Features:Provides radiant, long-lasting color and a fresh, dewy glowFormula is infused with minerals that hydrate and condition the skinLong-lasting color in the form of a velvety smooth cream',
    rating: 2.0,
    category: 'cream',
    product_type: 'blush',
    tag_list: [],
    created_at: '2016-10-01T18:34:24.983Z',
    updated_at: '2017-12-23T21:08:41.488Z',
    product_api_url: 'https://makeup-api.herokuapp.com/api/v1/products/420.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/420/original/open-uri20171223-4-1w3nykx?1514063321',
    product_colors: [
      {
        hex_value: '#E4878D',
        colour_name: 'Boho Chic (CB11) Light Blue-Toned Pink ',
      },
      {
        hex_value: '#D4696F',
        colour_name: 'Glow (CB05) Plummy Pink ',
      },
      {
        hex_value: '#F18F8E',
        colour_name: 'Natural (CB02) Soft Light Pink ',
      },
      {
        hex_value: '#EC6A4E',
        colour_name: 'Orange (CB09) Soft Orange ',
      },
      {
        hex_value: '#CA7769',
        colour_name: 'Tea Rose (CB03) Medium Beige-Pink  ',
      },
    ],
  },
  {
    id: 419,
    brand: "l'oreal",
    name: "L'Oreal Paris Visible Lift Blur Blush ",
    price: '15.99',
    price_sign: null,
    currency: null,
    image_link:
      'https://d3t32hsnjxo7q6.cloudfront.net/i/4099ce5656b195d2ec1b845d2b678e25_ra,w158,h184_pa,w158,h184.jpeg',
    product_link: 'https://well.ca/products/loreal-paris-visible-lift-blur_96606.html',
    website_link: 'https://well.ca',
    description:
      "Create an instantly just kissed glow with L'Oreal Paris Visible Lift Blur™ Blush. The \ncushiony soft texture glides over skin to blur away dullness for \ninstantly radiant looking skin.Ingredients: CYCLOPENTASILOXANE / DIMETHICONE\nCROSSPOLYMER / ALUMINA / DISODIUM\nSTEAROYL GLUTAMATE / ALUMINUM\nHYDROXIDE  [+/- MAY CONTAIN: MICA / CI 77891 - TITANIUM\nDIOXIDE / CI 45410 - RED 28 LAKE / CI\n73360 - RED 30 / CI 19140 - YELLOW 5\nLAKE / CI 77491, CI 77492, CI 77499 -\nIRON OXIDES] \n\n",
    rating: null,
    category: 'cream',
    product_type: 'blush',
    tag_list: [],
    created_at: '2016-10-01T18:34:24.363Z',
    updated_at: '2017-12-23T21:08:41.364Z',
    product_api_url: 'https://makeup-api.herokuapp.com/api/v1/products/419.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/419/original/data?1514063321',
    product_colors: [
      {
        hex_value: '#F26F81',
        colour_name: 'Soft Berry ',
      },
      {
        hex_value: '#F2869D',
        colour_name: 'Soft Pink ',
      },
    ],
  },
  {
    id: 418,
    brand: 'marcelle',
    name: 'Marcelle Cream Blush',
    price: '14.99',
    price_sign: null,
    currency: null,
    image_link:
      'https://d3t32hsnjxo7q6.cloudfront.net/i/8d1dc771f1dbdf2fe5e3cb378c44f1fb_ra,w158,h184_pa,w158,h184.jpeg',
    product_link: 'https://well.ca/products/marcelle-cream-blush_94562.html',
    website_link: 'https://well.ca',
    description:
      '\n        Marcelle’s Cream Blushes beautifully blend for \na flawless application. The richly pigmented shades provide a veil of \ncolour for a healthy glow.Compact includes a handy sponge applicator.    ',
    rating: 5.0,
    category: 'cream',
    product_type: 'blush',
    tag_list: ['Canadian'],
    created_at: '2016-10-01T18:34:23.030Z',
    updated_at: '2017-12-23T21:08:41.237Z',
    product_api_url: 'https://makeup-api.herokuapp.com/api/v1/products/418.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/418/original/data?1514063321',
    product_colors: [
      {
        hex_value: '#BC6E7E',
        colour_name: 'Heatherwood ',
      },
      {
        hex_value: '#D88798',
        colour_name: 'Raspberry ',
      },
      {
        hex_value: '#F3A0A8',
        colour_name: 'Coral ',
      },
      {
        hex_value: '#D46472',
        colour_name: 'Pink Mademoiselle ',
      },
    ],
  },
  {
    id: 417,
    brand: 'revlon',
    name: 'Revlon PhotoReady Cream Blush',
    price: '13.49',
    price_sign: null,
    currency: null,
    image_link:
      'https://d3t32hsnjxo7q6.cloudfront.net/i/1b84cb453bc5527d4ecb11b5967cd135_ra,w158,h184_pa,w158,h184.jpeg',
    product_link: 'https://well.ca/products/revlon-photoready-cream-blush_84552.html',
    website_link: 'https://well.ca',
    description:
      'Revlon PhotoReady™ Cream Blush was \ncreated by Global Artistic Director Gucci Westman for the Spring 2012 \ncollection. Inspired by the glowing skin of a beach beauty, these silky \ncream blushes glide on smoothly provide a dewy flush of color for a \nhealthy, gorgeous glow.Features: Creamy blush provides buildable, beautiful flush of colorLightweight formula with silky soft feel on skinBlends evenly over cheeks for smooth applicationPhotochromatic pigments bend and reflect light to provide cheeks with a beautiful glow',
    rating: 5.0,
    category: 'cream',
    product_type: 'blush',
    tag_list: [],
    created_at: '2016-10-01T18:34:20.813Z',
    updated_at: '2017-12-23T21:08:40.772Z',
    product_api_url: 'https://makeup-api.herokuapp.com/api/v1/products/417.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/417/original/data?1514063320',
    product_colors: [],
  },
  {
    id: 416,
    brand: null,
    name: 'DaLish Lip Cheek Balm',
    price: '15.0',
    price_sign: null,
    currency: null,
    image_link:
      'https://d3t32hsnjxo7q6.cloudfront.net/i/3a23201f66be485784f542c43a4b3569_ra,w158,h184_pa,w158,h184.jpg',
    product_link: 'https://well.ca/products/dalish-lip-cheek-balm_98198.html?cat=1978',
    website_link: 'https://well.ca',
    description:
      'A little goes a long way with this richly pigmented multi-use balm that can be used on cheeks and lips for a fresh, happy glow. Start with one dab of DaLish Lip Cheek Balm on the apples of cheeks and use your fingers to massage in colour where you want it. Pearl-like pigments means the pretty tint won’t fall flat on lips. Directions: Apply directly on to lips for balm use and dab directly onto cheeks for blush use. Blend woth your fingers till you reach your desired look. Shade Range:  BO1 - Dusty Rose – shade with a hint of bronzer. Perfect for fair to medium tones.\n                            \n                          \n                            \n                                                                                                    \n                                                                 BO2 - Coral – that has a real punch to it. Perfect for all skin tones.\n                            \n                          \n                            \n                                                                                                    \n                                                                 BO3 - Bubble Gum Pink – Has a great pop of colour and perfect for all skin tones.\n                            \n                          \n                            \n                                                                                                    \n                                                                 BO4 - Bronzer – Perfect for all colour tones and ideal for contouring.\n                            \n                          \n                            \n                                                                                                    \n                                                                 BO5 - Deep Plum – Perfect for all skin tones. - See more at: //www.dalishcosmetics.com/product/lipcheek-balms-75-natural#sthash.9DGfyyKW.dpufBO1 - Dusty Rose – shade with a hint of bronzer. Perfect for fair to medium tones.BO2 - Coral – that has a real punch to it. Perfect for all skin tones.BO3 - Bubble Gum Pink – Has a great pop of colour and perfect for all skin tones.BO4 - Bronzer – Perfect for all colour tones and ideal for contouring.BO5 - Deep Plum – Perfect for all skin tones.Ingredients: Ricinus Communis (Castor) Seed Oil, Caprylic/Capric Triglycerides, Copernicia Cerifera (Carnauba) Wax, Cetyl Alcohol, Hydrogenated Castor oil, Cetyl Palmitate, Beeswax, Sorbitan Palmitate, Sorbitan Olivate, Helianthus Annuus (Sunflower) Seed Oil, Rosmarinus officinalis (Rosemary) Leaf Extract, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid, Sorbic Acid, Tocopherol, Vanillin, May contain (+/-), Titanium Dioxide CI 77891, Iron Oxides CI 77491, Mica CI 77019, Red 7 Lake CI 15850, Yellow 5 Lake CI 19140, Red 27 Lake CI 45410, Red 30 Lake CI 73360, Blue 1 Lake CI 42090, Carmine CI 75470. *Contains natural Antioxidant Contains organic castor oil and Carnauba Wax ',
    rating: 2.3,
    category: 'cream',
    product_type: 'blush',
    tag_list: ['Canadian', 'Natural'],
    created_at: '2016-10-01T18:34:19.742Z',
    updated_at: '2017-12-23T21:08:40.672Z',
    product_api_url: 'https://makeup-api.herokuapp.com/api/v1/products/416.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/416/original/data?1514063320',
    product_colors: [
      {
        hex_value: '#cc7c7d',
        colour_name: 'BO1 - Dusty Rose ',
      },
      {
        hex_value: '#bf3938',
        colour_name: 'BO2 - Coral ',
      },
      {
        hex_value: '#e2707a',
        colour_name: 'BO3 - Bubble Gum Pink ',
      },
      {
        hex_value: '#a76b4f',
        colour_name: 'BO4 - Bronzer ',
      },
      {
        hex_value: '#7c3545',
        colour_name: 'BO5 - Deep Plum ',
      },
    ],
  },
  {
    id: 415,
    brand: 'physicians formula',
    name: 'Physicians Formula Super BB All-in-1 Beauty Balm Cheek & Lip in Berry Pink',
    price: '8.99',
    price_sign: null,
    currency: null,
    image_link:
      'https://d3t32hsnjxo7q6.cloudfront.net/i/468d19513d1f01f1e59806ccdd4222fe_ra,w158,h184_pa,w158,h184.jpg',
    product_link: 'https://well.ca/products/physicians-formula-super-bb-all-in-1_102736.html',
    website_link: 'https://well.ca',
    description:
      'Physicians Formula Super BB All-in-1 Beauty Balm Cheek & Lip in Berry Pink is a great mulch-purpose product to pop into your purse. Features: HypoallergenicParaben, Gluten & Fragrance freeNon-comedogenicDermatologist approvedDirections: Apply desired amount to cheeks & lips and blend with fingertip or brush.  Reapply as needed.Ingredients: Caprylic/Capric Triglyceride, Polyethylene, Silica, Dimethicone, Hydrogenated Polyisobutene, Phenylpropyldimethylsiloxysilicate, Octyldodecanol, Euphorbia Cerifera (Candelilla) Wax, Hydrogenated Coco-Glycerides, Propylene Glycol Ricinoleate, Copernicia Cerifera (Carnauba) Wax, Mica, Calcium Aluminum Borosilicate, Flavor, Perilla Ocymoides Seed Oil, Salix Alba (Willow) Bark Extract, BHT, Glycerin, Lysolecithin, Polysilicone-11, Tin Oxide, Tocopheryl Acetate, Triethoxycaprylylsilane, Water, Phenoxyethanol. May Contain: Titanium Dioxide, Orange 5 Lake, Red 6 Lake, Red 7 Lake, Red 28 Lake, Red 30 Lake.',
    rating: 4.0,
    category: 'cream',
    product_type: 'blush',
    tag_list: ['Gluten Free'],
    created_at: '2016-10-01T18:34:18.458Z',
    updated_at: '2017-12-23T21:08:40.580Z',
    product_api_url: 'https://makeup-api.herokuapp.com/api/v1/products/415.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/415/original/data?1514063320',
    product_colors: [],
  },
  {
    id: 414,
    brand: 'maybelline',
    name: 'Maybelline Dream Bouncy Blush',
    price: '11.99',
    price_sign: null,
    currency: null,
    image_link:
      'https://d3t32hsnjxo7q6.cloudfront.net/i/51eacb9efebbaee39399e65ffe3d9416_ra,w158,h184_pa,w158,h184.png',
    product_link: 'https://well.ca/products/maybelline-dream-bouncy-blush_50689.html',
    website_link: 'https://well.ca',
    description:
      'Now, blush has bounce! Freshest flush ever:• New bouncy texture is formulated with silicone elastomers• Lightweight like a powder, yet melts seamlessly into skin like a cream giving you a fresh flush• Dermatologist tested• Allergy tested• Non-comedogenic\n                    \n                    \n                    \n                        \n                        For best results: With your fingertips, blend a small amount of\n blush onto the apples of your cheeks, applying from your cheekbones to \nyour temples. To build colour intensity, apply more blush. \n                    ',
    rating: 4.5,
    category: 'cream',
    product_type: 'blush',
    tag_list: [],
    created_at: '2016-10-01T18:34:17.251Z',
    updated_at: '2017-12-23T21:08:40.418Z',
    product_api_url: 'https://makeup-api.herokuapp.com/api/v1/products/414.json',
    api_featured_image:
      '//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/414/original/open-uri20171223-4-cjvuw0?1514063320',
    product_colors: [
      {
        hex_value: '#ecc3d5',
        colour_name: 'Fresh Pink ',
      },
      {
        hex_value: '#ee9cb1',
        colour_name: 'Hot Tamale ',
      },
      {
        hex_value: '#ecbaba',
        colour_name: 'Peach Satin ',
      },
      {
        hex_value: '#c25159',
        colour_name: 'Plum Wine ',
      },
    ],
  },
];

const server = setupServer(
  rest.get(
    'https://makeup-api.herokuapp.com/api/v1/products.json?product_category=cream&product_type=blush',
    (req, res, ctx) => {
      return res(ctx.json(makeups));
    }
  )
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test.skip('renders loading for list', () => {
  render(<Makeups />);
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
});

test.skip('should render at least one item on list', async () => {
  render(<Makeups />);
  const listItem = await screen.findByText('glossier');
  expect(listItem).toBeInTheDocument();
});

test.skip('should render 12 items on first page', async () => {
  render(<Makeups />);
  const listItem = await screen.findAllByRole('heading');
  expect(listItem).toHaveLength(12);
});
