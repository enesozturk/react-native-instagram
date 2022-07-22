<!-- Banner Image -->

<p align="center">
    <img alt="app icon" height="128" src="./assets/icon.png">
    <h1 align="center">React Native Instagram Page Transition</h1>
</p>

> **Warning**
> This is an experimental project. I have always been impressed with Instagram's iOS page transitions. I tried to implement the same with the following technologies. The result was much better than I expected. There are still some things to do to provide the same experience. Using it in production is not recommended.

## Stack

- [Expo](https://expo.dev/) (SDK 44)
- TypeScript
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
- [FlashList](https://github.com/shopify/flash-list)
- [React Native Fast Image](https://github.com/DylanVann/react-native-fast-image)
- [SWR](https://swr.vercel.app/) for requests
- [Unsplash API](https://unsplash.com/developers) for awesome images.

## Want to try?

If you want to try this on your device, you can install and run the app in a few seconds with the following commands;

Install the packages:

```
yarn install
```

Run the app with the following command.

> **Warning**
> Be sure that Expo CLI is installed.

```bash
yarn ios
```

That's it, enjoy 🤞🏽

## Unsplash API

In this project, I used Unsplash API to get awesome images. To try on your own, you'll need to create and app on Unsplash dashboard and get the Client ID and replace that id in the `/constants/api.ts` with `YOUR_UNSPLASH_CLIENT_ID`.

## Challanges / Todo's

- [ ] Integrate with the [transition api](https://github.com/software-mansion/react-native-reanimated/pull/2561) from Reanimated.
- [ ] Custom list inside details screen. Just like the Instagram, in every detail screen, we can implement new lists by fetching another query. Currently, it's just rendering FlashList with only selected image.
  - [ ] After scrolling down in details list, when close the details screen, we can do show first image by fading or change the original one with the last image scrolled.
- [ ] Integrating this with the React Navigation would be super cool.

## License

The source code is made available under the [MIT license](./LICENSE).

## Show Your Support

If you like this project, please give a star and follow me on Github for more 🤩
