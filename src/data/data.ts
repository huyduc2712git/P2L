import Colors from '@constants/Colors';
import {AnimationObject} from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../assets/animations/lottie_coffee.json'),
    text: 'Tận hưởng hương vị coffee cùng ATHome',
    textColor: Colors.brown_02,
    backgroundColor: '#c1b19b',
  },
  {
    id: 2,
    animation: require('../assets/animations/lottie_music.json'),
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#d4ac7c',
    backgroundColor: '#967555',
  },
  {
    id: 3,
    animation: require('../assets/animations/lottie_coffee.json'),
    text: 'Lorem Ipsum dolor sit amet',
    textColor: '#3c4c44',
    backgroundColor: '#542c04',
  },
];

export default data;