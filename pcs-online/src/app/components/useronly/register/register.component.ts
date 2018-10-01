import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import * as $ from 'jquery';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {



  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  user: User = {
    [0]: "",
    [1]: "",
    [2]: ""
  }

  ngOnInit() {

  }

  pwdGood: boolean = false;

  CheckPwd(event) {
    if($('.pwd1').val().toString().length < 7 )
    {
      $(".alert").text("Podane hasło jest za krótkie").addClass('active');
    }else if ($('.pwd1').val() == $('.pwd2').val()) {
      this.pwdGood = true;
      this.user[1] = $('.pwd1').val().toString();
      alert($('.pwd1').val().toString());
      $(".alert").text("Podane hasła są zgodne").addClass('active');
    }
    else {
      this.pwdGood = false;
      this.user[1]= "";
      $(".alert").removeClass('active');
    }
  }

  mailgood : boolean = false;

  CheckMail()
  {
    let value = $('.mail').val().toString();
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(value).toLocaleLowerCase()) && value != "")
    {
      $(".alert").removeClass('active');
      this.mailgood = true;
      this.user[2] = value;
      alert(value);
    }
    else 
    {
      this.mailgood = false;
      this.user[2] = "";
      $(".alert").text("Podany adres e-mail nie jest poprawny").addClass('active');
    }
  }

  LoginSet()
  {
    this.user[0] = $('.login1').val().toString();
  }

  inProgress : boolean = false;

  register() {
    if (this.pwdGood && this.mailgood && !this.inProgress) {
      
      this.inProgress = true;
      this.userService.register(this.user).subscribe((result) => {
        this.inProgress = false;
        if (result[0] == 'NOT') {
          this.user[0] = "";
          $(".alert").text("Wybrany login jest zajęty, proszę wybrać inny").addClass('active');
        }
        else {
          $(".alert").text("Rejestracja zakończona powodzeniem, potwierdź konto poprzez wiadomość wysłaną na podany adres e-mail").addClass('active');
        }

      });
    }
  }

}
