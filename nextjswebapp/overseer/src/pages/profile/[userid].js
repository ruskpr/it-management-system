import { useRouter } from "next/router";

export default function UserProfilePage() {
  const router = useRouter();

  const userid = router.query.userid;

  return <h1>{userid}</h1>;
}
