import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdDeleteForever } from "react-icons/md";

export const SelectedSeatList = (props) => {
    const { fullName, selectedSeats, totalPrice, handleDeleteSelected } = props;
    const { t } = useTranslation();

    return (
        <>
            <h2 className="block-title">{t("seatBooking.listSeatTitle")}</h2>
            <div className="info">
                <p className="info__name">
                    {t("seatBooking.fullName")}: {fullName}
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>{t("seatBooking.seatCode")}</th>
                            <th>{t("seatBooking.price")}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedSeats &&
                            selectedSeats.map((seat, index) => {
                                return (
                                    <tr key={seat.soGhe}>
                                        <td>{seat.soGhe}</td>
                                        <td>
                                            {new Intl.NumberFormat("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(seat.gia)}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    handleDeleteSelected(seat);
                                                }}
                                            >
                                                <MdDeleteForever />{" "}
                                                {t("seatBooking.cancel")}
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}

                        {selectedSeats.length === 0 ? (
                            <tr>
                                <td colSpan="3">Chưa chọn ghế</td>
                            </tr>
                        ) : (
                            <tr>
                                <td className="font-bold">
                                    {t("seatBooking.total")}
                                </td>
                                <td className="font-bold">
                                    {new Intl.NumberFormat("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    }).format(totalPrice)}
                                </td>
                                <td></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};
