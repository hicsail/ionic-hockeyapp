import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";

@Injectable()
export class HockeyApp {

  //hockeyapp settings
  private androidAppId:string;
  private iosAppId:string;
  private sendAutoUpdates = false;
  private ignoreErrorHeader = false;
  private window:any = window;
  //private loginMode = this.window[<any>'hockeyapp'].ANONYMOUS;
  //private androidAppSecret = ''; //if  loginMode is email only. iOS only works with anonymous

  constructor(private platform:Platform) {}

  /**
   * Performs a request with `get` http method.
   * @param androidAppId          The Android ID of the app as provided by the HockeyApp portal.
   * @param iosAppId              The iOS ID of the app as provided by the HockeyApp portal.
   * @param autoSendCrashReports  Specifies whether you would like crash reports to be automatically sent to the HockeyApp server when the end user restarts the app. Default - false
   * @param ignoreDefaultHandler  Specifies whether you would like to display the standard dialog when the app is about to crash. This parameter is only relevant on Android. Default - false
   */
  public start(androidAppId:string,iosAppId:string,sendAutoUpdates:boolean,ignoreErrorHeader:boolean): Promise<any> {
    return new Promise((resolve, reject) => {
      this.androidAppId = androidAppId;
      this.iosAppId = iosAppId;
      this.sendAutoUpdates = sendAutoUpdates;
      this.ignoreErrorHeader = ignoreErrorHeader;
      if (this.window[<any>'hockeyapp']) {
        let appId: string;
        if (this.platform.is('ios')) {
          appId = this.iosAppId;
        }
        else if (this.platform.is('android')) {
          appId = this.androidAppId;
        }
        if (appId) {
          this.window[<any>'hockeyapp'].start((success:any) => {
            resolve(success);
          }, (err:any) => {
            reject(err);
          }, appId, this.sendAutoUpdates, this.ignoreErrorHeader);
        } else {
          reject('HockeyApp unable to start, no app id or unsupported platform');
        }
      } else {
        if(this.platform.is('core') || this.platform.is('mobileweb')) {
          console.warn('HockeyApp unable to start on this platform')
          resolve();
        } else {
          reject('HockeyApp is not found, please make sure the cordova-hockeyapp-plugin is installed and on a supported platform');
        }
      }
    });
  }

