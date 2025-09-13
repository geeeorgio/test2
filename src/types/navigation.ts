import type { MaterialTopTabNavigationProp } from 'node_modules/@react-navigation/material-top-tabs/lib/typescript/src/types';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import type { StackNavigationProp } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';

// Onboarding
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

// Bottom tabs
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

// Root stack
export type RootStackParamsList = {
  OnboardingStack: undefined;
  MainTabs: undefined;
};

export type RootStackNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'OnboardingStack'
>;

export const RootStack = createStackNavigator<RootStackParamsList>();

// Places stack

export type PlacesStackParamsList = {
  MainPlaceScreen: undefined;
  PlaceDetailScreen: { id: string };
};

export type PlacesStackNavigationProp = StackNavigationProp<
  PlacesStackParamsList,
  'MainPlaceScreen'
>;

export const PlacesStack = createStackNavigator<PlacesStackParamsList>();

// Material tabs

export type MaterialParamsList = {
  Details: { description: string };
  Fact: { funFact?: string; interestingFact?: string };
};

export type MaterialNavigationProp = MaterialTopTabNavigationProp<
  MaterialParamsList,
  'Details'
>;

export const MaterialTab = createMaterialTopTabNavigator<MaterialParamsList>();
