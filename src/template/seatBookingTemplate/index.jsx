import React, { useEffect, useState } from "react";
import "./seatBookingTemplate.scss";
import seatsData from "./seatsData.json";
import { useDispatch, useSelector } from "react-redux";
import { seatBookingActions } from "../../store/seatBooking.slice";
import { SelectedSeatList } from "./components/SelectedSeatList";
import { Cinema } from "./components/Cinema";

export const SeatBookingTemplate = () => {
    //C1: state
    // const [selectedSeats, setSelectedSeats] = useState([]);
    // const handleSelected = (seat) => {

    //     const index = selectedSeats.findIndex(
    //         (selectedSeat) => selectedSeat.soGhe === seat.soGhe
    //     );

    //     if (index === -1) {
    //         setSelectedSeats([...selectedSeats, seat]);
    //     } else {
    //         setSelectedSeats(
    //             selectedSeats.filter(
    //                 (selectedSeat) => selectedSeat.soGhe !== seat.soGhe
    //             )
    //         );
    //     }
    // };

    //C2: redux
    const dispatch = useDispatch();

    const handleChangeName = (e) => {
        dispatch(seatBookingActions.setFullName(e.target.value));
    };

    const { fullName, selectedSeats } = useSelector(
        (state) => state.seatBookingReducer
    );

    const handleSelected = (seat) => {
        dispatch(
            seatBookingActions.setSelectedSeats({
                ...seat,
            })
        );
    };

    const handleDeleteSelected = (seat) => {
        dispatch(seatBookingActions.deleteSelectedSeats(seat));
    };

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (selectedSeats && selectedSeats.length > 0) {
            let sum = 0;
            selectedSeats.map((item) => {
                sum += item.gia;
            });
            setTotalPrice(sum);
        } else {
            setTotalPrice(0);
        }
    }, [selectedSeats]);

    return (
        <div className="seat-booking-template">
            <div className="container mx-auto py-7">
                <div className="grid lg:grid-cols-8 gap-10">
                    <div className="col-left lg:col-span-5 ">
                        <Cinema
                            fullName={fullName}
                            handleChangeName={handleChangeName}
                            seatsData={seatsData}
                            selectedSeats={selectedSeats}
                            handleSelected={handleSelected}
                        />
                    </div>
                    <div className="col-right lg:col-span-3">
                        <SelectedSeatList
                            fullName={fullName}
                            selectedSeats={selectedSeats}
                            totalPrice={totalPrice}
                            handleDeleteSelected={handleDeleteSelected}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
