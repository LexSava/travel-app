export const a = [
  { id: 1, country: 'Беларусь', capital: 'Минск', shortDescr: 'Бла бла бла' },
  { id: 2, country: 'Беларусь', capital: 'Минск', shortDescr: 'Бла бла бла' },
];

export const s = [
  {
    id: 1,
    info: {
      countryImage: './sdffsdf/sdffsdf',
      country: 'Беларусь',
      capital: 'Минск',
      descr: 'Бла бла бла',
      timeZone: 4,
    },

    attractions: [
      {
        id: 1_1,
        name: 'asd',
        description: 'asdf',
        rating: [{ userID: 11242424, userRating: '1-5' },], //стоит ли оставлять здесь, или же создать другой объект
      },
    ],
    map: 'все, что нужно для карты',
    video: { title: 'qwerty', backgroundImage: './adasdas/asdasd/asd', url: './asdsadas/safdsdf' },
  },
];
