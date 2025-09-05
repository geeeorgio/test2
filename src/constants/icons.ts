import HomeSvg from '../assets/icons/home.svg';
import FactsSvg from '../assets/icons/bulb.svg';
import ShareSvg from '../assets/icons/share.svg';
import LikeSvg from '../assets/icons/like.svg';
import LocationSvg from '../assets/icons/location.svg';
import InfoSvg from '../assets/icons/settings.svg';
import StarSvg from '../assets/icons/star.svg';
import CloseSvg from '../assets/icons/close.svg';

export const ICONS = {
  HomeScreen: HomeSvg,
  FactsScreen: FactsSvg,
  InfoScreen: InfoSvg,
  SavedScreen: LikeSvg,
  PlaceScreen: LocationSvg,
  share: ShareSvg,
  star: StarSvg,
  close: CloseSvg,
};

export type IconNames = keyof typeof ICONS;
