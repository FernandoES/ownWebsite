import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IBlogEntry } from 'src/app/app-user/app-user.service';
import { NotificationService } from 'src/utils/notification.service';
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
  image: File;
  constructor(private _service: AppCreateBlogService, private _notification: NotificationService) {
    this.resetValues();
   }
  resetForm(avoidInform: boolean = false) {
    this.resetValues();
    this.createBlogForm.form.markAsPristine();
    if(!avoidInform) { 
      this._notification.success("common.reset");
    }
  }
  resetValues(){
    this.blog = {
      title: "",
      body: "",
  }

}

setFile(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0){
    this.image = target.files[0];
  }
}

saveBlog() {
  this._service.saveBlog(this.blog, this.image).subscribe({next: () => this._notification.success("editor.saved")});
}
}
