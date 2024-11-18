"use client";

import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

export default function Home() {
  return <div>Home</div>;

  // const { data: accounts, isLoading } = useGetAccounts();

  // if (isLoading) {
  //   return <div>Carregando...</div>;
  // }

  // return (
  //   <div>
  //     {accounts?.map((account) => <div key={account.id}>{account.name}</div>)}
  //   </div>
  // );
}
