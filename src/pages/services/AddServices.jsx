

const AddService = () => {
  const [addServices] = useAddServicesMutation();
  const [message, setMessage] = useState("");
  const onSubmit = async (data) => {
    try {
      const res = await addServices(data);
      console.log(res);
      setMessage(res.data.message);
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
                <Link href="/">
                  <HomeOutlined />
                </Link>
              ),
            },
            {
              title: "Service",
            },
            {
              title: <Link href="/services/add-service">Add Service</Link>,
            },
          ]}
        />
      </div>
      <div>
        <div>
          <Typography style={{ fontSize: 22, fontWeight: 700 }}>
            Create Service
          </Typography>
        </div>
        <Form submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: 8,
            }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={8}>
                {" "}
                <FormInput
                  name="name"
                  label="Service Name"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={8}>
                {" "}
                <FormInput
                  name="image"
                  label="Image"
                  type="string"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
            </Row>
            <Button
              style={{ marginTop: 8 }}
              size="small"
              htmlType="submit"
              type="primary"
            >
              Create
            </Button>
          </div>
        </Form>
      </div>
      {message && (
        <Alert style={{ margin: 16 }} message={message} type="success" />
      )}
    </div>
  );
};

export default AddService;

AddService.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
