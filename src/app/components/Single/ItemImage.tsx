import Link from "next/link";
import Image from "next/image";

//components
import BackArrow from "../BackArrow";

type Props = {
  showArrow?: boolean;
  imgSrc: string;
};
export default function ItemImage({ showArrow = true, imgSrc }: Props) {
  return (
    <figure className="item-image">
      {showArrow ? (
        <Link href={"/"}>
          <BackArrow className="arrow" />
        </Link>
      ) : null}
      <Image
        src={imgSrc}
        alt="image of selected item"
        height={100}
        width={100}
        unoptimized={true}
        priority
      />
    </figure>
  );
}
