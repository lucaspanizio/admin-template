import useAuth from "@/data/hook/useAuth";
import Link from "next/link";
import Image from "next/image";

export const Avatar: React.FC = () => {
  const { user } = useAuth();

  return (
    <Link href="/profile">
      <Image
        src={user?.urlImage ?? "/images/avatar.png"}
        width={50}
        height={50}
        alt="Avatar do usuário logado"
        className="ml-3 h-10 w-10 rounded-full cursor-pointer"
      />
    </Link>
  );
};
