import Spotlight from "@/components/Spotlight";

export default function SportLightPage({ data }) {
  function RandomIndexGenerator(length) {
    return Math.floor(Math.random() * length);
  }

  console.log(RandomIndexGenerator(data.length));

  const { imageSource, artist } = data[RandomIndexGenerator(data.length)];

  console.log(imageSource, artist);
  return (
    <main>
      <Spotlight image={imageSource} artist={artist} />
    </main>
  );
}
