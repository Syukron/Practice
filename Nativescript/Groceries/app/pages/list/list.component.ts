import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { TextField } from "ui/text-field";

import { isIOS } from 'platform';
import { topmost} from 'ui/frame';

import { Grocery } from "../../shared/grocery/grocery";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";

import * as SocialShare from "nativescript-social-share";

@Component({
    selector: 'list',
    moduleId: module.id,
    templateUrl: './list.html',
    styleUrls: ['./list-common.css', './list.css'],
    providers: [GroceryListService]
})

export class ListComponent implements OnInit{
    groceryList: Array<Grocery> = [];

    grocery= "";
    @ViewChild("groceryTextField") groceryTextField: ElementRef;

    isLoading = false;
    listLoaded = false;

    constructor(private groceryListService: GroceryListService) {
        if(isIOS) {
            topmost().ios.controller.navigationBar.barstyle = 1;
        }
    }

    ngOnInit() {
        this.isLoading = true;
        this.groceryListService.load()
        .subscribe(loadedGroceries => {
            loadedGroceries.forEach((groceryObject) => {
                this.groceryList.unshift(groceryObject);
            });
            this.isLoading = false;
            this.listLoaded = true;
        })
    }

    add() {
        if(this.grocery.trim() === "") {
            alert("Enter grocery item");
            return;
        }

        //Dismiss the keyboard / close keyboard when + button pressed
        let textField = <TextField>this.groceryTextField.nativeElement;
        textField.dismissSoftInput(); 

        this.groceryListService.add(this.grocery)
        .subscribe(
            groceryObject => {
                this.groceryList.unshift(groceryObject);
                this.grocery = "";
            },
            () => {
                alert({
                    message: "An error occured while adding an item to your list.",
                    okButtonText: "OK"
                });
                this.grocery = "";
            }
       );
    }

    share() {
        let listString = this.groceryList
            .map(grocery => grocery.name)
            .join(", ")
            .trim();
        SocialShare.shareText(listString);
    }
}