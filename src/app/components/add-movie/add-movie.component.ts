import { Component, OnInit }  from '@angular/core';
import { Category }           from 'src/app/interface/interface';
import { ApiService }         from 'src/app/serves/api/api.service';
import { Observable }         from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

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
  constructor( private api :ApiService) { }
  onSubmet(data:any){
    // this.api.addMovie
    const formData = new FormData();
    formData.append("image", this.file);
    formData.append("name", data.value.name);
    formData.append("category_id", data.value.categroy);
    formData.append("description", data.value.description);
    // console.log("data",this.addMovie.value.name)
    console.log("data",data,this.file)
    console.log("c",this.file )
    this.api.addMovie(formData).subscribe({
      next:(res:any)=>{
        console.log("res 222",res)
      },
      error:(error)=>{
        console.log(error)
      }
    })

  }
  addFile(e:any){
    console.info(e)
    this.file=e.target.files[0]
  }
  ngOnInit(): void {
    this.api.getCategory().subscribe({
      next:(res:any )=>{
        this.categroy=res.message 
        console.log(res)
      },
      error:(err:any)=>{
        console.log(err)
      }
    })

  }

}
