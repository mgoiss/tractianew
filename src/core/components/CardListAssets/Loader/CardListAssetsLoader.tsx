import ContentLoader from "react-content-loader"

const CardListAssetsLoader = () => (
  <ContentLoader
    speed={2}
    width={350}
    height={100}
    viewBox="0 0 350 100"
    backgroundColor="#D9D9D9"
    foregroundColor="#F8F8F8"
  >
    <rect x="0" y="0" rx="3" ry="3" width="350" height="100" />
  </ContentLoader>
)

export default CardListAssetsLoader;