import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { CustomCounterOutputComponent } from './counter/custom-counter-output/custom-counter-output.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing-module';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostsListComponent } from './post/posts-list/posts-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.store';
import { AddPostComponent } from './post/add-post/add-post.component';

@NgModule({
	declarations: [
		AppComponent,
		CounterComponent,
		CounterOutputComponent,
		CounterButtonsComponent,
		CustomCounterOutputComponent,
		HomeComponent,
		HeaderComponent,
		PostsListComponent,
  AddPostComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		StoreModule.forRoot(appReducer),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: false,
			autoPause: true,
			features: {
				pause: false,
				lock: true,
				persist: true,
			},
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
