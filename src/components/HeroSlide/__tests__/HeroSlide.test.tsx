import HeroSlide from '../HeroSlide';
import renderer from 'react-test-renderer';

interface ISlide {
  heading: string;
  subheading: string;
  link: string;
  id: number;
  image: number;
}
const slide: ISlide = {
  id: 0,
  heading: `STAG Q-generation`,
  subheading: `Instalacje gazowe najnowszej generacji!`,
  link: `/instalacje-gazowe`,
  image: 1,
};

describe(`<HeroSlide />`, () => {
  it(`should render properly`, async () => {
    const Hero = renderer
      .create(<HeroSlide slide={slide} image={null} />)
      .toJSON();
    expect(Hero).toMatchSnapshot();
  });
});
