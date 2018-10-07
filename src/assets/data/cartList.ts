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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
