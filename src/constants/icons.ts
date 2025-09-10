import { SvgProps } from 'react-native-svg';
import BackSvg from '../assets/icons/back.svg';
import FactsSvg from '../assets/icons/bulb.svg';
import CloseSvg from '../assets/icons/close.svg';
import HomeSvg from '../assets/icons/home.svg';
import LikeSvg from '../assets/icons/like.svg';
import LocationSvg from '../assets/icons/location.svg';
import InfoSvg from '../assets/icons/settings.svg';
import ShareSvg from '../assets/icons/share.svg';
import StarSvg from '../assets/icons/star.svg';

export interface Icon {
  name: string;
  component: React.FC<SvgProps>;
  type: string;
}

export const ICONS: Icon[] = [
  { name: 'HomeScreen', component: HomeSvg, type: 'stroke' },
  { name: 'FactsScreen', component: FactsSvg, type: 'stroke' },
  { name: 'InfoScreen', component: InfoSvg, type: 'fill' },
  { name: 'SavedScreen', component: LikeSvg, type: 'stroke' },
  { name: 'PlaceScreen', component: LocationSvg, type: 'fill' },
  { name: 'share', component: ShareSvg, type: 'fill' },
  { name: 'star', component: StarSvg, type: 'fill' },
  { name: 'close', component: CloseSvg, type: 'fill' },
  { name: 'back', component: BackSvg, type: 'fill' },
];

export type IconName = (typeof ICONS)[number]['name'];
