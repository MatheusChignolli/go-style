import { Stack } from "@mui/material";
import Frame from "../../components/Frame";
import Header from "../../components/Header";
import BottomMenu from "./components/BottomMenu";
import TitleWithLink from "../../components/TitleWithLink";
import ImageCard from "../../components/ImageCard";
import aiLooksOfDay1 from "../../assets/images/png/mocks/aiLooksOfDay1.png";
import aiLooksOfDay2 from "../../assets/images/png/mocks/aiLooksOfDay2.png";
import aiLooksOfDay3 from "../../assets/images/png/mocks/aiLooksOfDay3.png";
import wardrobeHome1 from "../../assets/images/png/mocks/wardrobeHome1.png";
import wardrobeHome2 from "../../assets/images/png/mocks/wardrobeHome2.png";
import wardrobeHome3 from "../../assets/images/png/mocks/wardrobeHome3.png";
import wardrobeHome4 from "../../assets/images/png/mocks/wardrobeHome4.png";
import homeNews1 from "../../assets/images/png/mocks/homeNews1.png";
import homeNews2 from "../../assets/images/png/mocks/homeNews2.png";
import homeNews3 from "../../assets/images/png/mocks/homeNews3.png";
import homeNews4 from "../../assets/images/png/mocks/homeNews4.png";
import TakePhoto from "./components/TakePhoto";

const homeImages = {
  aiLooksOfDay: [
    {
      image: aiLooksOfDay1,
    },
    {
      image: aiLooksOfDay2,
    },
    {
      image: aiLooksOfDay3,
    },
    {
      image: aiLooksOfDay1,
    },
    {
      image: aiLooksOfDay2,
    },
    {
      image: aiLooksOfDay3,
    },
  ],
  wardrobeHome: [
    {
      image: wardrobeHome1,
    },
    {
      image: wardrobeHome2,
    },
    {
      image: wardrobeHome3,
    },
    {
      image: wardrobeHome4,
    },
  ],
  homeNews: [
    {
      image: homeNews1,
      label: "Tendências da Estação",
    },
    {
      image: homeNews2,
      label: "Tendências personalizadas pelo Estilo",
    },
    {
      image: homeNews3,
      label: "Tendências Baseadas em cores",
    },
    {
      image: homeNews4,
      label: "Looks direto das passarelas",
    },
  ],
};

function Home() {
  return (
    <Frame>
      <Header />
      <Stack pt={11} flex={1} gap={2} overflow="auto" pb={12}>
        <Stack gap={1}>
          <TitleWithLink title="Destaques do seu Closet" url="/" />
          <TakePhoto />
        </Stack>
        <Stack gap={0.5}>
          <TitleWithLink title="Look do dia gerados com IA" url="/" />
          <Stack
            px={1.5}
            flexDirection="row"
            sx={{
              overflowX: "auto",
              scrollbarWidth: "none",
            }}
          >
            {homeImages.aiLooksOfDay.map(({ image }, index) => (
              <ImageCard
                key={`${index}-${image}`}
                width={100}
                height={220}
                image={image}
              />
            ))}
          </Stack>
        </Stack>
        <Stack gap={0.5}>
          <TitleWithLink title="Destaques do Guarda-Roupa" url="/" />
          <Stack
            px={1.5}
            flexDirection="row"
            sx={{
              overflowX: "auto",
              scrollbarWidth: "none",
            }}
          >
            {homeImages.wardrobeHome.map(({ image }, index) => (
              <ImageCard
                key={`${index}-${image}`}
                width={147}
                height={151}
                image={image}
              />
            ))}
          </Stack>
        </Stack>
        <Stack gap={0.5}>
          <TitleWithLink title="Tendências e Novidades" url="/" />
          <Stack
            px={1.5}
            flexDirection="row"
            sx={{
              overflowX: "auto",
              scrollbarWidth: "none",
            }}
          >
            {homeImages.homeNews.map(({ image, label }, index) => (
              <ImageCard
                key={`${index}-${image}`}
                width={225}
                height={100}
                image={image}
                label={label}
              />
            ))}
          </Stack>
        </Stack>
        <Stack gap={0.5}>
          <TitleWithLink title="Peças que Faltam no Guarda-Roupa" url="/" />
          <Stack
            px={1.5}
            flexDirection="row"
            sx={{
              overflowX: "auto",
              scrollbarWidth: "none",
            }}
          >
            {homeImages.wardrobeHome.map(({ image }, index) => (
              <ImageCard
                key={`${index}-${image}`}
                width={147}
                height={151}
                image={image}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
      <BottomMenu />
    </Frame>
  );
}

export default Home;
