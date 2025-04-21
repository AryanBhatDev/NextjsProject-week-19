import Link from "next/link";

export default function Home() {
  return <div className="text-lg w-screen h-screen flex items-center 
  justify-center">
    <div className="flex flex-col">
      Todo Application
      <Link href ="/signup">Signup</Link>
      <Link href ="/signin">Signin</Link>
    </div>
  </div>
}
