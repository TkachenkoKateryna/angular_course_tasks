import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostsListComponent } from './post/posts-list/posts-list.component';
import { AddPostComponent } from './post/add-post/add-post.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'counter',
		component: CounterComponent,
	},
	{
		path: 'posts',
		component: PostsListComponent,
		children: [{ path: 'add', component: AddPostComponent }],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
