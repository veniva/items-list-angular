/**
 * Created by ventsi on 11.6.2017 г..
 */

import { Injectable } from '@angular/core';
import { IItem } from './IItem';

@Injectable()
export class StorageService{

    protected keyName: string = 'items';

    constructor() {
        //set the initial demo items
        if (!localStorage.getItem('items')) {
            this.storeItems(DEFAULT_ITEMS);
        }
    }

    public storeItems(items:IItem[]) {
        return localStorage.setItem('items', JSON.stringify(items));
    }

    public getItems():IItem[] {
        return JSON.parse(localStorage.getItem('items')) as IItem[];
    }
}

const DEFAULT_ITEMS: IItem[] = [
    {
        name: 'Carrots'
    },
    {
        name: 'Tomato'
    },
    {
        name: 'Fish'
    }
];