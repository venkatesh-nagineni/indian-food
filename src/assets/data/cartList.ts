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
        itemName: 'Pizza Salami',
        itemShortDescription: 'mariniertes im Tandoor gegrilltes',
        itemPrice: 7.5,
        imgSrc: '../assets/images/pizza1.png',
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
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
          sizes: [
            {value: 'Ø 26cm: 5,00 €', amount: 5.00},
            {value: 'Ø 30cm: 6,00 €', amount: 6.00},
            {value: 'Ø 36cm: 8,50 €', amount: 8.50},
            {value: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {value: 'ohne weitere zutat', amount: 0},
              {value: 'mit Annanas (0,80 €)', amount: 0.80},
              {value: 'mit Basillikum (0,80 €)', amount: 0.80},
              {value: 'mit Currysause (0,80 €)', amount: 0.80},

            ]
        }
      },

      {
        itemNo: 2,
        itemName: 'Pizza Margherita',
        itemShortDescription: 'Vegetarische Kartoffeltaschen',
        itemPrice: 6.5,
        imgSrc: '../assets/images/pizza2.png',
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
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
          sizes: [
            {value: 'Ø 26cm: 5,00 €', amount: 5.00},
            {value: 'Ø 30cm: 6,00 €', amount: 6.00},
            {value: 'Ø 36cm: 8,50 €', amount: 8.50},
            {value: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {value: 'ohne weitere zutat', amount: 0},
              {value: 'mit Annanas (0,80 €)', amount: 0.80},
              {value: 'mit Basillikum (0,80 €)', amount: 0.80},
              {value: 'mit Currysause (0,80 €)', amount: 0.80},

            ]
        }
      },

      {
        itemNo: 3,
        itemName: 'Pizza Boston',
        itemShortDescription: 'Salat der Saison',
        itemPrice: 8.5,
        imgSrc: '../assets/images/pizza3.png',
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
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
          sizes: [
            {value: 'Ø 26cm: 5,00 €', amount: 5.00},
            {value: 'Ø 30cm: 6,00 €', amount: 6.00},
            {value: 'Ø 36cm: 8,50 €', amount: 8.50},
            {value: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {value: 'ohne weitere zutat', amount: 0},
              {value: 'mit Annanas (0,80 €)', amount: 0.80},
              {value: 'mit Basillikum (0,80 €)', amount: 0.80},
              {value: 'mit Currysause (0,80 €)', amount: 0.80},

            ]
        }
      },

      {
        itemNo: 4,
        itemName: 'Pizza Chemnitz',
        itemShortDescription: 'Paanipoori der Saison',
        itemPrice: 9.5,
        imgSrc: '../assets/images/pizza4.png',
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
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
          sizes: [
            {value: 'Ø 26cm: 5,00 €', amount: 5.00},
            {value: 'Ø 30cm: 6,00 €', amount: 6.00},
            {value: 'Ø 36cm: 8,50 €', amount: 8.50},
            {value: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {value: 'ohne weitere zutat', amount: 0},
              {value: 'mit Annanas (0,80 €)', amount: 0.80},
              {value: 'mit Basillikum (0,80 €)', amount: 0.80},
              {value: 'mit Currysause (0,80 €)', amount: 0.80},

            ]
        }
      }
    ]
  },

  {
    dishType: 'SUPPEN',
    dishItems: [
      {
        itemNo: 5,
        itemName: 'Pizza Salami',
        itemShortDescription: 'mariniertes im Tandoor gegrilltes',
        itemPrice: 7.5,
        imgSrc: '../assets/images/pizza1.png',
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
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
          sizes: [
            {value: 'Ø 26cm: 5,00 €', amount: 5.00},
            {value: 'Ø 30cm: 6,00 €', amount: 6.00},
            {value: 'Ø 36cm: 8,50 €', amount: 8.50},
            {value: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {value: 'ohne weitere zutat', amount: 0},
              {value: 'mit Annanas (0,80 €)', amount: 0.80},
              {value: 'mit Basillikum (0,80 €)', amount: 0.80},
              {value: 'mit Currysause (0,80 €)', amount: 0.80},

            ]
        }
      },

      {
        itemNo: 6,
        itemName: 'Pizza Margherita',
        itemShortDescription: 'Vegetarische Kartoffeltaschen',
        itemPrice: 6.5,
        imgSrc: '../assets/images/pizza2.png',
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
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
          sizes: [
            {value: 'Ø 26cm: 5,00 €', amount: 5.00},
            {value: 'Ø 30cm: 6,00 €', amount: 6.00},
            {value: 'Ø 36cm: 8,50 €', amount: 8.50},
            {value: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {value: 'ohne weitere zutat', amount: 0},
              {value: 'mit Annanas (0,80 €)', amount: 0.80},
              {value: 'mit Basillikum (0,80 €)', amount: 0.80},
              {value: 'mit Currysause (0,80 €)', amount: 0.80},

            ]
        }
      },

      {
        itemNo: 7,
        itemName: 'Pizza Boston',
        itemShortDescription: 'Salat der Saison',
        itemPrice: 8.5,
        imgSrc: '../assets/images/pizza3.png',
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
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
          sizes: [
            {value: 'Ø 26cm: 5,00 €', amount: 5.00},
            {value: 'Ø 30cm: 6,00 €', amount: 6.00},
            {value: 'Ø 36cm: 8,50 €', amount: 8.50},
            {value: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {value: 'ohne weitere zutat', amount: 0},
              {value: 'mit Annanas (0,80 €)', amount: 0.80},
              {value: 'mit Basillikum (0,80 €)', amount: 0.80},
              {value: 'mit Currysause (0,80 €)', amount: 0.80},

            ]
        }
      },

      {
        itemNo: 8,
        itemName: 'Pizza Chemnitz',
        itemShortDescription: 'Paanipoori der Saison',
        itemPrice: 9.5,
        imgSrc: '../assets/images/pizza4.png',
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
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
          sizes: [
            {value: 'Ø 26cm: 5,00 €', amount: 5.00},
            {value: 'Ø 30cm: 6,00 €', amount: 6.00},
            {value: 'Ø 36cm: 8,50 €', amount: 8.50},
            {value: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {value: 'ohne weitere zutat', amount: 0},
              {value: 'mit Annanas (0,80 €)', amount: 0.80},
              {value: 'mit Basillikum (0,80 €)', amount: 0.80},
              {value: 'mit Currysause (0,80 €)', amount: 0.80},

            ]
        }
      }
    ]
  },

  {
    dishType: 'SALATE',
    dishItems: [
      {
        itemNo: 9,
        itemName: 'Pizza Salami',
        itemShortDescription: 'mariniertes im Tandoor gegrilltes',
        itemPrice: 7.5,
        imgSrc: '../assets/images/pizza1.png',
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
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
          sizes: [
            {value: 'Ø 26cm: 5,00 €', amount: 5.00},
            {value: 'Ø 30cm: 6,00 €', amount: 6.00},
            {value: 'Ø 36cm: 8,50 €', amount: 8.50},
            {value: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {value: 'ohne weitere zutat', amount: 0},
              {value: 'mit Annanas (0,80 €)', amount: 0.80},
              {value: 'mit Basillikum (0,80 €)', amount: 0.80},
              {value: 'mit Currysause (0,80 €)', amount: 0.80},

            ]
        }
      },

      {
        itemNo: 10,
        itemName: 'Pizza Margherita',
        itemShortDescription: 'Vegetarische Kartoffeltaschen',
        itemPrice: 6.5,
        imgSrc: '../assets/images/pizza2.png',
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
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
          sizes: [
            {value: 'Ø 26cm: 5,00 €', amount: 5.00},
            {value: 'Ø 30cm: 6,00 €', amount: 6.00},
            {value: 'Ø 36cm: 8,50 €', amount: 8.50},
            {value: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {value: 'ohne weitere zutat', amount: 0},
              {value: 'mit Annanas (0,80 €)', amount: 0.80},
              {value: 'mit Basillikum (0,80 €)', amount: 0.80},
              {value: 'mit Currysause (0,80 €)', amount: 0.80},

            ]
        }
      },

      {
        itemNo: 11,
        itemName: 'Pizza Boston',
        itemShortDescription: 'Salat der Saison',
        itemPrice: 8.5,
        imgSrc: '../assets/images/pizza3.png',
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
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
          sizes: [
            {value: 'Ø 26cm: 5,00 €', amount: 5.00},
            {value: 'Ø 30cm: 6,00 €', amount: 6.00},
            {value: 'Ø 36cm: 8,50 €', amount: 8.50},
            {value: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {value: 'ohne weitere zutat', amount: 0},
              {value: 'mit Annanas (0,80 €)', amount: 0.80},
              {value: 'mit Basillikum (0,80 €)', amount: 0.80},
              {value: 'mit Currysause (0,80 €)', amount: 0.80},

            ]
        }
      },

      {
        itemNo: 12,
        itemName: 'Pizza Chemnitz',
        itemShortDescription: 'Paanipoori der Saison',
        itemPrice: 9.5,
        imgSrc: '../assets/images/pizza4.png',
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
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
          sizes: [
            {value: 'Ø 26cm: 5,00 €', amount: 5.00},
            {value: 'Ø 30cm: 6,00 €', amount: 6.00},
            {value: 'Ø 36cm: 8,50 €', amount: 8.50},
            {value: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {value: 'ohne weitere zutat', amount: 0},
              {value: 'mit Annanas (0,80 €)', amount: 0.80},
              {value: 'mit Basillikum (0,80 €)', amount: 0.80},
              {value: 'mit Currysause (0,80 €)', amount: 0.80},

            ]
        }
      }
    ]
  },
  {
    dishType: 'Pizza Die Besteller',
    dishItems: [
      {
        itemNo: 10,
        itemName: 'Pizza Salami',
        itemShortDescription: 'mariniertes im Tandoor gegrilltes',
        itemPrice: 7.5,
        imgSrc: '../assets/images/pizza1.png',
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
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
          sizes: [
            {value: 'Ø 26cm: 5,00 €', amount: 5.00},
            {value: 'Ø 30cm: 6,00 €', amount: 6.00},
            {value: 'Ø 36cm: 8,50 €', amount: 8.50},
            {value: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {value: 'ohne weitere zutat', amount: 0},
              {value: 'mit Annanas (0,80 €)', amount: 0.80},
              {value: 'mit Basillikum (0,80 €)', amount: 0.80},
              {value: 'mit Currysause (0,80 €)', amount: 0.80},

            ]
        }
      },

      {
        itemNo: 11,
        itemName: 'Pizza Margherita',
        itemShortDescription: 'Vegetarische Kartoffeltaschen',
        itemPrice: 6.5,
        imgSrc: '../assets/images/pizza2.png',
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
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
          sizes: [
            {value: 'Ø 26cm: 5,00 €', amount: 5.00},
            {value: 'Ø 30cm: 6,00 €', amount: 6.00},
            {value: 'Ø 36cm: 8,50 €', amount: 8.50},
            {value: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {value: 'ohne weitere zutat', amount: 0},
              {value: 'mit Annanas (0,80 €)', amount: 0.80},
              {value: 'mit Basillikum (0,80 €)', amount: 0.80},
              {value: 'mit Currysause (0,80 €)', amount: 0.80},

            ]
        }
      },

      {
        itemNo: 12,
        itemName: 'Pizza Boston',
        itemShortDescription: 'Salat der Saison',
        itemPrice: 8.5,
        imgSrc: '../assets/images/pizza3.png',
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
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
          sizes: [
            {value: 'Ø 26cm: 5,00 €', amount: 5.00},
            {value: 'Ø 30cm: 6,00 €', amount: 6.00},
            {value: 'Ø 36cm: 8,50 €', amount: 8.50},
            {value: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {value: 'ohne weitere zutat', amount: 0},
              {value: 'mit Annanas (0,80 €)', amount: 0.80},
              {value: 'mit Basillikum (0,80 €)', amount: 0.80},
              {value: 'mit Currysause (0,80 €)', amount: 0.80},

            ]
        }
      },

      {
        itemNo: 13,
        itemName: 'Pizza Chemnitz',
        itemShortDescription: 'Paanipoori der Saison',
        itemPrice: 9.5,
        imgSrc: '../assets/images/pizza4.png',
        chooseExtraInfo: 'Wahl aus: Classic (ø 25cm), Medium (ø 28cm) oder Large (ø 32cm).',
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
          sizes: [
            {value: 'Ø 26cm: 5,00 €', amount: 5.00},
            {value: 'Ø 30cm: 6,00 €', amount: 6.00},
            {value: 'Ø 36cm: 8,50 €', amount: 8.50},
            {value: '34x46cm: 12,50 €', amount: 12.50},
          ]
        },
        itemExtraOptionPrice: {
            itemPlaceholderName: 'Ihre Extras',
            prices: [
              {value: 'ohne weitere zutat', amount: 0},
              {value: 'mit Annanas (0,80 €)', amount: 0.80},
              {value: 'mit Basillikum (0,80 €)', amount: 0.80},
              {value: 'mit Currysause (0,80 €)', amount: 0.80},

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
