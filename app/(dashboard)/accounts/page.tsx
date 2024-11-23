"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Payment, columns } from "./columns";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { Plus } from "lucide-react";
import { useNewAccount } from "@/features/accounts/hooks/use-new-accounts";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pendente",
      email: "m@example.com",
    },
  ];
}

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "falhou",
    email: "m@example.com",
  },
  {
    id: "75451d3f",
    amount: 200,
    status: "pendente",
    email: "a@example.com",
  },
  {
    id: "4568asd21",
    amount: 300,
    status: "sucesso",
    email: "m@example.com",
  },
  // {
  //   id: "9865das23",
  //   amount: 400,
  //   status: "falhou",
  //   email: "m@example.com",
  // },
  // {
  //   id: "4568asd21",
  //   amount: 300,
  //   status: "pendente",
  //   email: "b@example.com",
  // },
  // {
  //   id: "4568asd21",
  //   amount: 300,
  //   status: "sucesso",
  //   email: "m@example.com",
  // },
  // {
  //   id: "9865das23",
  //   amount: 400,
  //   status: "falhou",
  //   email: "m@example.com",
  // },
  // {
  //   id: "4568asd21",
  //   amount: 300,
  //   status: "pendente",
  //   email: "m@example.com",
  // },
  // {
  //   id: "4568asd21",
  //   amount: 300,
  //   status: "sucesso",
  //   email: "m@example.com",
  // },
  // {
  //   id: "9865das23",
  //   amount: 400,
  //   status: "falhou",
  //   email: "m@example.com",
  // },
  // {
  //   id: "4568asd21",
  //   amount: 300,
  //   status: "pendente",
  //   email: "m@example.com",
  // },
  // {
  //   id: "4568asd21",
  //   amount: 300,
  //   status: "sucesso",
  //   email: "m@example.com",
  // },
  // {
  //   id: "9865das23",
  //   amount: 400,
  //   status: "falhou",
  //   email: "m@example.com",
  // },
  // {
  //   id: "4568asd21",
  //   amount: 300,
  //   status: "pendente",
  //   email: "m@example.com",
  // },
];

const AccountsPage = () => {
  const newAccount = useNewAccount();

  return (
    <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="line-clamp-1 text-2xl">Contas</CardTitle>
          <Button onClick={newAccount.onOpen} size="sm">
            <Plus className="mr-2 size-4" />
            Adicionar conta
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            onDelete={() => {}}
            filterKey="emails"
            columns={columns}
            data={data}
            disabled={false}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountsPage;
