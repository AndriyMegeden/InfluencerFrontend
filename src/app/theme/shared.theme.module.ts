import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutsModule } from "./layouts/layouts.module";
import { ParticalsModule } from "./particals/particals.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "./components/components.module";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      LayoutsModule,
      ParticalsModule,
      ComponentsModule
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      LayoutsModule,
      ParticalsModule,
      ComponentsModule
    ]
})
export class SharedThemeModule {}
  