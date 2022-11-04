import { Component, OnDestroy } from '@angular/core';
import { Router }               from '@angular/router';
import { ApiService }           from 'src/app/serves/api/api.service';
import { ToastService }         from 'src/app/serves/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  invalidLogin:boolean = false
  token:string=""
  name :string=""
	constructor(private router :Router,private api:ApiService,public toastService: ToastService) {}
 
	showSuccess() {
		this.toastService.show(' success login ', { classname: 'bg-success text-light', delay: 10000 });
	}
  submitForm(data:any){
    this.api.login(data).subscribe({
      next:(res:any)=>{
        this.token = res.authorisation.token
        localStorage.setItem('token',this.token)
        this.router.navigateByUrl('/movie')
        this.showSuccess()
      },
      error:(error:any)=>{
        console.log(error)
      }
    })
  } 

  changeData(){
    this.invalidLogin = false
  }
  ngOnDestroy(): void {
		this.toastService.clear();
	}
}
