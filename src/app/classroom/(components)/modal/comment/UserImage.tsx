import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import { getMediaURL } from "@/hooks/lecture/useGetMediaURL";
import thumbnail from "../../../../../../public/images/thumnail.png";

interface UserImageProps {
  profileImage?: string | null;
  size?: "default" | "large";
}

const UserImage: FC<UserImageProps> = ({ profileImage, size = "default" }) => {
  const [profileImageURL, setProfileImageURL] = useState<string | null>(null);

  useEffect(() => {
    if (profileImage) {
      getMediaURL(profileImage).then(setProfileImageURL).catch(console.error);
    }
  }, [profileImage]);

  const wrapperClass = size === "default" ? "w-7 h-7" : "w-10 h-10";

  return (
    <div className={`${wrapperClass} relative rounded-full flex-shrink-0`}>
      <Image
        src={profileImageURL || thumbnail}
        alt="사용자 이미지"
        sizes="(max-width: 768px) 100vw"
        fill={true}
        className="rounded-full"
      />
    </div>
  );
};

export default UserImage;
