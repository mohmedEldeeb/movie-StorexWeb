import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { ApiService }        from 'src/app/serves/api/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  token :string=""

  constructor(private api:ApiService, private router:Router) { }

  submitForm(data:any){
    this.api.signUP(data).subscribe({
      next:()=>{
        this.router.navigateByUrl('/login')
      },
      error:(err)=>{
        alert(err)
      }
    })
  }
  
  ngOnInit(): void {
  }

}
