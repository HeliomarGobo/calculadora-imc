import { View, Image, SafeAreaView } from "react-native";

import Logo from "../../assets/images/logo-bda.png";

import { HeaderContainer, HeaderContent, HeaderTitle, HeaderSubtitle } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <SafeAreaView />
      <HeaderContent>
        <Image width={10} height={10} source={Logo} />
        <View>
          <HeaderTitle>Body Mass Index</HeaderTitle>
          <HeaderSubtitle>Calculator</HeaderSubtitle>
        </View>
      </HeaderContent>
      </HeaderContainer>
  );
};
export default Header;
