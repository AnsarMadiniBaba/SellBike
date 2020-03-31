import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { ObservableArray } from "tns-core-modules/data/observable-array";
import { RouterExtensions } from "nativescript-angular/router";

interface DataItem {
    source: Source[];
    author: string;
    title: string;
    cost: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}

interface Source {
    id: string;
    name: string;
}
@Component({
    selector: "Featured",
    templateUrl: "./featured.component.html",
    styleUrls:["./featured.component.scss"],
})
// export class FeaturedComponent implements OnInit {

//     constructor() {
//         // Use the component constructor to inject providers.
//     }

//     ngOnInit(): void {
//         // Init your component properties here.
//     }

//     onDrawerButtonTap(): void {
//         const sideDrawer = <RadSideDrawer>app.getRootView();
//         sideDrawer.showDrawer();
//     }
// }
export class FeaturedComponent implements OnInit {

    // TIP: change this array to hit the newsapi.org feed for live data!
    // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=<YOUR API KEY>
    allNews : DataItem[];
    

    searching = false;

    news: DataItem[];

    constructor(private routerExtensions: RouterExtensions) {
        this.allNews = [
            {
              "source": [{
                "id": null,
                "name": "~/images/carshift.jpg"
              },{
                "id": null,
                "name": "~/images/carshift.jpg"
              },{
                "id": null,
                "name": "~/images/carshift.jpg"
              }],
              "author": null,
              "title": "In Good Condition",
              "cost":"1400",
              "description": null,
              "url": "https://www.yahoo.com/news/latest-turkey-urges-sides-avoid-more-syria-turmoil-113652213.html",
              "urlToImage": null,
              "publishedAt": "2018-04-13T19:44:00Z"
            },
            {
                "source": [{
                    "id": null,
                    "name": "~/images/carshift.jpg"
                  },{
                    "id": null,
                    "name": "~/images/carshift.jpg"
                  },{
                    "id": null,
                    "name": "~/images/carshift.jpg"
                  }],
              "author": "http://www.facebook.com/matt.zapotosky",
              "title": "In Good Condition",
              "cost":"1400",
              "description": "The Bush administration aide was convicted of perjury before a grand jury, lying to FBI investigators and obstruction of justice.",
              "url": "https://www.washingtonpost.com/politics/trump-issues-pardon-to-scooter-libby-former-chief-of-staff-to-vice-president-cheney/2018/04/13/dfa4039a-3f2d-11e8-8d53-eba0ed2371cc_story.html",
              "urlToImage": "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2018/04/13/National-Politics/Images/AFP_13Z4QQ.jpg?t=20170517",
              "publishedAt": "2018-04-13T19:06:25Z"
            },
            {
                "source": [{
                    "id": null,
                    "name": "~/images/carshift.jpg"
                  },{
                    "id": null,
                    "name": "~/images/carshift.jpg"
                  },{
                    "id": null,
                    "name": "~/images/carshift.jpg"
                  }],
              "author": "",
              "title": "In Good Condition",
              "cost":"1400",
              "description": "Bank lending was expected to surge this year. But going by bank results so far, lending in the first quarter is set to disappoint.",
              "url": "https://www.nytimes.com/2018/04/13/business/dealbook/trump-trans-pacific-partnership.html",
              "urlToImage": "https://static01.nyt.com/images/2018/02/03/us/14db-newsletter-wells/14db-newsletter-wells-facebookJumbo-v2.jpg",
              "publishedAt": "2018-04-13T18:56:00Z"
            },
            {
                "source": [{
                    "id": null,
                    "name": "~/images/carshift.jpg"
                  },{
                    "id": null,
                    "name": "~/images/carshift.jpg"
                  },{
                    "id": null,
                    "name": "~/images/carshift.jpg"
                  }],
              "author": "",
              "title": "In Good Condition",
              "cost":"1400",
              "description": "A look back at the journey that led to Bryant's unceremonious departure from Dallas",
              "url": "https://www.cbssports.com/nfl/news/dallas-cowboys-release-dez-bryant-a-timeline-of-the-wide-receivers-career/",
              "urlToImage": "https://sportshub.cbsistatic.com/i/r/2017/10/05/3534c48d-75c3-46c3-8109-1a40f4bb3ef4/thumbnail/770x433/43641559d7896478a232fe7e312e4aad/dez-bryant.png",
              "publishedAt": "2018-04-13T18:42:00Z"
            },
            {
                "source": [{
                    "id": null,
                    "name": "~/images/carshift.jpg"
                  },{
                    "id": null,
                    "name": "~/images/carshift.jpg"
                  },{
                    "id": null,
                    "name": "~/images/carshift.jpg"
                  }],
              "author": "Adam Goldman and Nicholas Fandos",
              "title": "In Good Condition",
              "cost":"1400",
              "description": "The report accused the former official, Andrew G. McCabe, of repeatedly misleading investigators. Mr. McCabe was fired in March hours before he was eligible for a full pension.",
              "url": "https://www.nytimes.com/2018/04/13/us/politics/former-fbi-deputy-director-is-faulted-in-scathing-inspector-general-report.html",
              "urlToImage": "https://static01.nyt.com/images/2018/04/14/us/politics/14dc-mccabe/14dc-mccabe-facebookJumbo.jpg",
              "publishedAt": "2018-04-13T18:19:29Z"
            }
          ];
        // this.news = this.allNews.filter((e,i) => {
        //     return e.urlToImage && e.title && e.description && e.source[i].name;
        // });
        this.news = this.allNews;
 
    }

    onNavBtnTap(){
        this.routerExtensions.back();
    }
    ngOnInit(): void { }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    }

    public onItemSelected(args: DataItem) {
        this.routerExtensions.navigate(["/deatils"]);
        // const listview = args.object as RadListView;
        // const selectedItems = listview.getSelectedItems() as Array<DataItem>;
        // let selectedTitles = "Selected items: ";
        // for (let i = 0; i < selectedItems.length; i++) {
        //     selectedTitles += selectedItems[i] ? selectedItems[i].name : "";

        //     if (i < selectedItems.length - 1) {
        //         selectedTitles += ", ";
        //     }
        // }

        // this._selectedItems = selectedTitles;
        // const selectedItem = this.dataItems.getItem(args.index);
        // console.log("Item selected: " + (selectedItem && selectedItem.name));
    }
}
