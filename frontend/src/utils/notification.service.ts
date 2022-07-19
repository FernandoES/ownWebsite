import { Injectable } from '@angular/core';
import { ActiveToast, ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {
    constructor(private _toastr: ToastrService) { }

    success(message?: string | undefined, title?: string | undefined): ActiveToast<any> {
        return this._toastr.success(message,title);
    }

    error(message?: string | undefined, title?: string | undefined): ActiveToast<any> {
        return this._toastr.error(message, title);
    }

    show(message?: string | undefined, title?: string | undefined, type?: string | undefined): ActiveToast<any> {
        return this._toastr.show(message, title, undefined, type);
    }
    
}