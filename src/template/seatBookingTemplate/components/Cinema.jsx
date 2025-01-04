import { Tooltip } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

export const Cinema = (props) => {
    const {
        fullName,
        handleChangeName,
        seatsData,
        selectedSeats,
        handleSelected,
    } = props;

    const { t } = useTranslation();

    return (
        <>
            <div className="input-wrap flex items-center place-content-center gap-5">
                <div className="input-left flex justify-center items-center gap-2">
                    <input
                        type="text"
                        placeholder={t("seatBooking.fullName")}
                        value={fullName}
                        onChange={handleChangeName}
                    />
                </div>
            </div>

            <div className="cinema">
                <div className="screen" />
                <ul className="showCase w-[50%] xl:w-[35%]">
                    <li>
                        <span className="seat" /> <small>N/A</small>
                    </li>
                    <li>
                        <span className="seat selected" />{" "}
                        <small>{t("seatBooking.Selected")}</small>
                    </li>
                    <li>
                        <span className="seat occupied" />{" "}
                        <small>{t("seatBooking.Reserved")}</small>
                    </li>
                </ul>
                <div className="seats">
                    <div className="seat-row">
                        <span className="seat-number"></span>
                        <span className="seat-number">1</span>
                        <span className="seat-number">2</span>
                        <span className="seat-number">3</span>
                        <span className="seat-number">4</span>
                        <span className="seat-number">5</span>
                        <span className="seat-number">6</span>
                        <span className="seat-number">7</span>
                        <span className="seat-number">8</span>
                        <span className="seat-number">9</span>
                        <span className="seat-number">10</span>
                        <span className="seat-number">11</span>
                        <span className="seat-number">12</span>
                    </div>

                    {seatsData.map((row, index) => {
                        return (
                            <div className="seat-row" key={index}>
                                <span className="seat-row-name">
                                    {row.hang}
                                </span>
                                {row.danhSachGhe.map((seat, index) => {
                                    const isSelected = selectedSeats.some(
                                        (selectedSeat) =>
                                            selectedSeat.soGhe === seat.soGhe
                                    );

                                    // const index = state.selectedSeats.findIndex(
                                    //     (selectedSeat) => selectedSeat.soGhe === payload.soGhe
                                    // );

                                    return (
                                        <Tooltip
                                            title={seat.soGhe}
                                            color={"pink"}
                                            key={seat.soGhe}
                                        >
                                            <span
                                                //key={seat.soGhe}
                                                className={
                                                    `seat ` +
                                                    (isSelected &&
                                                        ` selected `) +
                                                    (seat.daDat && ` occupied `)
                                                }
                                                onClick={
                                                    seat.daDat
                                                        ? null
                                                        : () =>
                                                              handleSelected(
                                                                  seat
                                                              )
                                                }
                                            />
                                        </Tooltip>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
