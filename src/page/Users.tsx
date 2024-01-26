/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import CommonTable from "../components/ui/CommonTable";
import { useUsersQuery } from "../redux/api/UsersApi";

export default function Users() {
  const query: Record<string, any> = {};
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const { data, isLoading } = useUsersQuery({ ...query });
  console.log(data?.data);
  const userData = data?.data;
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "USER",
      dataIndex: "first_name",
      render: (text: string, record: any) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={record.avatar} // Assuming the property name is 'avatar_url'
            alt="Avatar"
            style={{ width: 30, height: 30, borderRadius: "50%", marginRight: 10 }}
          />
          <span>{`${text} ${record.last_name}`}</span>
        </div>
      ),
    },
    {
      title: "EMAIL",
      dataIndex: "email",
    },
    {
      title: "OPTIONS",
      dataIndex: "id",
      render: function () {
        return (
          <>
            ...
          </>
        );
      },
    },
  ];
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  return (
    <div>
      <h1
        style={{
          color: "#323B4B",
          fontSize: "26px",
          margin: "48px 0",
        }}
      >
        Users List
      </h1>
      <CommonTable
        loading={isLoading}
        dataSource={userData}
        columns={columns}
        pageSize={size}
        // totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
}
