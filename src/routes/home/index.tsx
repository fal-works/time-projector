import { FunctionalComponent, h } from "preact";
import style from "./style.css";

interface Props {
  query: string;
}

const Home: FunctionalComponent<Props> = (props: Props) => {
  props;
  return (
    <div class={style.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
      {[0, 1, 2].map((n, index) => (
        <p key={index}>{n}</p>
      ))}
    </div>
  );
};

export default Home;
