import React, { useState } from "react";
import "./header.scss";
import viFlag from "../../../../assets/svg/language/vi.svg";
import enFlag from "../../../../assets/svg/language/en.svg";

import { useTranslation } from "react-i18next";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

export const Header = () => {
    const { t, i18n } = useTranslation();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const renderFlag = (language) => {
        return (
            <img
                style={{ height: 20, width: 20 }}
                src={language === "en" ? enFlag : viFlag}
                alt={language}
            />
        );
    };

    const items = [
        {
            label: (
                <div
                    className="dropdown-item flex gap-2 items-center"
                    style={{ cursor: "pointer" }}
                    onClick={() => i18n.changeLanguage("en")}
                >
                    <img
                        style={{ height: 20, width: 20 }}
                        src={enFlag}
                        alt="english"
                    />
                    <span>English</span>
                </div>
            ),
            key: "0",
        },
        {
            label: (
                <div
                    className="dropdown-item flex gap-2 items-center"
                    style={{ cursor: "pointer" }}
                    onClick={() => i18n.changeLanguage("vi")}
                >
                    <img
                        style={{ height: 20, width: 20 }}
                        src={viFlag}
                        alt="vietnamese"
                    />
                    <span>Tiếng Việt</span>
                </div>
            ),
            key: "1",
        },
    ];

    return (
        <div className="header">
            <div className="container mx-auto">
                <div className="flex justify-between items-center ">
                    <div className="logo text-white text-2xl font-bold uppercase">
                        {t("seatBooking.brand")}
                    </div>

                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={["click"]}
                        className="cursor-pointer"
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                {renderFlag(i18n.resolvedLanguage)}
                                {/* <DownOutlined /> */}
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};
