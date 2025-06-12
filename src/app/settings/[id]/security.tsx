"use client";

import { useState, useEffect } from "react";
import { Card, Form, Input, Button, message } from "antd";
import { useParams } from "next/navigation";
import { handleResetPassword } from "./handlepasswords"; // Adjust path as needed

export default function SettingsPageSecure() {
  const { id: uuid } = useParams(); // Assuming uuid is part of the route, e.g., /settings/[id]
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    const formData = new FormData();
    formData.append("uuid", uuid as string);
    formData.append("oldPassword", values.oldPassword);
    formData.append("newPassword", values.newPassword);

    const result = await handleResetPassword(formData);

    if (result) {
      message.success("Password changed successfully!");
      form.resetFields(); // Clear the form after success
    } else {
      message.error("Failed to change password. Please try again.");
    }
  };

  return (
    <Card className="rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Security Settings</h2>
      
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        className="space-y-4"
        onFinish={onFinish}
      >
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
          dependencies={["newPassword"]}
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
            htmlType="submit"
          >
            Change Password
          </Button>
        </Form.Item>
      </Form>
      
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