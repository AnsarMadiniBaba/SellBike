import { Injectable } from '@angular/core';  
    import { Observable } from "rxjs";  
    import {HttpHeaders, HttpClient } from "@angular/common/http";  
    import { Categories } from "../models/categories.model";  
    @Injectable({  
      providedIn: 'root'  
    })  
    export class DashboardService {  
       Url="http://localhost:12179/Api/Dashboard/";  
      constructor(private http:HttpClient) { }  
          
       GetAllCategories():Observable<Categories[]>  
       {  console.log("GetAllCategories");
        return this.http.get<Categories[]>(this.Url+"/GetAllCategories")  
       }  
       
    }