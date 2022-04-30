/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  RootTab: NavigatorScreenParams<RootTabParamList> | undefined;
  Onboarding: undefined;
  NotFound: undefined;
};

export type RootTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  ExploreStack: NavigatorScreenParams<ExploreStackParamList>;
  FavoritesStack: NavigatorScreenParams<FavoriteStackParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
};

export type HomeStackParamList = {
  Home: undefined;
  CreateItinerary:
    | {
        steps: number;
        currentStep: number;
      }
    | undefined;
};

export type ExploreStackParamList = {
  Explore: undefined;
  ExploreDetail: undefined;
};

export type FavoriteStackParamList = {
  Favorite: undefined;
  EditFavorite: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
  UpgradeToPro: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> =
  NativeStackScreenProps<HomeStackParamList, Screen>;

export type ExploreStackScreenProps<
  Screen extends keyof ExploreStackParamList
> = NativeStackScreenProps<ExploreStackParamList, Screen>;

export type FavoriteStackScreenProps<
  Screen extends keyof FavoriteStackParamList
> = NativeStackScreenProps<FavoritesStackParamList, Screen>;

export type ProfileStackScreenProps<
  Screen extends keyof ProfileStackParamList
> = NativeStackScreenProps<ProfileStackParamList, Screen>;
