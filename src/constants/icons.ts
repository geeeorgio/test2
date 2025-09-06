import HomeSvg from '../assets/icons/home.svg';
import FactsSvg from '../assets/icons/bulb.svg';
import ShareSvg from '../assets/icons/share.svg';
import LikeSvg from '../assets/icons/like.svg';
import LocationSvg from '../assets/icons/location.svg';
import InfoSvg from '../assets/icons/settings.svg';
import StarSvg from '../assets/icons/star.svg';
import CloseSvg from '../assets/icons/close.svg';

export const ICONS = {
  HomeScreen: { component: HomeSvg, type: 'stroke' },
  FactsScreen: { component: FactsSvg, type: 'stroke' },
  InfoScreen: { component: InfoSvg, type: 'fill' },
  SavedScreen: { component: LikeSvg, type: 'stroke' },
  PlaceScreen: { component: LocationSvg, type: 'fill' },
  share: { component: ShareSvg, type: 'fill' },
  star: { component: StarSvg, type: 'fill' },
  close: { component: CloseSvg, type: 'fill' },
};

export type IconNames = keyof typeof ICONS;
