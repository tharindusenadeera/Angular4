import { Component, OnInit, ElementRef,ViewChild,ViewEncapsulation } from '@angular/core';
import { Router,  NavigationExtras,ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [DataService],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {
  @ViewChild('username') el:ElementRef;

  statuslogin:any;
  focusin: boolean = true;
  rForm: FormGroup;
  post:any;  
  usernameAlert:string="Please fill username";
  passwordAlert:string="Please fill password";
  loginAlert:string;
  loginError:boolean=false;
  returnUrl: string;

  constructor(      
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authenticationservice:DataService,    
    public router: Router) {
      this.rForm = fb.group({
        'username' : [null, Validators.required],
        'password' : [null, Validators.required],
      });
     }

  ngOnInit() {
        this.authenticationservice.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/index';
  }
  addPost(post) {
    this.authenticationservice.login(post).subscribe(
       res => {
         if(res.status == true)
           {
              this.router.navigate([this.returnUrl]);
           }else{
             this.loginError = true
             this.loginAlert = res.message;
           }
       },
        err => {
         return err;
           
       }
     );
  
   }
}
