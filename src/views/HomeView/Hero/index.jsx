import { HeroLogo, HeroLogoWrapper, HeroWrapper } from "./styles";

const Hero = () => {
  return (
    <HeroWrapper $bgImage={"/src/assets/hero_bg.webp"}>
      <HeroLogoWrapper>
        <HeroLogo src="/src/assets/hero_logo.webp" alt="hero" />
      </HeroLogoWrapper>
    </HeroWrapper>
  );
};

export default Hero;
