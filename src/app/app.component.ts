import { Component, OnInit } from '@angular/core';
import {StorageService} from "./storage.service";
import {IItem} from "./IItem";

import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    items: IItem[];
    typed: Subject<string> = new Subject<string>();

    constructor(protected storage: StorageService) {}

    ngOnInit() {
        this.items = this.storage.getItems();

        //detect the subject's change
        this.typed.debounceTime(300).subscribe(() => {
            this.store();
        });
    }

    /**
     * Remove the item at a given index
     * @param id The 0 based index of the item in the array
     */
    public remove(id: number) {
        this.items.splice(id, 1);
        this.store();
    }

    public add(name: string): void {
        if(!name.trim()) {
            alert('Cannot insert empty item');
            return;
        }
        let item: IItem = {
            name: name
        };
        this.items.push(item);

        this.store();
    }

    public update(index:number, name: string): void {
        this.typed.next(name);
        this.items[index].name = name;
    }

    private store() {
        this.storage.storeItems(this.items);
    }
}
