# Titanium Movie List demo

After watching the presentation of React Native [here](https://www.youtube.com/watch?v=7rDsRXj9-cU) at the Facebook React.js Conf 2015, I decided to implement the very same app, but using [Appcelerator Titanium](http://www.appcelerator.com/titanium/), to demonstrate that what React Native will do (it's still in private beta) could have been done with Titanium since 2011.

<table>
  <tr>
    <td align="center"><img src="https://github.com/EtnaTraining/MoviesDemo/blob/master/screenshots/movieList.png" width="250"/><br/>Main Screen</td>
    <td align="center"><img src="https://github.com/EtnaTraining/MoviesDemo/blob/master/screenshots/movieDetail.png" width="250"/><br/>Detail view</td>
  </tr>
   <tr>
    <td align="center"><img src="https://github.com/EtnaTraining/MoviesDemo/blob/master/screenshots/android_movieList.png" width="250"/><br/>Main Screen</td>
    <td align="center"><img src="https://github.com/EtnaTraining/MoviesDemo/blob/master/screenshots/android_movieDetail.png" width="250"/><br/>Detail view</td>
  </tr>
  
</table>


Unfortunately, most of the developers associate Titanium with PhoneGap, because both use HTML/CSS/JS to develop mobile apps, but the **huge difference** is that while PhoneGap renders an app into a WebView, providing a responsive web page as User Interface, Titanium generates a **native User Interface**, using UIKit on iOS and native widgets on Android.

It will follow a video where I will show how to build the application in less than 1 hour.

## How to build and run it yourself

You need to have [Node.js](http://nodejs.org) and Titanium SDK and CLI installed. Moreover you need to have [Xcode 6](https://developer.apple.com/xcode/downloads/) and [Android SDK](http://developer.android.com/sdk/index.html#Other).

Complete the following steps to build and run the app:

1. Download and install [Xcode 6](https://developer.apple.com/xcode/downloads/)
2. Download and install the [Android SDK](http://developer.android.com/sdk/index.html#Other)
3. Install the Titanium CLI with:

  ~~~
  [sudo] npm install -g titanium
  ~~~
4. Install the latest SDK

  ~~~
  ti sdk install
  ~~~
5. Clone this repository:

  ~~~
  git clone https://github.com/EtnaTraining/MoviesDemo.git
  ~~~
6. Enter the `MoviesDemo` directory:

~~~
cd MoviesDemo
~~~

7. Obtain a Rottentomatoes API key from [here](http://developer.rottentomatoes.com) and add it into `app\config.json`
8. Build and run for iOS

~~~
ti build -p ios --tall
~~~

9. Build and run for Android

~~~
ti build -p android`
~~~