"use client";
import { useState } from 'react';
import { Modal, Input, Button, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function CreatePost() {
    const [visible, setVisible] = useState(false);
    const [postText, setPostText] = useState('');
    const [fileList, setFileList] = useState([]);

    const openModal = () => setVisible(true);
    const closeModal = () => setVisible(false);

    const handlePostSubmit = async () => {
        if (!postText && fileList.length === 0) {
            message.error('Please add some text or select at least one image.');
            return;
        }
        // Here, build your payload. For example, if using FormData:
        const formData = new FormData();
        formData.append('text', postText);
        fileList.forEach((file) => {
            formData.append('images', file.originFileObj);
        });

        // Make your API call to submit the post
        try {
            const res = await fetch('/api/posts', {
                method: 'POST',
                body: formData,
            });
            if (!res.ok) throw new Error('Post submission failed');
            message.success('Post added successfully!');
            // Clear fields and close modal
            setPostText('');
            setFileList([]);
            closeModal();
        } catch (error) {
            message.error(error.message);
        }
    };

    const uploadProps = {
        beforeUpload: file => {
            if (!file.type.startsWith('image/')) {
                message.error('Only image files are allowed!');
                return Upload.LIST_IGNORE;
            }
            return false; // Prevent automatic upload, we'll handle it on submit.
        },
        fileList,
        onChange: ({ fileList }) => setFileList(fileList),
        multiple: true,
    };

    return (
        <div className="p-4">
            <Button type="primary" onClick={openModal}>
                Create Post
            </Button>
            <Modal
                title="Create a New Post"
                open={visible}
                onCancel={closeModal}
                onOk={handlePostSubmit}
                okText="Post"
                cancelText="Cancel"
            >
                <Input.TextArea
                    rows={4}
                    placeholder="What's on your mind?"
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    className="mb-4"
                />
                <Upload {...uploadProps}>
                    <Button icon={<PlusOutlined />}>Upload Images</Button>
                </Upload>
            </Modal>
        </div>
    );
}
