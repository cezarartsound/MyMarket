import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { HTTP_OK } from '../statusCodes';
import { routes } from '../routes';
import { HomePageModel } from '../../models/HomePageModel';
import { Product } from '../../models/Product';
import { Merchant } from '../../models/Merchant';

const products: Product[] = [
  {
    "id": 0,
    "merchantId": 3,
    "name": "Pescada ultracongelada",
    "description": "Embalagem 1 kg",
    "category": {
      "name": "Comida",
      "subCategories": [
        {
          "name": "Peixe",
          "subCategories": []
        }
      ]
    },
    "imageUrl": "https://lh3.googleusercontent.com/proxy/S4QKbPT8BSuyRkzocMaOvA8zK-0G1Iw0-vZw85f3jhOSJSCrgJ-0_WW0-6OlHS5Bslthm2AGIAuviMW0NVMbe_aQNnYxmgTWmYAXWlkNQdTMETHvKxHf_wcu5r3p",
    "price": 5.0,
    "priceFormatted": "5.00 €"
  },
  {
    "id": 1,
    "merchantId": 3,
    "name": "Pescada ultracongelada",
    "description": "Embalagem 1 kg",
    "category": {
      "name": "Comida",
      "subCategories": [
        {
          "name": "Peixe",
          "subCategories": []
        }
      ]
    },
    "imageUrl": "https://lh3.googleusercontent.com/proxy/S4QKbPT8BSuyRkzocMaOvA8zK-0G1Iw0-vZw85f3jhOSJSCrgJ-0_WW0-6OlHS5Bslthm2AGIAuviMW0NVMbe_aQNnYxmgTWmYAXWlkNQdTMETHvKxHf_wcu5r3p",
    "price": 5.0,
    "priceFormatted": "5.00 €"
  },
  {
    "id": 2,
    "merchantId": 2,
    "name": "Vestido branco e dourado",
    "description": "Ou será azul e preto",
    "category": {
      "name": "Mulher",
      "subCategories": []
    },
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/The_Dress_%28viral_phenomenon%29.png/220px-The_Dress_%28viral_phenomenon%29.png",
    "price": 53.0,
    "priceFormatted": "53.00 €"
  },
  {
    "id": 3,
    "merchantId": 2,
    "name": "Vestido branco e dourado",
    "description": "Ou será azul e preto",
    "category": {
      "name": "Mulher",
      "subCategories": []
    },
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/The_Dress_%28viral_phenomenon%29.png/220px-The_Dress_%28viral_phenomenon%29.png",
    "price": 53.0,
    "priceFormatted": "53.00 €"
  },
  {
    "id": 4,
    "merchantId": 2,
    "name": "Vestido branco e dourado",
    "description": "Ou será azul e preto",
    "category": {
      "name": "Mulher",
      "subCategories": []
    },
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/The_Dress_%28viral_phenomenon%29.png/220px-The_Dress_%28viral_phenomenon%29.png",
    "price": 53.0,
    "priceFormatted": "53.00 €"
  },
  {
    "id": 5,
    "merchantId": 2,
    "name": "Vestido branco e dourado",
    "description": "Ou será azul e preto",
    "category": {
      "name": "Mulher",
      "subCategories": []
    },
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/The_Dress_%28viral_phenomenon%29.png/220px-The_Dress_%28viral_phenomenon%29.png",
    "price": 53.0,
    "priceFormatted": "53.00 €"
  },
  {
    "id": 6,
    "merchantId": 2,
    "name": "Vestido branco e dourado",
    "description": "Ou será azul e preto",
    "category": {
      "name": "Mulher",
      "subCategories": []
    },
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/The_Dress_%28viral_phenomenon%29.png/220px-The_Dress_%28viral_phenomenon%29.png",
    "price": 53.0,
    "priceFormatted": "53.00 €"
  },
];

const merchants: Merchant[] = [
  {
    "id": 1,
    "name": "SMS",
    "logoImageUrl": "https://cdn.freebiesupply.com/logos/large/2x/sms-2-logo-png-transparent.png",
    "sector": "Roupa",
    "categories": [
      {
        "name": "Criança",
        "subCategories": []
      },
      {
        "name": "Mulher",
        "subCategories": []
      },
      {
        "name": "Homem",
        "subCategories": []
      }
    ]
  },
  {
    "id": 2,
    "name": "Zara",
    "logoImageUrl": "https://fashionunited.com.br/QZEAEu9tsKqLQzeU9WiGAoQShbgf_jdys1xcb_LyPTQ/gravity:sm/quality:70/aHR0cHM6Ly9zdGF0aWMuZmFzaGlvbnVuaXRlZC5jb20vMjAxOTAxLzR6YXJhLWxvZ28taW5kaXRleC0xLmpwZw",
    "sector": "Roupa",
    "categories": [
      {
        "name": "Criança",
        "subCategories": []
      },
      {
        "name": "Mulher",
        "subCategories": []
      },
      {
        "name": "Homem",
        "subCategories": []
      }
    ]
  },
  {
    "id": 3,
    "name": "Pingo Doce",
    "logoImageUrl": "https://lh3.googleusercontent.com/UFspMMAyCo3AVUfade27KLvbuHfjt4LSGQhE7ntcNGRu4a5SAN9VK0DF9jcoUiHMhkI",
    "sector": "Supermercado",
    "categories": [
      {
        "name": "Comida",
        "subCategories": [
          {
            "name": "Enlatados",
            "subCategories": []
          },
          {
            "name": "Carne",
            "subCategories": []
          },
          {
            "name": "Peixe",
            "subCategories": []
          }
        ]
      },
      {
        "name": "Higiene",
        "subCategories": []
      },
      {
        "name": "Brinquedos",
        "subCategories": []
      }
    ]
  }
];

export const configureAjax = () => {

  const mock = new MockAdapter(axios, { delayResponse: 200 });

  const emptyHeaders = {};

  // Add the ajax mocks here.

  mock.onGet('/').reply(_ => {
      return [HTTP_OK, {}, emptyHeaders];
  });

  for(var i=products.length ; i<100 ; i+=products.length){
    mock.onGet(routes.getHomePageProducts(i)).reply(_ => ([
      HTTP_OK,
      products.map(p => ({
        ...p, 
        id: i+p.id,
      })),
      emptyHeaders,
    ]))
  }

  mock.onGet(routes.getHomeData()).reply(_ => {
      var data: HomePageModel = {
          "highlightItems": [
            {
              "caption": "Promoção da semana!",
              "description": "Peixe ultracongelado",
              "imageUrl": "https://www.portalcascais.pt/wp-content/uploads/2020/02/Pingo-Doce.jpg",
              "redirectUrl": "merchants/3/comida/peixe"
            }
          ],
          "homepageProducts": products,
          "merchants": merchants,
        };
      return [
          HTTP_OK, 
          data,
          emptyHeaders,
      ];
  });
};

export default configureAjax;