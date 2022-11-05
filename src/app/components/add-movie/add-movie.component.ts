import { Component, OnInit }      from '@angular/core';
import { ApiService }             from 'src/app/serves/api/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastService }           from 'src/app/serves/toast.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  categroy :any =null
  file:any
  addMovie= new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    categroy:new FormControl('')
  });
  constructor( private api :ApiService,public toastService: ToastService) { }

  showSuccess() {
		this.toastService.show(' success  ', { classname: 'bg-success text-light', delay: 10000 });
	}
  showStandard() {
		this.toastService.show("errror", { classname: 'bg-danger text-light', delay: 15000 });
	}
  
  onSubmet(data:any){
    const formData = new FormData();
          formData.append("image", this.file);
          formData.append("name", data.value.name);
          formData.append("category_id", data.value.categroy);
          formData.append("description", data.value.description);
    
    this.api.addMovie(formData).subscribe({
      next:()=>{
        this.showSuccess()
      },
      error:()=>{
        this.showStandard()
      }
    })

  }
  addFile(e:any){
    this.file=e.target.files[0]
  }
  ngOnInit(): void {
    this.api.getCategory().subscribe({
      next:(res:any )=>{
        this.categroy=res.message 
      },
      error:()=>{
        this.showStandard()
      }
    })

  }

}
