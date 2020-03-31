import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array";
interface DataItem { 
    id: number;
    keysearch: string;
    category: string; 
}

 
@Component({
    selector: "Search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
    searching = false;
    allNews: DataItem[] = [
        {
          "id": 1,
          "keysearch": "I 20",
          "category": "cars"
        },
          {
          "id": 2,
          "keysearch": "LG",
          "category": "Washing Mechien"
        },
          {
          "id": 3,
          "keysearch": "CBZ",
          "category": "Bikes"
        },
          {
          "id": 4,
          "keysearch": "VIVO",
          "category": "Mobiles"
        },
          {
          "id": 5,
          "keysearch": "2 BHK",
          "category": "Properties"
        }
      ];

   

    news: DataItem[];
 
    constructor(private routerExtensions: RouterExtensions) {
        this.news = this.allNews.filter((e) => {
            return e.keysearch && e.id && e.category ;
        });
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        this.onSearch(searchBar.text ? searchBar.text.toLowerCase() : "");
        // searchBar.dismissSoftInput();
    }

    onSearch(searchValue) {
        if (searchValue !== "") {
            this.news = this.allNews.filter((e) => {
                return (e.id && e.keysearch && e.category) &&
                    (e.keysearch.toLowerCase().includes(searchValue));
            });
        }
    }

    public onClear(args) {
        let searchBar = <SearchBar>args.object;
        searchBar.text = "";
        searchBar.hint = "Search Eg: Fridge";
        this.allNews.forEach(item => {
            this.news.push(item);
        });
        searchBar.dismissSoftInput(); 
    }

    public onTextChange(args) { 
        let searchBar = <SearchBar>args.object;
        this.onSearch(searchBar.text ? searchBar.text.toLowerCase() : "");
    }

    onNavBtnTap(){
        this.routerExtensions.back();
    }
}
