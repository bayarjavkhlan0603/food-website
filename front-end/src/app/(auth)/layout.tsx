import { AuthBigImage } from "../components/AuthBigImage";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-center w-[40%]">{children}</div>

      <div className="w-[60%]">
        <AuthBigImage />
      </div>
    </div>
  );
}
