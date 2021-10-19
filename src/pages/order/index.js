import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Table } from 'antd';

import { OrderWrapper } from "./style";
import { getOrderInfoAction } from "./store/actionCreators"

function Order() {
    const dispatch = useDispatch()
    const { token, orderInfo } = useSelector(state => ({
        token: state.User.UserIDInfo.token,
        orderInfo: state.Order.orderInfo.bought,
    }), shallowEqual)

    useEffect(() => {
        dispatch(getOrderInfoAction(token))
    }, [dispatch, token])

    const columns = [
        {
            title: 'PaidTime',
            dataIndex: 'paidTime',
            key: 'padiTime',
            width: 1,
            render: paidTime => {
                const index = paidTime.indexOf('.')
                return paidTime.slice(0, index)
            }
        },
        {
            title: 'Price',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
            width: 1,
        },
        {
            title: 'Payer',
            dataIndex: 'payer',
            key: 'payer',
            width: 1,
        },
        {
            title: 'Buyer',
            dataIndex: 'buyer',
            key: 'buyer',
            width: 1,
        },
        {
            title: 'Address',
            dataIndex: 'shippingAddress',
            key: 'shippingAddress',
            width: 1,
        },
        {
            title: 'Products',
            dataIndex: 'products',
            key: 'products',
            width: 1,
            render: products => (
                <div>
                    {products.map((item, index) => {
                        return <pre key={index}> {item.product.name}{`($${item.product.price})`} * {item.amount} </pre>
                    })}
                </div>
            )
        }
    ]

    return (
        <OrderWrapper>
            <div className='main'>
                <Table
                    columns={columns}
                    dataSource={orderInfo}
                />
            </div>
        </OrderWrapper>
    )
}

export default memo(Order)
