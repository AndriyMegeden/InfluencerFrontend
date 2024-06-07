import { Component } from '@angular/core';
import { Biography, Experience, Post, Switcher } from '@interfaces/profile.interface';
import { Bio, Categories, PostSettings, PostSwitcher, exp } from '@static/profile.settings';
import { InsightCategory } from '@interfaces/profile.interface';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  activeButton: string = 'RecentPost'; 

  setActive(buttonName: string): void {
    this.activeButton = buttonName;
  }

  posts: Post[] = PostSettings;
  postSwitchers: Switcher[] = PostSwitcher;

  categories: InsightCategory[] = Categories;
  userInfo: Biography[] = Bio;
  data: Experience[] = exp;

  
}
