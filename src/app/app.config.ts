import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export const appConfig = [
  provideRouter(routes),
  importProvidersFrom(BrowserModule, HttpClientModule, FormsModule)
];
