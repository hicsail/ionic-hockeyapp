import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";

@Injectable()
export class HockeyApp {

  private androidAppId:string = "32c9927a690f46b2a7aae178a6165a64";
  private iosAppId:string = "546c46b0adf24f52abfe6f2e29dbfeca";
  private sendAutoUpdates = true;
  private ignoreErrorHeader = false;
  private loginMode = window['hockeyapp'].VALIDATE;
  private androidAppSecret = ''; //if  loginMode is email only. iOS only works with anonymous

  constructor(private platform:Platform) {}

  /**
   * Performs a request with `get` http method.
   * @param androidAppId          The Android ID of the app as provided by the HockeyApp portal.
   * @param iosAppId              The iOS ID of the app as provided by the HockeyApp portal.
   * @param autoSendCrashReports  Specifies whether you would like crash reports to be automatically sent to the HockeyApp server when the end user restarts the app. Default - false
   * @param ignoreDefaultHandler  Specifies whether you would like to display the standard dialog when the app is about to crash. This parameter is only relevant on Android. Default - false
   * @param loginMode             The mechanism to use in order to authenticate users. NOTE: Only the ANONYMOUS login mode is supported on iOS, and therefore, you can only use the other modes within Android apps. Default - ANONYMOUS
   * @param appSecret             The app secret as provided by the HockeyApp portal. This parameter only needs to be set if you're setting the loginMode parameter to EMAIL_ONLY.
   */
  public start() {
    if (window['hockeyapp']) {
      let appId;
      if (this.platform.is('ios')) {
        appId = this.iosAppId;
      }
      else if (this.platform.is('android')) {
        appId = this.androidAppId;
      }
      if (appId) {
        window['hockeyapp'].start(null, null, appId, this.sendAutoUpdates, this.ignoreErrorHeader, this.loginMode, this.androidAppSecret);
      } else {
        console.warn("HockeyApp was unable to start");
      }
    } else {
      console.warn("HockeyApp not found");
    }

  }

  /**
   * Logs an app-specific event for analytic purposes.
   * @param name          The name (e.g. "ITEM_ADDED") of the custom event that should be logged.
   */
  public trackEvent(name:String): void {
    if (window['hockeyapp']) {
      window['hockeyapp'].trackEvent(null, null, name);
    } else {
      console.warn("Unable to find Hockey App, make sure it is install using ionic plugin add cordova-plugin-hockeyapp");
    }
  }

  /**
   * Check if there is a new version available to download. NOTE: This should not be called in production/release builds intended for the Google Play Store.
   */
  public checkHockeyAppUpdates(): void {
    if (window['hockeyapp']) {
      window['hockeyapp'].checkForUpdate(null,null);
    } else {
      console.warn("Unable to find Hockey App, make sure it is install using ionic plugin add cordova-plugin-hockeyapp");
    }
  }

  /**
   * Immediately crashes the app. This is used strictly for testing the HockeyApp crash reporting capabilities.
   */
  public forceCrash(): void {
    if (window['hockeyapp']) {
      window['hockeyapp'].forceCrash(null,null);
    } else {
      console.warn("Unable to find Hockey App, make sure it is install using ionic plugin add cordova-plugin-hockeyapp");
    }
  }

  /**
   * If you would like to include additional data to include with user feedback, you can call the following API and indicate whether to include a screen shot of the device and/or arbitrary data from your application at the time that the API is called.
   */
  public composeFeedback(attachScreenshot:boolean, data:any): void {
    if (window['hockeyapp']) {
      window['hockeyapp'].composeFeedback(null,null,attachScreenshot,data);
    } else {
      console.warn("Unable to find Hockey App, make sure it is install using ionic plugin add cordova-plugin-hockeyapp");
    }
  }

  /**
   * If you're using HockeyApp to distribute beta builds to your testers, then you'll likely also want to collect feedback from them in addition to viewing crash reports and usage metrics. To do this, simply call the following method in order to display a UI that allows your users to send app feedback directly to you:
   */
  public feedback(): void {
    if (window['hockeyapp']) {
      window['hockeyapp'].feedback(null,null);
    } else {
      console.warn("Unable to find Hockey App, make sure it is install using ionic plugin add cordova-plugin-hockeyapp");
    }
  }

  /**
   * Attaches arbitrary metadata to the next crash report in order to provide more context about the user's state.
   * @param data A JavaScript object that describes the metadata (i.e. properties and values) that you would like to attach to the next crash report.
   */
  public addMetaData(data:any): void {
    if (window['hockeyapp']) {
      window['hockeyapp'].addMetaData(null,null,data);
    } else {
      console.warn("Unable to find Hockey App, make sure it is install using ionic plugin add cordova-plugin-hockeyapp");
    }
  }

}
