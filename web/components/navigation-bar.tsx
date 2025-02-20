import Header from './elements/header';
import NavigationBarBrand from './shared/navigation-bar-brand';
import NavigationBarMenu from './shared/navigation-bar-menu';

export default function NavigationBar() {
  return (
    <Header>
      <NavigationBarBrand />
      <NavigationBarMenu />
    </Header>
  );
}
