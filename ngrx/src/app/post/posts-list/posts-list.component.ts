import { Component } from '@angular/core';
import { AppState } from 'src/app/store/app.store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { getPosts } from '../state/posts.selector';

@Component({
	selector: 'app-posts-list',
	templateUrl: './posts-list.component.html',
	styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent {
	posts: Observable<Post[]>;

	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.posts = this.store.select(getPosts);
	}
}
