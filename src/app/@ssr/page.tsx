import ExampleContainer from "@/components/example-container";
import SSR from "@/components/examples/ssr";

const Page = async () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  await new Promise((resolve) => setTimeout(resolve, 0));

  return (
    <ExampleContainer title="SSR">
      <SSR count={randomNumber} />
    </ExampleContainer>
  );
};

export default Page;
