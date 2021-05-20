import ContentLoader from "react-content-loader"

const CardListLoader = () => (
  <ContentLoader
    speed={2}
    width={350}
    height={60}
    viewBox="0 0 350 60"
    backgroundColor="#D9D9D9"
    foregroundColor="#F8F8F8"
  >
    <rect x="0" y="0" rx="3" ry="3" width="350" height="60" />
  </ContentLoader>
)

export default CardListLoader;