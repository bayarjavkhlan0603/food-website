import { Navigation } from "../components/NaviggationAdminPage";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex justify-around">
      <div className=" h-screen bg-[#FFF] w-[13%]">
        <Navigation />
      </div>
      <div className="bg-[#F4F4F5] w-[87%] pl-6 pt-6 pb-13 pr-10 flex flex-col gap-6">
        <div className="flex justify-end">
          <img
            className="w-9 h-9 rounded-[9999px]"
            src="https://s3-alpha-sig.figma.com/img/9d6d/cfc1/fb8cd40116ca161e463af1ee400a729e?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VpB7x1mfmNhpBmzKc2-WWwwRTpojHvVaAMruSqK10ODfOvqWijWnuOtslsLDUuC2PNepvVDMtW01vcJN3W14IK4Hzt7t2zGQnM2DB-Ryki9-iCXUoQmYZ8CqCNZJ1oypNSJEzIvSla7jGx-vNI6k0SWuGScH8TRKzUAbME8Gb80nUcaO7lxvDD-h4q0LzBxbY6VqvffnsS4WOtMTLmJ4xQvaOybtVeOfLrQB2zMz-GYluTz470rlS2qG~H-97PlIOy9QRMuTPMBcBV8BreAZNNyM2gozYFS6QVYbwlGLw~HsUgcx-UOMt5jDIWaOYt-gxtrAWQ8nT~B6-623SPX1BA__"
          />
        </div>
        {children}
      </div>
    </div>
  );
}
