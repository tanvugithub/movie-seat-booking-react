import { useRoutes } from "react-router-dom";
import { MainLayout } from "../components/layouts/mainLayout/MainLayout";

import { PATH } from "../constants";
import { SeatBooking } from "../pages/SeatBooking";

export const Router = () => {
    return useRoutes([
        {
            path: PATH.home,
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <SeatBooking />,
                },
            ],
        },
    ]);
};
