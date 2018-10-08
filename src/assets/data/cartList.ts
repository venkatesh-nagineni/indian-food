export class ShopListTypes {
dishType: string;
dishItems: Array<Object>;
/* itemNo: number;
itemName: string;
itemShortDescription: string;
itemPrice: any;
itemDetailedDescription: Array<Object>; */
}


export const shoppingList = [
  {
    dishType: 'VORSPEISEN',
    dishItems: [
      {
        itemNo: 1,
        itemName: 'Chicken Tikka',
        itemShortDescription: 'mariniertes im Tandoor gegrilltes',
        itemPrice: 7.5,
        imgSrc: '../assets/images/chicken.jpg',
        itemDetailedDescription: [
          {
            ingredients: 'Enthält Erdnüsse/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          }
        ],
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: ['Ø 26cm: 5,00 €', 'Ø 30cm: 6,00 €', 'Ø 36cm: 8,50 €', '34x46cm: 12,50 €']
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: ['ohne weitere zutat', 'mit Brocolli (0,80 €)', 'mit Annanas (0,80 €)', 'mit Basillikum (0,80 €)', 'mit Currysause (0,80 €)']
        }

      },

      {
        itemNo: 2,
        itemName: 'Samosa',
        itemShortDescription: 'Vegetarische Kartoffeltaschen',
        itemPrice: 6.5,
        imgSrc: '../assets/images/samosa.jpg',
        itemDetailedDescription: [
          {
            ingredients: 'Enthält Erdnüsse/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          }
        ],
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: ['Ø 26cm: 5,00 €', 'Ø 30cm: 6,00 €', 'Ø 36cm: 8,50 €', '34x46cm: 12,50 €']
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: ['ohne weitere zutat', 'mit Brocolli (0,80 €)', 'mit Annanas (0,80 €)', 'mit Basillikum (0,80 €)', 'mit Currysause (0,80 €)']
        }
      },

      {
        itemNo: 3,
        itemName: 'Salat',
        itemShortDescription: 'Salat der Saison',
        itemPrice: 8.5,
        imgSrc: '../assets/images/salat.jpg',
        itemDetailedDescription: [
          {
            ingredients: 'Enthält Erdnüsse/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          }
        ],
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: ['Ø 26cm: 5,00 €', 'Ø 30cm: 6,00 €', 'Ø 36cm: 8,50 €', '34x46cm: 12,50 €']
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: ['ohne weitere zutat', 'mit Brocolli (0,80 €)', 'mit Annanas (0,80 €)', 'mit Basillikum (0,80 €)', 'mit Currysause (0,80 €)']
        }
      },

      {
        itemNo: 4,
        itemName: 'Paanipoori',
        itemShortDescription: 'Paanipoori der Saison',
        itemPrice: 9.5,
        imgSrc: '../assets/images/paanipoori.jpg',
        itemDetailedDescription: [
          {
            ingredients: 'Enthält Erdnüsse/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          }
        ],
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: ['Ø 26cm: 5,00 €', 'Ø 30cm: 6,00 €', 'Ø 36cm: 8,50 €', '34x46cm: 12,50 €']
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: ['ohne weitere zutat', 'mit Brocolli (0,80 €)', 'mit Annanas (0,80 €)', 'mit Basillikum (0,80 €)', 'mit Currysause (0,80 €)']
        }
      }
    ]
  },

  {
    dishType: 'SUPPEN',
    dishItems: [
      {
        itemNo: 5,
        itemName: 'Chicken Tikka',
        itemShortDescription: 'mariniertes im Tandoor gegrilltes',
        itemPrice: 7.5,
        imgSrc: '../assets/images/chicken.jpg',
        itemDetailedDescription: [
          {
            ingredients: 'Enthält Erdnüsse/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          }
        ],
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: ['Ø 26cm: 5,00 €', 'Ø 30cm: 6,00 €', 'Ø 36cm: 8,50 €', '34x46cm: 12,50 €']
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: ['ohne weitere zutat', 'mit Brocolli (0,80 €)', 'mit Annanas (0,80 €)', 'mit Basillikum (0,80 €)', 'mit Currysause (0,80 €)']
        }
      },

      {
        itemNo: 6,
        itemName: 'Samosa',
        itemShortDescription: 'Vegetarische Kartoffeltaschen',
        itemPrice: 7.5,
        imgSrc: '../assets/images/samosa.jpg',
        itemDetailedDescription: [
          {
            ingredients: 'Enthält Erdnüsse/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          }
        ],
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: ['Ø 26cm: 5,00 €', 'Ø 30cm: 6,00 €', 'Ø 36cm: 8,50 €', '34x46cm: 12,50 €']
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: ['ohne weitere zutat', 'mit Brocolli (0,80 €)', 'mit Annanas (0,80 €)', 'mit Basillikum (0,80 €)', 'mit Currysause (0,80 €)']
        }
      },

      {
        itemNo: 7,
        itemName: 'Salat',
        itemShortDescription: 'Salat der Saison',
        itemPrice: 7.5,
        imgSrc: '../assets/images/salat.jpg',
        itemDetailedDescription: [
          {
            ingredients: 'Enthält Erdnüsse/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          }
        ],
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: ['Ø 26cm: 5,00 €', 'Ø 30cm: 6,00 €', 'Ø 36cm: 8,50 €', '34x46cm: 12,50 €']
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: ['ohne weitere zutat', 'mit Brocolli (0,80 €)', 'mit Annanas (0,80 €)', 'mit Basillikum (0,80 €)', 'mit Currysause (0,80 €)']
        }
      },

      {
        itemNo: 8,
        itemName: 'Paanipoori',
        itemShortDescription: 'Paanipoori der Saison',
        itemPrice: 7.5,
        imgSrc: '../assets/images/paanipoori.jpg',
        itemDetailedDescription: [
          {
            ingredients: 'Enthält Erdnüsse/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          }
        ],
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: ['Ø 26cm: 5,00 €', 'Ø 30cm: 6,00 €', 'Ø 36cm: 8,50 €', '34x46cm: 12,50 €']
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: ['ohne weitere zutat', 'mit Brocolli (0,80 €)', 'mit Annanas (0,80 €)', 'mit Basillikum (0,80 €)', 'mit Currysause (0,80 €)']
        }
      },
    ]
  },

  {
    dishType: 'SALATE',
    dishItems: [
      {
        itemNo: 9,
        itemName: 'Chicken Tikka',
        itemShortDescription: 'mariniertes im Tandoor gegrilltes',
        itemPrice: 7.5,
        imgSrc: '../assets/images/chicken.jpg',
        itemDetailedDescription: [
          {
            ingredients: 'Enthält Erdnüsse/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          }
        ],
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: ['Ø 26cm: 5,00 €', 'Ø 30cm: 6,00 €', 'Ø 36cm: 8,50 €', '34x46cm: 12,50 €']
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: ['ohne weitere zutat', 'mit Brocolli (0,80 €)', 'mit Annanas (0,80 €)', 'mit Basillikum (0,80 €)', 'mit Currysause (0,80 €)']
        }
      },

      {
        itemNo: 10,
        itemName: 'Samosa',
        itemShortDescription: 'Vegetarische Kartoffeltaschen',
        itemPrice: 7.5,
        imgSrc: '../assets/images/samosa.jpg',
        itemDetailedDescription: [
          {
            ingredients: 'Enthält Erdnüsse/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          }
        ],
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: ['Ø 26cm: 5,00 €', 'Ø 30cm: 6,00 €', 'Ø 36cm: 8,50 €', '34x46cm: 12,50 €']
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: ['ohne weitere zutat', 'mit Brocolli (0,80 €)', 'mit Annanas (0,80 €)', 'mit Basillikum (0,80 €)', 'mit Currysause (0,80 €)']
        }
      },

      {
        itemNo: 11,
        itemName: 'Salat',
        itemShortDescription: 'Salat der Saison',
        itemPrice: 7.5,
        imgSrc: '../assets/images/salat.jpg',
        itemDetailedDescription: [
          {
            ingredients: 'Enthält Erdnüsse/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          }
        ],
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: ['Ø 26cm: 5,00 €', 'Ø 30cm: 6,00 €', 'Ø 36cm: 8,50 €', '34x46cm: 12,50 €']
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: ['ohne weitere zutat', 'mit Brocolli (0,80 €)', 'mit Annanas (0,80 €)', 'mit Basillikum (0,80 €)', 'mit Currysause (0,80 €)']
        }
      },

      {
        itemNo: 12,
        itemName: 'Paanipoori',
        itemShortDescription: 'Paanipoori der Saison',
        itemPrice: 7.5,
        imgSrc: '../assets/images/paanipoori.jpg',
        itemDetailedDescription: [
          {
            ingredients: 'Enthält Erdnüsse/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          },
          {
            ingredients: 'Enthält Sojabohnen/-Erzeugnisse',
          }
        ],
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: ['Ø 26cm: 5,00 €', 'Ø 30cm: 6,00 €', 'Ø 36cm: 8,50 €', '34x46cm: 12,50 €']
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: ['ohne weitere zutat', 'mit Brocolli (0,80 €)', 'mit Annanas (0,80 €)', 'mit Basillikum (0,80 €)', 'mit Currysause (0,80 €)']
        }
      }
    ]
  }

];

/* export class Product {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

 public products: Product[] = [
  new Product(1, "Product 001"),
  new Product(2, "Product 002"),

];  */
