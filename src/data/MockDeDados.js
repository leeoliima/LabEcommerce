import Sputnik from "../img/sputnik.jpg";
import Vostok from "../img/vostok.jpg";
import Luna from "../img/luna.jpg";
import Mariner from "../img/mariner.jpg";
import Estacao from "../img/estacao-espacial-internacional.jpg";
import Telescopio from "../img/telescopio-espacial-hubble.jpg";
import Rosetta from "../img/rosetta.jpg";
import Galileo from "../img/galileo.jpg";
import { Image } from "./StyledMock";

const products = [
  {
    id: "satelite1",
    name: "Sputnik",
    price: 100,
    image: <Image src={Sputnik} />,
  },
  {
    id: "satelite2",
    name: "Vostok 1",
    price: 13,
    image: <Image src={Vostok} />,
  },
  { id: "satelite3", name: "Luna 10", price: 75, image: <Image src={Luna} /> },
  {
    id: "satelite4",
    name: "Mariner 9",
    price: 67,
    image: <Image src={Mariner} />,
  },
  {
    id: "satelite5",
    name: "Estação Espacial Internacional",
    price: 25,
    image: <Image src={Estacao} />,
  },
  {
    id: "satelite6",
    name: "Telescópio Espacial Hubble",
    price: 10,
    image: <Image src={Telescopio} />,
  },
  {
    id: "satelite7",
    name: "Rosetta",
    price: 32,
    image: <Image src={Rosetta} />,
  },
  {
    id: "satelite8",
    name: "Galileo",
    price: 26,
    image: <Image src={Galileo} />,
  },
];

export default products;
