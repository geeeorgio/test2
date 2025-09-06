import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

export type OnboardingParamsList = {
  OnboardingScreen: undefined;
  OnboardingScreen1: undefined;
  OnboardingScreen2: undefined;
  OnboardingScreen3: undefined;
};

export type OnboardingNavigationProp = StackNavigationProp<
  OnboardingParamsList,
  'OnboardingScreen'
>;

export const OnboardingStack = createStackNavigator<OnboardingParamsList>();

export type MainTabsStackParamsList = {
  HomeScreen: undefined;
  FactsScreen: undefined;
  PlaceScreen: undefined;
  SavedScreen: undefined;
  InfoScreen: undefined;
};

export type MainStackProp = StackNavigationProp<
  MainTabsStackParamsList,
  'HomeScreen'
>;

export const MainTabs = createBottomTabNavigator<MainTabsStackParamsList>();

export type RootStackParamsList = {
  OnboardingStack: undefined;
  MainTabs: undefined;
  MapScreen: undefined;
};

export type RootStackNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'OnboardingStack'
>;

export const RootStack = createStackNavigator<RootStackParamsList>();
