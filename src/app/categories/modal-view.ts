
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RegisterUser } from "../models/user";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";
import { User } from "../models/user.model";
import { LoginService } from "../services/login.service";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import { ListViewEventData, RadListView } from "nativescript-ui-listview"
interface DataItem {
    id: number;
    brandid: number;
    model: string;
}

@Component({
    moduleId: module.id,
    templateUrl: "./modal-view.html",
    styleUrls: ["./categories.component.scss"]
})
export class ModalViewComponent implements OnInit {
    processing = false;
    selectedbrand: any;
    modelsList:DataItem[];
    heromodelList: DataItem[]=[
        {
            id:1,
            brandid:1,
            model:"CBZ"
        },
        {
            id:2,
            brandid:1,
            model:"Achiever"
        },
        {
            id:3,
            brandid:1,
            model:"Ambition"
        },
        {
            id:4,
            brandid:1,
            model:"Impulse"
        },
        {
            id:5,
            brandid:1,
            model:"Karizma"
        },
        {
            id:6,
            brandid:1,
            model:"Glamour"
        },

        {
            id:7,
            brandid:1,
            model:"Passion"
        },
        {
            id:8,
            brandid:1,
            model:"Splendor"
        },
        {
            id:9,
            brandid:1,
            model:"CD 100"
        },
        {
            id:10,
            brandid:1,
            model:"CD Dawn"
        },
        {
            id:11,
            brandid:1,
            model:"CD Deluxe"
        },
        {
            id:12,
            brandid:1,
            model:"Dawn"
        },
        {
            id:13,
            brandid:1,
            model:"Deluxe"
        },
        {
            id:14,
            brandid:1,
            model:"Ignitor"
        },
        
        {
            id:15,
            brandid:1,
            model:"Hunk"
        },
        {
            id:16,
            brandid:1,
            model:"HX 250 R"
        },

    
        {
            id:17,
            brandid:1,
            model:"Joy"
        },
     

        {
            id:18,
            brandid:1,
            model:"Sleek"
        },

        {
            id:19,
            brandid:1,
            model:"Street"
        },
        {
            id:20,
            brandid:1,
            model:"Super Splendor"
        },
        {
            id:21,
            brandid:1,
            model:"Other"
        }
    ]

    hondamodelList: DataItem[]=[
        {
            id:1,
            brandid:2,
            model:"CBR"
        },
        {
            id:2,
            brandid:2,
            model:"CB"
        },
        {
            id:3,
            brandid:2,
            model:"CD 110 Dream"
        },
        {
            id:4,
            brandid:2,
            model:"CBF Stunner"
        },
        {
            id:5,
            brandid:2,
            model:"Dream Yuga"
        },
        {
            id:6,
            brandid:2,
            model:"Goldwing GL 1800"
        },
        {
            id:7,
            brandid:2,
            model:"VFR 1200 F"
        }
        ,
        {
            id:8,
            brandid:2,
            model:"VFR 1300 F"
        },
        {
            id:9,
            brandid:2,
            model:"Other"
        }
    ]

    ktmmodelList: DataItem[]=[
        {
            id:1,
            brandid:3,
            model:"CBR"
        },
        {
            id:2,
            brandid:3,
            model:"CB"
        },
        {
            id:3,
            brandid:3,
            model:"CD 110 Dream"
        },
        {
            id:4,
            brandid:3,
            model:"CBF Stunner"
        },
        {
            id:5,
            brandid:3,
            model:"Dream Yuga"
        },
        {
            id:6,
            brandid:3,
            model:"Goldwing GL 1800"
        },
        {
            id:7,
            brandid:3,
            model:"VFR 1200 F"
        }
        ,
        {
            id:8,
            brandid:3,
            model:"VFR 1300 F"
        },
        {
            id:9,
            brandid:3,
            model:"Other"
        }
    ]

    bajajmodelList: DataItem[]=[
        {
            id:1,
            brandid:4,
            model:"Avenger"
        },
        {
            id:2,
            brandid:4,
            model:"CT 110"
        },
        
        {
            id:3,
            brandid:4,
            model:"Platina 110"
        },
        {
            id:4,
            brandid:4,
            model:"Discover"
        },
        {
            id:5,
            brandid:4,
            model:"Platina"
        },
        {
            id:6,
            brandid:4,
            model:"Pulsar"
        },
        {
            id:7,
            brandid:4,
            model:"Others"
        }
    ]
    constructor(private params: ModalDialogParams, private loginService: LoginService, private routerExtensions: RouterExtensions) {
       
       console.log(params.context);
        if (params.context.length > 0) {
            console.log(params.context);
            this.selectedbrand = params.context[0];

           
                // this.routerExtensions.navigate(["/deatils"]);
                if(this.selectedbrand.brand==="Hero")
                this.modelsList = this.heromodelList;
                if(this.selectedbrand.brand==="Honda")
                this.modelsList = this.hondamodelList;
                if(this.selectedbrand.brand==="KTM")
                this.modelsList = this.ktmmodelList;
                if(this.selectedbrand.brand==="Bajaj")
                this.modelsList = this.bajajmodelList;
                if(this.selectedbrand.brand==="Royal Enfield")
                this.modelsList = this.bajajmodelList;
                console.log("Item selected: " + (this.selectedbrand.brand));
             
             
        }
    }

    
    ngOnInit() {
    }
    public onItemSelected(args: ListViewEventData) {
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<DataItem>;
        let selectedcat;
        selectedcat = selectedItems[0] ? selectedItems[0].model : "";
        let setectedbrandmodel = {"brand":this.selectedbrand.brand,
        "model":selectedcat}; 
        this.params.closeCallback(setectedbrandmodel);
    }
}
