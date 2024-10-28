
import { useGetAllBlogQuery } from "../../redux/slice/api/blogApi";
import { Link } from "react-router-dom";

import { Layout, Row, Col, Typography, Button,Card, Spin } from "antd";

const { Title, Text, Paragraph } = Typography;

const blogPosts = [
  {
    title: "Top 5 Home Cleaning Tips",
    date: "October 18, 2024",
    excerpt: "Discover essential tips for maintaining a clean home even with a busy schedule...",
    imageUrl: "https://example.com/image1.jpg",
  },
  {
    title: "Importance of Regular Plumbing Checks",
    date: "October 15, 2024",
    excerpt: "Prevent costly plumbing repairs with these regular maintenance tips...",
    imageUrl: "https://example.com/image2.jpg",
  },
  {
    title: "Choosing a Reliable Home Service Provider",
    date: "October 12, 2024",
    excerpt: "Find out how to choose the best service provider for your home needs...",
    imageUrl: "https://example.com/image3.jpg",
  },
];

const AllBlogs = () => {
  const { data, isLoading } = useGetAllBlogQuery();

  const blogs = data?.data;
  console.log("blogs", blogs);
  return (
    <>
      {isLoading ? (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      ) : (
        <Layout style={{ padding: "40px 0" }}>
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "0 20px" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "40px" }}>
        Latest from Our Blog
      </Title>

      <Row gutter={[24, 24]}>
        {blogs.map((post, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card
              hoverable
              cover={
                <img
                  alt={post.blogTitle}
                  src={post.writerProfileImg}
                  style={{ height: "200px", objectFit: "cover" }}
                />
               
              }
              style={{ borderRadius: "8px", height:"400px" }}
            >
              <Title level={4}>{post.blogTitle}</Title>
              <Text type="secondary">{post.date}</Text>
              <Paragraph ellipsis={{ rows: 2 }} style={{ margin: "10px 0" }}>
                {post.blogDescription}
              </Paragraph>
             <Link to={`/blog/details/${post._id}`}>
             <Button type="link">Read More</Button>
             </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </Layout>
      )}
    </>
  );
};

export default AllBlogs;
