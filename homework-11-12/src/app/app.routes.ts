import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaJsonComponent } from './lista-json/lista-json.component';
import { ApiGetComponent } from './api-get/api-get.component';
import { ApiPostComponent } from './api-post/api-post.component';
import { ApiPutComponent } from './api-put/api-put.component';
import { ApiPatchComponent } from './api-patch/api-patch.component';
import { ApiDeleteComponent } from './api-delete/api-delete.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';


export const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'lista', component: ListaJsonComponent
    },
    {
        path: 'api-get', component: ApiGetComponent
    },
    {
        path: 'api-post', component: ApiPostComponent
    },
    {
        path: 'api-put', component: ApiPutComponent
    },
    {
        path: 'api-pacth', component: ApiPatchComponent
    },
    {
        path: 'api-delete', component: ApiDeleteComponent
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**', component: NaoEncontradoComponent
    }
];
