import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrandsComponent } from "./brands/brands.component";
import { WhyChooseComponent } from "./why-choose/why-choose.component";
import { InfluencerNearYouComponent } from "./influencer-near-you/influencer-near-you.component";
import { QuestionsComponent } from "./questions/questions.component";
import { MarketingComponent } from "./marketing/marketing.component";
import { TopInfluencerComponent } from "./top-influencer/top-influencer.component";
import { MainSliderComponent } from "./main-slider/main-slider.component";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { SearchComponent } from "./search/search.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SearchInfluencerComponent } from "./search-influencer/search-influencer.component";
import { CardListingComponent } from "./card-listing/card-listing.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { PostsComponent } from "./posts/posts.component";
import { ColaborationsComponent } from "./colaborations/colaborations.component";
import { ModalsComponent } from "./modals/modals.component";
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      SlickCarouselModule,
      ReactiveFormsModule,
      MatDialogModule
    ],
    declarations: [
        BrandsComponent,
        WhyChooseComponent,
        InfluencerNearYouComponent,
        QuestionsComponent,
        MarketingComponent,
        TopInfluencerComponent,
        MainSliderComponent,
        SearchComponent,
        SearchInfluencerComponent,
        CardListingComponent,
        EditProfileComponent,
        PostsComponent,
        ColaborationsComponent,
        ModalsComponent

    ],
    exports: [
        BrandsComponent,
        WhyChooseComponent,
        InfluencerNearYouComponent,
        QuestionsComponent,
        MarketingComponent,
        TopInfluencerComponent,
        MainSliderComponent,
        SearchComponent,
        SearchInfluencerComponent,
        CardListingComponent,
        EditProfileComponent,
        PostsComponent,
        ColaborationsComponent,
        ModalsComponent
    ]
})
export class ComponentsModule {}
  