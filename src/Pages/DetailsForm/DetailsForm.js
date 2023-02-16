import {
  // AutoComplete,
  Button,
  // Cascader,
  // Checkbox,
  // Col,
  Form,
  Input,
  // InputNumber,
  // Row,
  Select,
  DatePicker,
} from "antd";

// import phones from "../Phone Number/ISD_Codes";

// import { useState } from "react";
const { Option } = Select;

// const residences = [
//   {
//     value: "",
//     label: "",
//     children: [
//       {
//         value: "",
//         label: "",
//         children: [
//           {
//             value: "",
//             label: "",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: "",
//     label: "",
//     children: [
//       {
//         value: "",
//         label: "",
//         children: [
//           {
//             value: "",
//             label: "",
//           },
//         ],
//       },
//     ],
//   },
// ];

const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select DOB!",
    },
  ],
};

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const DetailsForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: "6rem",
        }}
      >
        <Option value= "+91" >
              IN (+91)
        </Option>
      </Select>
    </Form.Item>
  );
  // const suffixSelector = (
  //   <Form.Item name="suffix" noStyle>
  //     <Select
  //       style={{
  //         width: 70,
  //       }}
  //     >
  //       <Option value="USD">$</Option>
  //       <Option value="CNY">¥</Option>
  //     </Select>
  //   </Form.Item>
  // );
  // const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  // const onWebsiteChange = (value) => {
  //   if (!value) {
  //     setAutoCompleteResult([]);
  //   } else {
  //     setAutoCompleteResult(
  //       [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
  //     );
  //   }
  // };
  // const websiteOptions = autoCompleteResult.map((website) => ({
  //   label: website,
  //   value: website,
  // }));

  return (
    <div>
      <h3>eTenders Portal (ISM)</h3>
      <div className="details_div">
        <p className="tender_title">Online Enrollment of Corporate/Bidder</p>
        <p
          style={{
            fontFamily: "verdana",
            fontWeight: "bold",
            fontSize: "13px",
            padding: "5px 0px 10px 0px",
            color: "#4f4f4f",
          }}
        >
          Corporate Tenderer Details
        </p>

        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          labelWrap
          // initialValues={{
          //   residence: ["zhejiang", "hangzhou", "xihu"],
          //   prefix: "86",
          // }}

          initialValues={{
            prefix: "-Select-",
          }}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <Form.Item
            name="companyName"
            label="Company Name / Licence Holder Name"
            labelCol={{ span: "7", offset: "1" }}
            rules={[
              {
                required: true,
                message: "Please input your Company Name / Licence Holder Name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="RegistrationNumber"
            label="Registration Number"
            rules={[
              {
                required: true,
                message: "Please input your Registration Number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="RegisteredAddress"
            label="Registered Address"
            rules={[
              {
                required: true,
                message: "Please input Registered Address",
              },
            ]}
          >
            <Input.TextArea showCount maxLength={200} />
          </Form.Item>

          <Form.Item
            name="NameOfPartners"
            label="Name of Partners / Directors"
            labelCol={{ span: "7", offset: "1" }}
            rules={[
              {
                required: true,
                message: "Please input Name of Partners / Directors",
              },
            ]}
          >
            <Input.TextArea showCount maxLength={200} />
          </Form.Item>

          <Form.Item
            name="City"
            label="City"
            rules={[
              {
                required: true,
                message: "Please input your City Name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="State"
            label="State"
            rules={[
              {
                required: true,
                message: "Please select State!",
              },
            ]}
          >
            <Select placeholder="select your state">
              <option value="1">Andaman and Nicobar (UT)</option>
              <option value="2">Andhra Pradesh</option>
              <option value="3">Andhra Pradesh (Before Division)</option>
              <option value="4">Arunachal Pradesh</option>
              <option value="5">Assam</option>
              <option value="6">Bihar</option>
              <option value="7">Chandigarh (UT)</option>
              <option value="8">Chhattishgarh</option>
              <option value="9">Dadra and Nagar Haveli (UT)</option>
              <option value="10">Daman and Diu (UT)</option>
              <option value="11">Delhi</option>
              <option value="12">Goa</option>
              <option value="13">Gujarat</option>
              <option value="14">Haryana</option>
              <option value="15">Himachal Pradesh</option>
              <option value="16">Jammu and Kashmir</option>
              <option value="17">Jharkhand</option>
              <option value="18">Karnataka</option>
              <option value="19">Kerala</option>
              <option value="20">Ladakh (UT)</option>
              <option value="21">Lakshadweep (UT)</option>
              <option value="22">Madhya Pradesh</option>
              <option value="23">Maharashtra</option>
              <option value="24">Manipur</option>
              <option value="25">Meghalaya</option>
              <option value="26">Mizoram</option>
              <option value="27">Nagaland</option>
              <option value="28">Orissa</option>
              <option value="29">Pondicherry (UT)</option>
              <option value="30">Punjab</option>
              <option value="31">Rajasthan</option>
              <option value="32">Sikkim</option>
              <option value="33">Tamil Nadu</option>
              <option value="34">Telangana</option>
              <option value="35">Tripura</option>
              <option value="36">Uttarakhand</option>
              <option value="37">Uttar Pradesh</option>
              <option value="38">West Bengal</option>
            </Select>
          </Form.Item>

          <Form.Item
            name="PostalCode"
            label="Postal Code"
            rules={[
              {
                required: true,
                message: "Please input your Postal Code.",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="PANNumber"
            label="PAN Number"
            tooltip="PAN/TAN number must have 10 characters. For eg: AESTG2458A"
            rules={[
              {
                required: true,
                message: "Please input your PAN Number",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="EstablishmentYear"
            label="Establishment year"
            rules={[
              {
                required: true,
                message: "Please select campany's establishment year",
              },
            ]}
          >
            <Select placeholder="Establishment year">
              <option value="0">2023</option>
              <option value="1">2022</option>
              <option value="2">2021</option>
              <option value="3">2020</option>
              <option value="4">2019</option>
              <option value="5">2018</option>
              <option value="6">2017</option>
              <option value="7">2016</option>
              <option value="8">2015</option>
              <option value="9">2014</option>
              <option value="10">2013</option>
              <option value="11">2012</option>
              <option value="12">2011</option>
              <option value="13">2010</option>
              <option value="14">2009</option>
              <option value="15">2008</option>
              <option value="16">2007</option>
              <option value="17">2006</option>
              <option value="18">2005</option>
              <option value="19">2004</option>
              <option value="20">2003</option>
              <option value="21">2002</option>
              <option value="22">2001</option>
            </Select>
          </Form.Item>

          <Form.Item
            name="NatureOfBusiness"
            label="Nature of Business"
            rules={[
              {
                required: true,
                message: "Please input your Nature of Business",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="LegalStatus"
            label="Legal Status"
            rules={[
              {
                required: true,
                message: "Please select campany's Legal Status",
              },
            ]}
          >
            <Select placeholder="Legal Status">
              <option value="Limited Company">Limited Company</option>
              <option value="Undertaking">Undertaking</option>
              <option value="Jointventure">Jointventure</option>
              <option value="Partnership">Partnership</option>
              <option value="Others">Others</option>
            </Select>
          </Form.Item>

          <Form.Item
            name="CompanyCategory"
            label="Company Category"
            rules={[
              {
                required: true,
                message: "Please select Company Category.",
              },
            ]}
          >
            <Select placeholder="Company Category">
              <option value="Micro Unit as per MSME">Micro Unit as per MSME</option>
              <option value="Small Unit as per MSME">Small Unit as per MSME</option>
              <option value="Medium Unit as per MSME">Medium Unit as per MSME</option>
              <option value="Ancillary Unit">Ancillary Unit</option>
              <option value="Project Affected Person of this Company">Project Affected Person of this Company</option>
              <option value="SSI">SSI</option>
              <option value="Others">Others</option>
            </Select>
          </Form.Item>

          <p
            style={{
              fontFamily: "verdana",
              fontWeight: "bold",
              fontSize: "13px",
              padding: "20px 0px 10px 0px",
              color: "#4f4f4f",
            }}
          >
            Contact Details{" "}
            <span>(Enter Company's Contact Person Details)</span>
          </p>

          <Form.Item
            name="Title"
            label="Title"
            rules={[
              {
                required: true,
                message: "Please select title",
              },
            ]}
          >
            <Select placeholder="title">
              <option value="Mrs">Mrs</option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
              <option value="Sri">Sri</option>
            </Select>
          </Form.Item>

          <Form.Item
            name="ContactName"
            label="Contact Name"
            rules={[
              {
                required: true,
                message: "Please input Contact Name.",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="DOB" label="DOB (YYYY-MM-DD)" {...config}>
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="Designation"
            label="Designation"
            rules={[
              {
                required: true,
                message: "Please input Designation",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone"
            tooltip="Phone Details eg: +91 1234567890"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              maxLength={10}
            />
          </Form.Item>


          <Form.Item {...tailFormItemLayout} style={{ marginTop: "2rem" }}>
            <Button  type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default DetailsForm;
