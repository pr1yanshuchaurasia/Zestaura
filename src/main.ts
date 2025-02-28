import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from 'app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