  /**
   * Logs an app-specific event for analytic purposes.
   * @param name      The name (e.g. "ITEM_ADDED") of the custom event that should be logged.
   */
  public trackEvent(name:string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.window[<any>'hockeyapp']) {
        this.window[<any>'hockeyapp'].trackEvent((success:any) => {
          resolve(success);
        }, (err:any) => {
          reject(err);
        }, name);
      } else {
        if(this.platform.is('core') || this.platform.is('mobileweb')) {
          console.warn('HockeyApp unable to trackEvent ' + name + ' on this platform')
          resolve();
        } else {
          reject('HockeyApp is not found, please make sure the cordova-hockeyapp-plugin is installed and on a supported platform');
        }
      }
    });

  }

  /**
   * Check if there is a new version available to download. NOTE: This should not be called in production/release builds intended for the Google Play Store.
   */
  public checkHockeyAppUpdates(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.window[<any>'hockeyapp']) {
        this.window[<any>'hockeyapp'].checkForUpdate((success:any) => {
          resolve(success);
        },(err:any) => {
          reject(err);
        });
      } else {
        if(this.platform.is('core') || this.platform.is('mobileweb')) {
          console.warn('HockeyApp unable to check HockeyApp updates on this platform')
          resolve();
        } else {
          reject('HockeyApp is not found, please make sure the cordova-hockeyapp-plugin is installed and on a supported platform');
        }
      }
    });
  }

  /**
   * Immediately crashes the app. This is used strictly for testing the HockeyApp crash reporting capabilities.
   */
  public forceCrash(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.window[<any>'hockeyapp']) {
        this.window[<any>'hockeyapp'].forceCrash((success:any) => {
          resolve(success);
        },(err:any) => {
          reject(err);
        });
      } else {
        if(this.platform.is('core') || this.platform.is('mobileweb')) {
          console.warn('HockeyApp unable to force crash on this platform')
          resolve();
        } else {
          reject('HockeyApp is not found, please make sure the cordova-hockeyapp-plugin is installed and on a supported platform');
        }
      }
    });
  }

  /**
   * If you would like to include additional data to include with user feedback, you can call the following API and indicate whether to include a screen shot of the device and/or arbitrary data from your application at the time that the API is called.
   */
  public composeFeedback(attachScreenshot:boolean, data:any): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.window[<any>'hockeyapp']) {
        this.window[<any>'hockeyapp'].composeFeedback((success:any) => {
          resolve(success);
        }, (err:any) => {
          reject(err);
        }, attachScreenshot, data);
      } else {
        if(this.platform.is('core') || this.platform.is('mobileweb')) {
          console.warn('HockeyApp unable to compose feedback on this platform')
          resolve();
        } else {
          reject('HockeyApp is not found, please make sure the cordova-hockeyapp-plugin is installed and on a supported platform');
        }
      }
    });
  }

  /**
   * If you're using HockeyApp to distribute beta builds to your testers, then you'll likely also want to collect feedback from them in addition to viewing crash reports and usage metrics. To do this, simply call the following method in order to display a UI that allows your users to send app feedback directly to you:
   */
  public feedback(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.window[<any>'hockeyapp']) {
        this.window[<any>'hockeyapp'].feedback((success:any) => {
          resolve(success);
        }, (err:any) => {
          reject(err);
        });
      } else {
        if(this.platform.is('core') || this.platform.is('mobileweb')) {
          console.warn('HockeyApp unable to feedback on this platform')
          resolve();
        } else {
          reject('HockeyApp is not found, please make sure the cordova-hockeyapp-plugin is installed and on a supported platform');
        }
      }
    });
  }

  /**
   * Attaches arbitrary metadata to the next crash report in order to provide more context about the user's state.
   * @param data A JavaScript object that describes the metadata (i.e. properties and values) that you would like to attach to the next crash report.
   */
  public addMetaData(data:any): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.window[<any>'hockeyapp']) {
        this.window[<any>'hockeyapp'].addMetaData((success:any) => {
          resolve(success);
        }, (err:any) => {
          reject(err);
        }, data);
      } else {
        if(this.platform.is('core') || this.platform.is('mobileweb')) {
          console.warn('HockeyApp unable to add meta data on this platform')
          resolve();
        } else {
          reject('HockeyApp is not found, please make sure the cordova-hockeyapp-plugin is installed and on a supported platform');
        }
      }
    });
  }

  /**
   * Set the user's e-mail address.
   * @param userEmail      The user's e-mail address.
   */
  public setUserEmail(userEmail: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.window[<any>'hockeyapp']) {
        this.window[<any>'hockeyapp'].setUserEmail((success: any) => {
          resolve(success);
        }, (err: any) => {
          reject(err);
        }, userEmail);
      } else {
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
          console.warn('HockeyApp unable to set the users e-mail address on this platform')
          resolve();
        } else {
          reject('HockeyApp is not found, please make sure the cordova-hockeyapp-plugin is installed and on a supported platform');
        }
      }
    });

  }

  /**
   * Set the user's name.
   * @param userName      The user's name.
   */
  public setUserName(userName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.window[<any>'hockeyapp']) {
        this.window[<any>'hockeyapp'].setUserName((success: any) => {
          resolve(success);
        }, (err: any) => {
          reject(err);
        }, userName);
      } else {
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
          console.warn('HockeyApp unable to set the users name on this platform')
          resolve();
        } else {
          reject('HockeyApp is not found, please make sure the cordova-hockeyapp-plugin is installed and on a supported platform');
        }
      }
    });

  }
}