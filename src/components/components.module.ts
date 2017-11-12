import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {LoginFormComponent} from './login-form/login-form.component'
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

@NgModule({
    declarations: [
        LoginFormComponent,
    RegisterFormComponent,
    ProfileFormComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        LoginFormComponent,
    RegisterFormComponent,
    ProfileFormComponent
    ]
})
export class ComponentsModule {

}