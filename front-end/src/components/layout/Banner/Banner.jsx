import '../Layout.css'

import Card from "react-bootstrap/Card";

import { GetBannerData } from "../../../data/BannerData";
import { bannerImageURL } from "../../../utils/Image-Util";

function Banner() {
  const Banners = GetBannerData();

  return (
    <div className="banner-main">
        {Banners.map((banner) => {
          return (
            <div className="banner" key={banner.id}>
              <Card>
                <Card.Img variant="top" src={bannerImageURL(banner.image)} />
              </Card>
              <div className="banner-content">
              <h2>{banner.title}</h2>
              <p>{banner.text}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Banner;
