import { useMeQuery } from "../generated/graphql";
import { useRouter } from "next/router";
import { useEffect } from "react";
import login from "../pages/login";

export const useIsAuth = () => {
  const { data, loading } = useMeQuery();
  const router = useRouter();
  useEffect( () => {
    if (!loading && !data?.me) {
      router.replace("/login?next=" + router.pathname);
      // router.replace("/login");
    }
  }, [loading, data, router]);
  return data
};
