import { Injectable } from '@angular/core';  
    import { Observable } from "rxjs";  
    import {HttpHeaders, HttpClient } from "@angular/common/http";  
    import { Categories } from "../models/categories.model";  
    import { BikeDetails } from "../models/bikedetails.model";
    @Injectable({  
      providedIn: 'root'  
    })  
    export class DashboardService {  
       Url="http://192.168.0.4/APIBechoBaba/Api/Dashboard/";  
      constructor(private http:HttpClient) { }  
          
       GetAllCategories():Observable<Categories[]>  
       {  console.log("GetAllCategories");
        return this.http.get<Categories[]>(this.Url+"/GetAllCategories")  
       }  

       GetAllBikes():Observable<BikeDetails[]>  
       {
        return this.http.get<BikeDetails[]>(this.Url+"/GetAllBikes")  
       } 
       
    }