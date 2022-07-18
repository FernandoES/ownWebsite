import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IBlogEntry } from 'src/app/app-user/app-user.service';
import { AppCreateBlogService } from './app-create-blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './app-create-blog.component.html',
  styleUrls: ['./app-create-blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-create-blog'
  }
})
export class AppCreateBlogComponent {
  @ViewChild('createBlogForm', { static: true }) createBlogForm: NgForm;

  blog: IBlogEntry;
  constructor(private _service: AppCreateBlogService) {
    this.resetValues();
   }
  resetForm() {
    this.resetValues();
    this.createBlogForm.form.markAsPristine();
  }
  resetValues(){
    this.blog = {
      title: "",
      body: "",
  }

}

saveBlog() {
  this._service.saveBlog(this.blog).subscribe({next: () => console.log("Blog saved")});
}
}
