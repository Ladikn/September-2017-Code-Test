import { AccountOrderPipe } from '../pipes/account-order/account-order';
import { AccountComponent } from '../components/account/account';
import { httpFactory } from "@angular/http/src/http_module";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { DataProvider } from "../providers/data/data";

@NgModule({
    declarations: [MyApp, HomePage, AccountComponent, AccountOrderPipe],
    imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpModule],
    bootstrap: [IonicApp],
    entryComponents: [MyApp, HomePage],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        DataProvider
    ]
})
export class AppModule {}
