import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      ReactiveFormsModule 
    ],
    declarations: [
      HeaderComponent,
      FooterComponent
    ],
    exports: [
      HeaderComponent,
      FooterComponent
    ]
})
export class ParticalsModule {}
  