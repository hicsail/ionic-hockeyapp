import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HockeyApp } from "./src/hockey-app";

export * from './src/hockey-app';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class HockeyAppModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HockeyAppModule,
      providers: [
        HockeyApp
      ]
    };
  }
}
