import { State } from 'src/app/shared/enums/state.enum';
import { Item } from 'src/app/shared/interfaces/item';


export  const  COLLECTION: Item[] = [
  {id: 'a1',
  name: 'kamel',
  reference: '15400',
  state: State.ALIVRER
  },
{
  id : 'b1',
  name : 'Alex' ,
  reference :  '1470',
  state: State.ENCOURS
  },


  {id : 'c1' ,
  name : 'Laticia' ,
  reference :  '8500',
  state: State.LIVREE
  }

  ];
