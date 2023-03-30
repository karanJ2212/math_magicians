import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Calculator from '../calculator/calculator';
import Navigation from '../Navbar/Navbar';
import Quote from '../quotes/quote';

it('Test if Home renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test if Calculator renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test if Quote renders correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Test if Home renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
