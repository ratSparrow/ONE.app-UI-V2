import React from "react";
import { Layout, Typography, Divider, Image, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../../redux/slice/api/blogApi";

const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;

const BlogDetails = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const { data: blog, error, isLoading } = useGetSingleBlogQuery({ id });
  console.log(blog)
  const blogPost = {
    title: "Top 5 Home Cleaning Tips for Busy Professionals",
    date: "October 21, 2024",
    author: "Jane Doe",
    imageUrl: "https://example.com/main-image.jpg",
    content: `
      Maintaining a clean home can be a challenge, especially for busy professionals. 
      In this blog, we’ll cover five essential tips to keep your home tidy and organized with minimal effort.
      
      1. **Set a Cleaning Schedule:** Dedicate a specific time each week for cleaning.
      2. **Declutter Regularly:** Get rid of items you no longer need.
      3. **Use Efficient Tools:** Invest in cleaning tools that save time.
      4. **Delegate Tasks:** Share chores with family members or consider a cleaning service.
      5. **Focus on High-Traffic Areas:** Prioritize spaces that need the most attention.
      
      With these tips, you’ll find it easier to maintain a clean and pleasant home environment.
    `,
  };

  return (
    <Layout style={{ backgroundColor: "#f0f2f5", padding: "40px" }}>
      <Content style={{ maxWidth: "800px", margin: "auto" }}>
        <Button
          type="link"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          style={{ marginBottom: "20px" }}
        >
          Back to Blog
        </Button>
        
        <Title level={2} style={{ marginBottom: "10px" }}>{blog?.data.blogTitle}</Title>
        <Text type="secondary">{blogPost.date} | by {blog?.data.blogWriter}</Text>

        <Divider />

        <Image
          src={blog?.data.writerProfileImg}
          alt={blogPost.title}
          style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }}
        />

        <Paragraph style={{ lineHeight: "1.8", fontSize: "16px" }}>
          {blog?.data.blogDescription}
        </Paragraph>
      </Content>
    </Layout>
  );
};

export default BlogDetails;
