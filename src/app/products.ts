export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 14',
    price: 799,
    description: 'A maior duração de bateria de um iPhone!'
  },
  {
    id: 2,
    name: 'iPhone 13',
    price: 699,
    description: 'Possui uma tela de Super Retina XDR.'
  },
  {
    id: 3,
    name: 'iPhone SE',
    price: 299,
    description: 'Até 15 horas de reprodução de vídeo!'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/