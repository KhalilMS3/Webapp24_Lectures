import { useState } from "react";
import Card from "./components/Card";


export default function App() {
  const [username, setUsername] = useState("New Title");

  const products = [
    {
      id: 1,
      title: "CardTitle",
      description: "CardDescription",
    },
    {
      id: 2,
      title: "CardTitle Two",
      description: "CardDescription TWo",
    },
  ];
  return (
    <>
      <section>
        {products?.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            description={product.title}
            username={username}
            setUsername={setUsername}
          />
        ))}

        {/* 
        <Title title="Produkter" />
        <Title title="Medlemstilbud" />
         */}
      
      </section>
    </>
  );
}
