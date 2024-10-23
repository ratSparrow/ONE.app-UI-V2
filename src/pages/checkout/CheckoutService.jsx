import { Alert, Button, Card, Col, DatePicker, Descriptions, Divider, List, Row, Spin, Tag, Typography } from 'antd';

import CustomForm from '../../components/forms/CustomForm';
import CustomInput from '../../components/forms/CustomInput';
import CustomSelectedField from '../../components/forms/CustomSelectField';
import { useAddOrderMutation } from '../../redux/slice/api/orderApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBaseUrl } from '../../helpers/config/envConfig';
import Loading from '../../ui/common/Loading';
const { Text } = Typography;


const CheckoutService = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [packages, setPackages] = useState([]);
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState("");
  const [addOrder] = useAddOrderMutation();
  const url = `${getBaseUrl()}/api/v1/packages/${id}`;
  const dateString = selectedDate.$d;
  const date = new Date(dateString);
  const formattedDate = date.toDateString();
  console.log(packages.data)

  useEffect(() => {
    setLoading(true);
    if (id) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setPackages(data);
          setLoading(false);
        });
    }
  }, [id]);

  const onChange = (dateString) => {
    setSelectedDate(dateString);
  };
  const onSubmit = async (data) => {
    let res
    const mData = {
      date: formattedDate,
      slot: data.slot,
      user: data.user,
      phone: data.phoneNumber,
      address: {
        house: data.address.house,
        road: data.address.road,
        block: data.address.block,
        sector: data.address.sector,
        area: data.address.sector,
      },
      order: id,
      status: "pending",
    };

    setLoading(true)
    try {

      res = await addOrder(mData);
      console.log(res.data.message)
      setSuccessMessage(res.data.message)

      setLoading(false)
    } catch (error) {
      setErrorMessage(res.error.data.message)
      setLoading(false)
    }
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>


      {
        loading === true ? <Loading /> :

          <Card
            title={`Order Details: ${packages.data?.name}`}
            bordered={true}
            style={{ margin: '16px auto', padding: '20px' }}
          >
            {/* Service Information */}
            <Descriptions title="Service Information" bordered column={1}>
              <Descriptions.Item label="Service Name">{packages.data?.serviceId.name}</Descriptions.Item>
              <Descriptions.Item label="Sub-Service Name">{packages.data?.subServiceId.name}</Descriptions.Item>
              <Descriptions.Item label="Price">{`$${packages.data?.price}`}</Descriptions.Item>
              <Descriptions.Item label="Unit">{packages.data?.unit}</Descriptions.Item>
              <Descriptions.Item label="Warranty">{packages.data?.subServiceId.warrantyHour} Hours</Descriptions.Item>
              <Descriptions.Item label="Total Rating">{packages.data?.subServiceId.totalRating} stars</Descriptions.Item>
              <Descriptions.Item label="Discount">{packages.data?.discount ? `${packages.data?.discount}%` : 'No discount'}</Descriptions.Item>
              <Descriptions.Item label="Service Description">
                {packages.data?.subServiceId.description}
              </Descriptions.Item>
            </Descriptions>


            <Divider />
            {/* Features List */}
            <h3>Features</h3>
            <List
              bordered
              dataSource={packages.data?.subServiceId.features}
              renderItem={(item) => (
                <List.Item>
                  <Tag color="blue">{item}</Tag>
                </List.Item>
              )}
            />

            <Divider />


            {/* Included and Excluded Options */}
            <Descriptions title="Options" bordered column={1}>
              <Descriptions.Item label="Included Options">
                <List
                  dataSource={packages.data?.subServiceId.includedOption}
                  renderItem={(item) => (
                    <List.Item>
                      <Tag color="green">{item}</Tag>
                    </List.Item>
                  )}
                />
              </Descriptions.Item>

              <Descriptions.Item label="Excluded Options">
                <List
                  dataSource={packages.data?.subServiceId.excludedOption}
                  renderItem={(item) => (
                    <List.Item>
                      <Tag color="red">{item}</Tag>
                    </List.Item>
                  )}
                />
              </Descriptions.Item>
            </Descriptions>

            <Divider />
            {/* Terms and Conditions */}
            <h3>Terms and Conditions</h3>
            <List
              bordered
              dataSource={packages.data?.subServiceId.termsCondition}
              renderItem={(item) => (
                <List.Item>
                  <strong>{item.title}</strong>: {item.details}
                </List.Item>
              )}
            />

            <Divider />

            {/* FAQ Section */}
            <h3>FAQ</h3>
            <List
              bordered
              dataSource={packages.data?.subServiceId.faq}
              renderItem={(item) => (
                <List.Item>
                  <strong>Q:</strong> {item.query}
                  <br />
                  <strong>A:</strong> {item.reply}
                </List.Item>
              )}
            />
          </Card>

      }

      <div style={{ margin: "16px 0" }}>
        <h2 style={{ margin: 16 }}>Create Order</h2>
        <CustomForm submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: 8,
            }}
          >
            <h3 style={{ marginBottom: 10 }}>Schedule</h3>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={12}>
                <DatePicker style={{ width: 200 }} onChange={onChange} />
              </Col>

              <Col className="gutter-row" span={12}>
                {" "}
                <CustomSelectedField
                  name="slot"
                  placeholder="Select a slot"
                />
              </Col>
            </Row>
          </div>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: 8,
              marginTop: 16,
            }}
          >
            <h3 style={{ marginBottom: 10 }}>Contact Person</h3>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={12}>
                {" "}
                <CustomInput
                  name="user"
                  label="Name"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>

              <Col className="gutter-row" span={12}>
                {" "}
                <CustomInput
                  name="phoneNumber"
                  label="Phone"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
            </Row>
          </div>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: 8,
              marginTop: 16,
            }}
          >
            <h3 style={{ marginBottom: 10 }}>Address</h3>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={12}>
                {" "}
                <CustomInput
                  name="address.house"
                  label="House No."
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={12}>
                {" "}
                <CustomInput
                  name="address.road"
                  label="Road No. /Name"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={12}>
                {" "}
                <CustomInput
                  name="address.block"
                  label="Block"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={12}>
                {" "}
                <CustomInput
                  name="address.sector"
                  label="Sector"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={12}>
                {" "}
                <CustomInput
                  name="address.area"
                  label="Area"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
            </Row>
            {
              loading === true ? <Spin size="small" /> :
                <Button
                  style={{ marginTop: 8 }}
                  size="small"
                  htmlType="submit"
                  type="primary"
                >
                  Place Order
                </Button>
            }
          </div>
        </CustomForm>
        {successMessage && (

          <Alert
            message="Success"
            description={successMessage}
            type="success"
            showIcon
            style={{ marginTop: 10 }}
          />

        )}
        {errorMessage && (

          <Alert
            message="Error"
            description={errorMessage}
            type="error"
            showIcon
            style={{ marginTop: 10 }}
          />
        )}
      </div>



    </div>
  );
};

export default CheckoutService;
