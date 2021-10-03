import React, { memo, useState} from "react";
import { useDispatch } from "react-redux";

import { setUserAuthorityAction } from "./store/actionCreators"
import { Form, Input, Button } from "antd";
import ResetPassword from "@/components/reset-password";

function SignIn( {signInCancel} ) {
    // 组件自己的状态
    const [resetVisiable, setResetVisible] = useState(false)

    // redux相关
    const dispatch = useDispatch()

    // 其他hooks

    //业务逻辑

    const onFinish = (values) => {
        dispatch(setUserAuthorityAction(values))
        signInCancel()
    };

    function resetCancel() {
        setResetVisible(false)
    }

    return (
        <div>
            <Form
                name='signIn'
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{
                        margin: '0 100px',
                    }}>
                        Submit
                    </Button>

                    <Button 
                        type="primary" 
                        style={{
                            margin: '0 50px',
                        }}
                        onClick={()=>{setResetVisible(!resetVisiable)}}
                    >
                        Froget
                    </Button>
                </Form.Item>
            </Form>
            <ResetPassword
                visible={resetVisiable}
                resetCancel={resetCancel}
            />
        </div>
    )

}

export default memo(SignIn)
