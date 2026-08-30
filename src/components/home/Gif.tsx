import { ThreeDMarquee } from "../ui/3d-marquee";

export function Gif() {
  const images = [
    "https://i.pinimg.com/originals/98/02/61/9802617bbe337210e87a3245e6349710.gif",
    "https://i.pinimg.com/originals/60/e7/af/60e7af6c4c0e65c95b3016b273847dc9.gif",
    "https://i.pinimg.com/originals/00/dc/be/00dcbef2478116f39637f4493d263420.gif",
    "https://i.pinimg.com/originals/f2/c6/ba/f2c6ba5ecacebfd7c56e83b60e5b2e9e.gif",
    "https://i.pinimg.com/originals/a1/a6/6c/a1a66c90e7884ebc43e8506234655df5.gif",
    "https://i.pinimg.com/originals/d8/56/1e/d8561e8998a67bb74795ac22f0b28021.gif",
    "https://i.pinimg.com/originals/27/d8/0e/27d80eca9c8246357149c1315ed2fc25.gif",
    "https://i.pinimg.com/originals/8e/69/60/8e696084f36bcac49dba529498ed7119.gif",
    "https://i.pinimg.com/originals/3e/b1/53/3eb1532f87ee35e0d54805774b86f8b6.gif",
    "https://i.pinimg.com/originals/ef/fc/7e/effc7e79a5a82bb665033aef6f1ac67e.gif",
    "https://i.pinimg.com/originals/12/28/e9/1228e930999b8e2beeab65c8df5a98df.gif",
    "https://i.pinimg.com/originals/e2/ac/cb/e2accbd8b2be19937e464259e3828dca.gif",
    "https://i.pinimg.com/originals/55/56/33/5556337a9f822696a13d7cc5f9159ee3.gif",
    "https://i.pinimg.com/originals/c8/59/0d/c8590df6490391836f2e78732d27fcf4.gif",
    "https://i.pinimg.com/originals/8c/55/58/8c55589f5eef5722c406d5a29cf42dcf.gif",
    "https://i.pinimg.com/originals/b6/2a/59/b62a599a9870b68960231e2259eca694.gif",
    "https://i.pinimg.com/originals/6d/71/e2/6d71e24e6d6ef7bf33b36637c0c117c2.gif",
    "https://i.pinimg.com/originals/9c/f5/0c/9cf50c5cde5a32614e100cb44bb1fe2f.gif",
    "https://i.pinimg.com/originals/63/e1/b9/63e1b9f5fecf61c03c4f8396fc5b47a1.gif",
    "https://i.pinimg.com/originals/af/97/5a/af975a5c338c2d8b89598dc9211ed3d4.gif",
    "https://i.pinimg.com/originals/d3/f7/e3/d3f7e3c37d8fb937ad1762578048c2d2.gif",
    "https://i.pinimg.com/originals/da/f8/da/daf8da8dc5af87b72c1242bb2bf77551.gif",
    "https://i.pinimg.com/originals/4b/cf/aa/4bcfaacc3c497169cd788c574fb446ba.gif",
    "https://i.pinimg.com/originals/49/ab/24/49ab24125bf09bad9a774628b1b1fd70.gif",
    "https://i.pinimg.com/originals/50/f9/47/50f9471c5cc7f9675f407b09f7a8db8d.gif",
    "https://i.pinimg.com/originals/dc/f3/7a/dcf37a91bd27c05db5cfa4906176513d.gif",
    "https://i.pinimg.com/originals/70/10/78/7010784f339c46c69eb4ec9a90fe68b8.gif",
    "https://i.pinimg.com/originals/8b/db/89/8bdb893b8a9eb36ceb1995c861d7063b.gif",
    "https://i.pinimg.com/originals/b2/f3/eb/b2f3eb41b12064f908ecd1a337e46658.gif",
    "https://i.pinimg.com/originals/3a/35/b6/3a35b6bb7f00fe6346ff81559d36e945.gif",
    "https://i.pinimg.com/originals/d9/23/21/d92321190c1a18eb974c093122ceece0.gif",
  ];

  return (
    <div className="w-full h-full">
      <ThreeDMarquee images={images} />
    </div>
  );
}
