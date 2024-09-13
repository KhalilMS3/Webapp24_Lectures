type TitleProps = {
  title?: string;
  username?: string;
};

export default function Title(props: TitleProps) {
  const { title = "Default title", username = "username" } = props;
  return (
    <>
      <h2>{title}</h2>
      <p>{username}</p>
    </>
  );
}
