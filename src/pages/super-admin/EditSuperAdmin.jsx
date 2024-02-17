import { Breadcrumb } from "antd";
import { useGetUserProfileQuery, useUpdateUserProfileMutation } from "../../redux/slice/api/userApi";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import EditProfile from "../../components/user/EditProfile";

const EditSuperAdmin = () => {
  const { data } = useGetUserProfileQuery();
  console.log(data?.data);
  const previousData = data?.data;

  const [updateUserProfile] = useUpdateUserProfileMutation();
  const onSubmit = async (data) => {
    try {
      const res = await updateUserProfile(data);
      console.log(res);
      if (res.data.data.statusCode === 200) {
        // return messageApi.open({
        //   type: "success",
        //   content: `${res.data.data.message}`,
        // });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ margin: 32 }}>
      <div>
        <Breadcrumb
          items={[
            {
              title: (
                <Link to="/">
                  <HomeOutlined/>
                </Link>
              ),
            },
            {
              title: "Super Admin",
            },
            {
              title: <Link to="/super-admin/update">Update Account</Link>,
            },
          ]}
        />
      </div>
      <EditProfile data={previousData} onSubmit={onSubmit} />
    </div>
  );
};

export default EditSuperAdmin;


