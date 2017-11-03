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
        if (!localStorage.getItem(this.keyName)) {
            this.storeItems(DEFAULT_ITEMS);
        }
    }

    public storeItems(items:IItem[]) {
        return localStorage.setItem(this.keyName, JSON.stringify(items));
    }

    public getItems():IItem[] {
        return JSON.parse(localStorage.getItem(this.keyName)) as IItem[];
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