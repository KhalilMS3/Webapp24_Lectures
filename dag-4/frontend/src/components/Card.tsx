import Title from "./Title";

type CardProps = {
  title: string;
  description: string;
  username: string;
  setUsername: any;
};
export default function Card(props: CardProps) {
  const {
    title = "Default title",
    description = "No description ",
    username = "",
    setUsername = "No username",
  } = props;
  const changeUsername = () => {
    setUsername("Changed Titled");
  };
  return (
    <article>
      <Title title={title} username={username} />
      <p>{description}</p>
      <button onClick={changeUsername}> Log out </button>
    </article>
  );
}
