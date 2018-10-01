import { Component, OnInit } from '@angular/core';
import { UserData } from '../../../models/user-data';
import { UserDataService } from '../../../services/user-data.service';
import { UserService } from '../../../services/user.service';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../models/item';
import * as $ from 'jquery';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  userData : UserData = 
  {
      FirstName: "",
      LastName: "",
      City: "",
      Street: "",
      NIP: "",
      PostalCode: "",
      HouseNum: "",
      AppartmentNum: "",
      Login: ""
  
  }

  

  constructor(private itemService : ItemService, private userDataService: UserDataService, private userService: UserService) { 
    userDataService.GetData(userService.GetUser()["0"]).subscribe((result) => {
      this.userData = result;
      
    });
  }

  ngOnInit() {
    this.UpdateData();
  }

  inProgress : boolean = false;

  Save()
  {
    if(this.inProgress)
    {
      return;
    }
    this.inProgress = true;
    this.userData.Login = this.userService.GetUser()["0"];
    $('button .button').text("Zapisywanie...");
    this.userDataService.SetData(this.userData).subscribe(() => 
    { 
      $('button .button').text("Zapisano");

      this.UpdateData();
      setTimeout(function()
      {
        this.inProgress = false;
        $('button .button').text("Zapisz"); 
      },5000)
    });
  }

  UpdateData()
  {
    document.getElementById("FirstName").nodeValue = this.userData.FirstName;
    document.getElementById("LastName").nodeValue = this.userData.LastName;
    document.getElementById("City").nodeValue = this.userData.City;
    document.getElementById("Street").nodeValue = this.userData.Street;
    document.getElementById("NIP").nodeValue = this.userData.NIP;
    document.getElementById("PostalCode").nodeValue = this.userData.PostalCode;
    document.getElementById("HouseNum").nodeValue = this.userData.HouseNum;
    document.getElementById("AppartmentNum").nodeValue = this.userData.AppartmentNum;
  }

}
