import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';
import { COLLECTION } from '../collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
 /**Créer variable **/
  private _collection: Item[];
  constructor() {
   this.collection = COLLECTION;
  }

  /**
   * get collection
   *
   */
   public get collection(): Item[] {
     return this._collection;
   }
   /**
    * Set collection
    */
   public set collection(col: Item[]) {
    this._collection = col;
  }

    /* add item in collection
     *
     */

      /**
     *  update item  from collection
     *
     */

      /**
     *  update item  from collection
     *
     */

       /**
     *  get item  in collection  by id
     *
     */



}
