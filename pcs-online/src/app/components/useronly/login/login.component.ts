import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import * as $ from 'jquery';
import { UserService} from '../../../services/user.service';
import { UserDataService } from '../../../services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = 
  {
    [0]: "",
    [1]: "",
    [2]: ""
    
  }

  constructor(
    private userService : UserService, 
    private userDataService:UserDataService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  inProgress : boolean = false;

  login()
  {
    if(this.inProgress)
    {
      return;
    }
    this.inProgress = true;
    $('button p').text('Logowanie...');
    this.userService.login(this.user).subscribe((result) => {
      this.userService.SetUser(result); 
      if(this.userService.user['1'] == "" || this.userService.user['2'] == "")
      {
        $('.alert').addClass('active');
        this.inProgress = false;
        $('button p').text('Zaloguj');
      }
      else 
      {
        this.userDataService.GetData(this.user[0]).subscribe(
          (result)=>{ 
            this.userDataService.SetData(result);
            this.router.navigate(['../szukaj']);
          });
        }
    });
  }

  Show()
  {
  }

}
