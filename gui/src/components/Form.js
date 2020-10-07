import React from 'react';
import { Form, Input, Button } from 'antd';

const CustomForm = () => {
    
    function  handleFormSubmit(event) {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        console.log(title, content);
    }

    return (
        <>
        <Form onSubmit={handleFormSubmit}>
            <Form.Item label="Title">
            <Input name="title" placeholder="Put title here" />
            </Form.Item>
            <Form.Item label="Content">
            <Input name="content" placeholder="Put Content here..." />
            </Form.Item>
            <Form.Item >
            <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
        </>
    );
    };

export default CustomForm;