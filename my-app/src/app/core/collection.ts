import { State } from 'src/app/shared/enums/state.enum';
import { Item } from 'src/app/shared/interfaces/item';


export  const  COLLECTION: Item[] = [
  {id: 'a1',
  name: 'juiliette',
  reference: '1245',
  state: State.ALIVRER
  },
{
  id : 'b1',
  name : 'William' ,
  reference :  '4589',
  state: State.ENCOURS
  },


  {id : 'c1' ,
  name : 'Laticia' ,
  reference :  '5623',
  state: State.LIVREE
  }

  ];
