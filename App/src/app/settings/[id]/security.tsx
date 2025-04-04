import { Card, Form, Input, Button } from "antd";
import { handleResetPassword } from "./handlepasswords";

export default function SettingsPageSecure() {
  return (
    <Card className="rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Security Settings</h2>
      
      {/* Use `onFinish` instead of manually validating fields */}
      <Form layout="vertical" autoComplete="off" className="space-y-4" onFinish={(values) => handleResetPassword(values)}>
        <Form.Item 
          label="Old Password" 
          name="oldPassword" 
          className="mb-4"
          rules={[{ required: true, message: "Please enter your old password" }]}
        >
          <Input.Password size="large" autoComplete="new-password" />
        </Form.Item>

        <Form.Item 
          label="New Password" 
          name="newPassword" 
          className="mb-4"
          rules={[{ required: true, message: "Please enter a new password" }]}
        >
          <Input.Password size="large" autoComplete="new-password" />
        </Form.Item>

        <Form.Item 
          label="Confirm New Password" 
          name="confirmNewPassword" 
          className="mb-4"
          rules={[
            { required: true, message: "Please confirm your new password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <Input.Password size="large" autoComplete="new-password" />
        </Form.Item>

        <Form.Item>
          <Button 
            type="primary" 
            size="large" 
            className="w-full mb-6"
            htmlType="submit"  // This makes the button trigger `onFinish`  // Call the function directly
          >
            Change Password
          </Button>
        </Form.Item>
      </Form>
      
      {/* Additional Security Options */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Advanced Settings</h3>
        <div className="space-y-4">
          <Button block size="large">Two-Factor Authentication</Button>
          <Button block size="large">Connected Devices</Button>
          <Button block size="large" danger>Delete Account</Button>
        </div>
      </div>
    </Card>
  );
}
