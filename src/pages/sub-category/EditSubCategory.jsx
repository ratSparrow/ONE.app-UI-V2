import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const EditSubCategory = () => {
  return (
    <div>
      <div style={{ margin: 32 }}>
        <Breadcrumb
          items={[
            {
              title: (
                <Link to="/">
                  <HomeOutlined />
                </Link>
              ),
            },
            {
              title: "Sub Category",
            },
            {
              title: <Link to="/sub-category/update">Update Sub Category</Link>,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default EditSubCategory;
