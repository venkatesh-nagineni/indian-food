export class ShopListTypes {
dishType: string;
dishItems: Array<Object>;
/* itemNo: number;
itemName: string;
itemShortDescription: string;
itemPrice: any;
itemDetailedDescription: Array<Object>; */
}

export class Angebotetypes {
  _id: string;
  AngeboteImg?: string;
  AngebotePrice: number;
  AngeboteName: string;
  AngeboteDesc?: string;
  AngeboteNo?: string;
}

export const shoppingList = [
  {
    dishType: 'VORSPEISEN',
    banner: '../assets/images/pizza_banner.png',
    dishItems: [
      {
        itemNo: 1,
        itemName: 'Pizza Salami',
        itemShortDescription: 'mariniertes im Tandoor gegrilltes',
        itemPrice: 7.5,
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: [
            {id: 1, name: 'Ø 26cm: 5,00 €', amount: 5.00},
            {id: 2, name: 'Ø 30cm: 6,00 €', amount: 6.00},
            {id: 3, name: 'Ø 36cm: 8,50 €', amount: 8.50},
            {id: 4, name: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {id: 1, name: 'ohne weitere zutat', amount: 0},
              {id: 2, name: 'mit Annanas (0,90 €)', amount: 0.90},
              {id: 3, name: 'mit Basillikum (1,80 €)', amount: 1.80},
              {id: 4, name: 'mit Currysause (1,50 €)', amount: 1.50},

            ]
        }
      },

      {
        itemNo: 2,
        itemName: 'Pizza Margherita',
        itemShortDescription: 'Vegetarische Kartoffeltaschen',
        itemPrice: 6.5,
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: [
            {id: 1, name: 'Ø 26cm: 5,00 €', amount: 5.00},
            {id: 2, name: 'Ø 30cm: 6,00 €', amount: 6.00},
            {id: 3, name: 'Ø 36cm: 8,50 €', amount: 8.50},
            {id: 4, name: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {id: 1, name: 'ohne weitere zutat', amount: 0},
              {id: 2, name: 'mit Annanas (0,90 €)', amount: 0.90},
              {id: 3, name: 'mit Basillikum (1,80 €)', amount: 1.80},
              {id: 4, name: 'mit Currysause (1,50 €)', amount: 1.50},

            ]
        }
      },

      {
        itemNo: 3,
        itemName: 'Pizza Boston',
        itemShortDescription: 'Salat der Saison',
        itemPrice: 8.5,
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: [
            {id: 1, name: 'Ø 26cm: 5,00 €', amount: 5.00},
            {id: 2, name: 'Ø 30cm: 6,00 €', amount: 6.00},
            {id: 3, name: 'Ø 36cm: 8,50 €', amount: 8.50},
            {id: 4, name: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {id: 1, name: 'ohne weitere zutat', amount: 0},
              {id: 2, name: 'mit Annanas (0,90 €)', amount: 0.90},
              {id: 3, name: 'mit Basillikum (1,80 €)', amount: 1.80},
              {id: 4, name: 'mit Currysause (1,50 €)', amount: 1.50},

            ]
        }
      },

      {
        itemNo: 4,
        itemName: 'Pizza Chemnitz',
        itemShortDescription: 'Paanipoori der Saison',
        itemPrice: 9.5,
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: [
            {id: 1, name: 'Ø 26cm: 5,00 €', amount: 5.00},
            {id: 2, name: 'Ø 30cm: 6,00 €', amount: 6.00},
            {id: 3, name: 'Ø 36cm: 8,50 €', amount: 8.50},
            {id: 4, name: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {id: 1, name: 'ohne weitere zutat', amount: 0},
              {id: 2, name: 'mit Annanas (0,90 €)', amount: 0.90},
              {id: 3, name: 'mit Basillikum (1,80 €)', amount: 1.80},
              {id: 4, name: 'mit Currysause (1,50 €)', amount: 1.50},
            ]
        }
      }
    ]
  },

  {
    dishType: 'SUPPEN',
    banner: '../assets/images/supen_banner.png',
    dishItems: [
      {
        itemNo: 5,
        itemName: 'Pizza Salami',
        itemShortDescription: 'mariniertes im Tandoor gegrilltes',
        itemPrice: 7.5,
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: [
            {id: 1, name: 'Ø 26cm: 5,00 €', amount: 5.00},
            {id: 2, name: 'Ø 30cm: 6,00 €', amount: 6.00},
            {id: 3, name: 'Ø 36cm: 8,50 €', amount: 8.50},
            {id: 4, name: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {id: 1, name: 'ohne weitere zutat', amount: 0},
              {id: 2, name: 'mit Annanas (0,90 €)', amount: 0.90},
              {id: 3, name: 'mit Basillikum (1,80 €)', amount: 1.80},
              {id: 4, name: 'mit Currysause (1,50 €)', amount: 1.50},
            ]
        }
      },

      {
        itemNo: 6,
        itemName: 'Pizza Margherita',
        itemShortDescription: 'Vegetarische Kartoffeltaschen',
        itemPrice: 6.5,
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: [
            {id: 1, name: 'Ø 26cm: 5,00 €', amount: 5.00},
            {id: 2, name: 'Ø 30cm: 6,00 €', amount: 6.00},
            {id: 3, name: 'Ø 36cm: 8,50 €', amount: 8.50},
            {id: 4, name: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {id: 1, name: 'ohne weitere zutat', amount: 0},
              {id: 2, name: 'mit Annanas (0,90 €)', amount: 0.90},
              {id: 3, name: 'mit Basillikum (1,80 €)', amount: 1.80},
              {id: 4, name: 'mit Currysause (1,50 €)', amount: 1.50},
            ]
        }
      },

      {
        itemNo: 7,
        itemName: 'Pizza Boston',
        itemShortDescription: 'Salat der Saison',
        itemPrice: 8.5,
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: [
            {id: 1, name: 'Ø 26cm: 5,00 €', amount: 5.00},
            {id: 2, name: 'Ø 30cm: 6,00 €', amount: 6.00},
            {id: 3, name: 'Ø 36cm: 8,50 €', amount: 8.50},
            {id: 4, name: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {id: 1, name: 'ohne weitere zutat', amount: 0},
              {id: 2, name: 'mit Annanas (0,90 €)', amount: 0.90},
              {id: 3, name: 'mit Basillikum (1,80 €)', amount: 1.80},
              {id: 4, name: 'mit Currysause (1,50 €)', amount: 1.50},
            ]
        }
      },

      {
        itemNo: 8,
        itemName: 'Pizza Chemnitz',
        itemShortDescription: 'Paanipoori der Saison',
        itemPrice: 9.5,
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: [
            {id: 1, name: 'Ø 26cm: 5,00 €', amount: 5.00},
            {id: 2, name: 'Ø 30cm: 6,00 €', amount: 6.00},
            {id: 3, name: 'Ø 36cm: 8,50 €', amount: 8.50},
            {id: 4, name: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {id: 1, name: 'ohne weitere zutat', amount: 0},
              {id: 2, name: 'mit Annanas (0,90 €)', amount: 0.90},
              {id: 3, name: 'mit Basillikum (1,80 €)', amount: 1.80},
              {id: 4, name: 'mit Currysause (1,50 €)', amount: 1.50},
            ]
        }
      }
    ]
  },

  {
    dishType: 'SALATE',
    banner: '../assets/images/salat_banner.png',
    dishItems: [
      {
        itemNo: 9,
        itemName: 'Pizza Salami',
        itemShortDescription: 'mariniertes im Tandoor gegrilltes',
        itemPrice: 7.5,
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: [
            {id: 1, name: 'Ø 26cm: 5,00 €', amount: 5.00},
            {id: 2, name: 'Ø 30cm: 6,00 €', amount: 6.00},
            {id: 3, name: 'Ø 36cm: 8,50 €', amount: 8.50},
            {id: 4, name: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {id: 1, name: 'ohne weitere zutat', amount: 0},
              {id: 2, name: 'mit Annanas (0,90 €)', amount: 0.90},
              {id: 3, name: 'mit Basillikum (1,80 €)', amount: 1.80},
              {id: 4, name: 'mit Currysause (1,50 €)', amount: 1.50},
            ]
        }
      },

      {
        itemNo: 10,
        itemName: 'Pizza Margherita',
        itemShortDescription: 'Vegetarische Kartoffeltaschen',
        itemPrice: 6.5,
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: [
            {id: 1, name: 'Ø 26cm: 5,00 €', amount: 5.00},
            {id: 2, name: 'Ø 30cm: 6,00 €', amount: 6.00},
            {id: 3, name: 'Ø 36cm: 8,50 €', amount: 8.50},
            {id: 4, name: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {id: 1, name: 'ohne weitere zutat', amount: 0},
              {id: 2, name: 'mit Annanas (0,90 €)', amount: 0.90},
              {id: 3, name: 'mit Basillikum (1,80 €)', amount: 1.80},
              {id: 4, name: 'mit Currysause (1,50 €)', amount: 1.50},
            ]
        }
      },

      {
        itemNo: 11,
        itemName: 'Pizza Boston',
        itemShortDescription: 'Salat der Saison',
        itemPrice: 8.5,
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: [
            {id: 1, name: 'Ø 26cm: 5,00 €', amount: 5.00},
            {id: 2, name: 'Ø 30cm: 6,00 €', amount: 6.00},
            {id: 3, name: 'Ø 36cm: 8,50 €', amount: 8.50},
            {id: 4, name: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {id: 1, name: 'ohne weitere zutat', amount: 0},
              {id: 2, name: 'mit Annanas (0,90 €)', amount: 0.90},
              {id: 3, name: 'mit Basillikum (1,80 €)', amount: 1.80},
              {id: 4, name: 'mit Currysause (1,50 €)', amount: 1.50},
            ]
        }
      },

      {
        itemNo: 12,
        itemName: 'Pizza Chemnitz',
        itemShortDescription: 'Paanipoori der Saison',
        itemPrice: 9.5,
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: [
            {id: 1, name: 'Ø 26cm: 5,00 €', amount: 5.00},
            {id: 2, name: 'Ø 30cm: 6,00 €', amount: 6.00},
            {id: 3, name: 'Ø 36cm: 8,50 €', amount: 8.50},
            {id: 4, name: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {id: 1, name: 'ohne weitere zutat', amount: 0},
              {id: 2, name: 'mit Annanas (0,90 €)', amount: 0.90},
              {id: 3, name: 'mit Basillikum (1,80 €)', amount: 1.80},
              {id: 4, name: 'mit Currysause (1,50 €)', amount: 1.50},
            ]
        }
      }
    ]
  },
  {
    dishType: 'Pizza Die Besteller',
    banner: '../assets/images/besteller_banner.png',
    dishItems: [
      {
        itemNo: 13,
        itemName: 'Pizza Salami',
        itemShortDescription: 'mariniertes im Tandoor gegrilltes',
        itemPrice: 7.5,
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: [
            {id: 1, name: 'Ø 26cm: 5,00 €', amount: 5.00},
            {id: 2, name: 'Ø 30cm: 6,00 €', amount: 6.00},
            {id: 3, name: 'Ø 36cm: 8,50 €', amount: 8.50},
            {id: 4, name: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {id: 1, name: 'ohne weitere zutat', amount: 0},
              {id: 2, name: 'mit Annanas (0,90 €)', amount: 0.90},
              {id: 3, name: 'mit Basillikum (1,80 €)', amount: 1.80},
              {id: 4, name: 'mit Currysause (1,50 €)', amount: 1.50},
            ]
        }
      },

      {
        itemNo: 14,
        itemName: 'Pizza Margherita',
        itemShortDescription: 'Vegetarische Kartoffeltaschen',
        itemPrice: 6.5,
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: [
            {id: 1, name: 'Ø 26cm: 5,00 €', amount: 5.00},
            {id: 2, name: 'Ø 30cm: 6,00 €', amount: 6.00},
            {id: 3, name: 'Ø 36cm: 8,50 €', amount: 8.50},
            {id: 4, name: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {id: 1, name: 'ohne weitere zutat', amount: 0},
              {id: 2, name: 'mit Annanas (0,90 €)', amount: 0.90},
              {id: 3, name: 'mit Basillikum (1,80 €)', amount: 1.80},
              {id: 4, name: 'mit Currysause (1,50 €)', amount: 1.50},
            ]
        }
      },

      {
        itemNo: 15,
        itemName: 'Pizza Boston',
        itemShortDescription: 'Salat der Saison',
        itemPrice: 8.5,
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: [
            {id: 1, name: 'Ø 26cm: 5,00 €', amount: 5.00},
            {id: 2, name: 'Ø 30cm: 6,00 €', amount: 6.00},
            {id: 3, name: 'Ø 36cm: 8,50 €', amount: 8.50},
            {id: 4, name: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {id: 1, name: 'ohne weitere zutat', amount: 0},
              {id: 2, name: 'mit Annanas (0,90 €)', amount: 0.90},
              {id: 3, name: 'mit Basillikum (1,80 €)', amount: 1.80},
              {id: 4, name: 'mit Currysause (1,50 €)', amount: 1.50},
            ]
        }
      },

      {
        itemNo: 16,
        itemName: 'Pizza Chemnitz',
        itemShortDescription: 'Paanipoori der Saison',
        itemPrice: 9.5,
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
        itemExtraOptionsizes: {
          itemPlaceholderName: 'Pizza Name',
          sizes: [
            {id: 1, name: 'Ø 26cm: 5,00 €', amount: 5.00},
            {id: 2, name: 'Ø 30cm: 6,00 €', amount: 6.00},
            {id: 3, name: 'Ø 36cm: 8,50 €', amount: 8.50},
            {id: 4, name: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {id: 1, name: 'ohne weitere zutat', amount: 0},
              {id: 2, name: 'mit Annanas (0,90 €)', amount: 0.90},
              {id: 3, name: 'mit Basillikum (1,80 €)', amount: 1.80},
              {id: 4, name: 'mit Currysause (1,50 €)', amount: 1.50},
            ]
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
