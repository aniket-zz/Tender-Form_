import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Form, Upload } from "antd";


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

  // const [fileList, setFileList] = useState([]);

  // const handleChange = (info) => {
  //   let newFileList = [...info.fileList];
  //   console.log("info :", info);
  //   // Read from response and show file link
  //   newFileList = newFileList.map((file) => {
  //     if (file.response) {
  //       // Component will show file.url as link
  //       file.url = file.response.url;
  //     }
  //     return file;
  //   });
  //   setFileList(newFileList);
  //   console.log("File List: ", fileList);
  // };
  const props = {
    action: '/upload.do',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


  return (
    <div>
      <h3>eTenders Portal (ISM)</h3>
      <div className="details_div">
        <p className="bid_title">Bid Documents</p>

        <Form
          {...formItemLayout}
          form={form}
          name="Upload"
          onFinish={onFinish}
          labelWrap
          style={{
            maxWidth: 600,
            marginLeft: '40px'
          }}
          scrollToFirstError
        >
          <Form.Item
            name="PANCertificate"
            label="Permanent Account Number (PAN)"
            rules={[
              {
                required: true,
                message: "Please upload your PAN certificate",
              },
            ]}
            labelCol={{ span: "12", offset: "1" }}
          >
            <Upload name="PAN" {...props}>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="GSTIN"
            label="Goods and Services Tax (GST) Status of Bidder"
            rules={[
              {
                required: true,
                message: "Please upload your GSTIN certificate",
              },
            ]}
            labelCol={{ span: "13", offset: "0" }}
          >
            <Upload name="GSTIN" {...props} >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="SatisfactoryWork"
            label="Satisfactory work completion Certificate"
            rules={[
              {
                required: true,
                message:
                  "Please upload your Satisfactory work completion Certificate",
              },
            ]}
            labelCol={{ span: "12", offset: "1" }}
          >
            <Upload name="Satisfactory" {...props}>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default DetailsForm;

// import { UploadOutlined } from '@ant-design/icons';
// import { Button, Upload } from 'antd';
// import { useState } from 'react';
// const UploadForm = () => {
//   const [fileList, setFileList] = useState([
//     {
//       uid: '-1',
//       name: 'xxx.png',
//       status: 'done',
//       url: 'http://www.baidu.com/xxx.png',
//     },
//   ]);
//   const handleChange = (info) => {
//     console.log(info);
//     // let newFileList = [...info.fileList];
//     // // 1. Limit the number of uploaded files
//     // // Only to show two recent uploaded files, and old ones will be replaced by the new
//     // newFileList = newFileList.slice(-2);

//     // // 2. Read from response and show file link
//     // newFileList = newFileList.map((file) => {
//     //   if (file.response) {
//     //     // Component will show file.url as link
//     //     file.url = file.response.url;
//     //   }
//     //   return file;
//     // });
//     // setFileList(newFileList);
//     // console.log(newFileList);
//   };
//   const props = {
//     action: 'https://www.googleapis.com/upload/drive/v3/files?uploadType=media',
//     onSubmit: handleChange,
//   };
//   return (
//     <Upload {...props}>
//       <Button icon={<UploadOutlined />}>Upload</Button>
//     </Upload>
//   );
// };

// export default UploadForm;