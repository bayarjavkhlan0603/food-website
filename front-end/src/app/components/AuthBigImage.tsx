import Image from "next/image";

export const AuthBigImage = () => {
  return (
    <div className="p-5">
      <div>
        <Image
          className="w-full h-screen object-cover rounded-2xl"
          width={1000}
          height={100}
          src="/login.png"
          alt=""
        />
      </div>
    </div>
  );
};
