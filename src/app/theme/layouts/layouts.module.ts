import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";
import { AuthStepLayoutComponent } from "./auth-step-layout/auth-step-layout.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { ParticalsModule } from "@theme/particals/particals.module";
import { ComponentsModule } from "@theme/components/components.module";

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      ParticalsModule,
      ComponentsModule
    ],
    declarations: [
      MainLayoutComponent,
      AuthLayoutComponent,
      AuthStepLayoutComponent,
     
    ],
    exports: [
      MainLayoutComponent,
      AuthLayoutComponent,
      AuthStepLayoutComponent,
     
    ]
})
export class LayoutsModule {}
  