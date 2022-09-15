import { ICar } from '../../interfaces/ICar'

export const carMock: ICar = {
  model: 'Ferrari Maranello',
  year: 1963,
  color: 'red',
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

export const carMock2: ICar = {
  model: 'Porsche Cayenne',
  year: 2021,
  color: 'black',
  buyValue: 844412,
  seatsQty: 2,
  doorsQty: 2
}

export const carMockWithId: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Ferrari Maranello',
  year: 1963,
  color: 'red',
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

export const carMockWithId2: ICar & { _id: string } = {
  _id: '63238da66c4319d55d37de36',
  model: 'Porsche Cayenne',
  year: 2021,
  color: 'black',
  buyValue: 844412,
  seatsQty: 2,
  doorsQty: 2
}

export const carMockList: (ICar & { _id: string })[] = [
  {
    _id: '62cf1fc6498565d94eba52cd',
    model: 'Ferrari Maranello',
    year: 1963,
    color: 'red',
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  },
  {
    _id: '63238da66c4319d55d37de36',
    model: 'Porsche Cayenne',
    year: 2021,
    color: 'black',
    buyValue: 844412,
    seatsQty: 2,
    doorsQty: 2
    },  
]

export const carMockUpdate: ICar = {
  model: 'Ferrari Maranello',
  year: 1963,
  color: 'black',
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

export const carMockUpdateWithId: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Ferrari Maranello',
  year: 1963,
  color: 'black',
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

export const carMockInvalid: any = {
  model: 'Ferrari Maranello',
  year: 19633,
  color: 'black',
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}