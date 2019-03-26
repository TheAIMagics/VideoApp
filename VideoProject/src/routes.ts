import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ImageDetailComponent } from './app/image-detail/image-detail.component';
import { LoginComponent } from './app/login/login.component';
import { UploadComponent } from './app/upload/upload.component';
//import { AuthenticationGuardService } from './app/services/authentication-guard.service';

export const appRoutes : Routes=[
    {path : 'gallery',component: GalleryComponent },
    {path : 'upload',component: UploadComponent},
    {path : 'image/:id',component: ImageDetailComponent},
    {path : '', redirectTo:'/gallery', pathMatch:'full'},
    {path : 'login',component: LoginComponent}
]