import {
    HiHome, HiQuestionMarkCircle
} from "react-icons/hi2";
import {
    FcSmartphoneTablet
} from "react-icons/fc";
import {
    GiPerfumeBottle
} from "react-icons/gi";
import {
    MdLocalGroceryStore
} from "react-icons/md";
import student from "../Pages/screens/student";
import Deatils from "../Pages/screens/Details";
import Login from "../Pages/Auth/Login";
import Fashion from "../Pages/screens/Fashion";
import GroceryProduct from "../Pages/screens/GroceryProdut";
import TotalProdut from "../Pages/screens/TotalProdut";

export interface IRoute {
    path: string;
    label: string;
    element: any;
    icon?: any;
    isSubmenu?: boolean;
    submenu?: IRoute[];
    rolesAllowed?: string[];
}

export const SHOPING_PATH = {
    questionBank: "/upload-question-bank",
};

export const ROUTES: {
    SHOPING_ROUTES: IRoute[];
} = {
    SHOPING_ROUTES: [
        {
            path: "/",
            label: "Home",
            element: Deatils,
            icon: HiHome,
            // rolesAllowed: ["Department"]
        },
        {
            path: "/Produt/Electronics",
            label: "Electronics Product",
            element: student,
            icon: FcSmartphoneTablet,
            // rolesAllowed: ["Department"]
        },
        {
            path: "/Produt/Fashion",
            label: "Fashion Product",
            // element: Fashion,
            element:TotalProdut,
            icon: GiPerfumeBottle,
            // rolesAllowed: ["Department"]
        },
        // {
        //     path: "/Produt/Groccery",
        //     label: "Groccery Product",
        //     element: GroceryProduct,
        //     icon: MdLocalGroceryStore,
        //     // rolesAllowed: ["Department"]
        // },

        /* QUESTION BANK */
        // {
        //     path: "",
        //     label: "Question Bank",
        //     element: "",
        //     icon: HiQuestionMarkCircle,
        //     rolesAllowed: ["Department"],
        //     isSubmenu: true,
        //     submenu: [
        //         {
        //             path: "/upload-question-bank",
        //             label: "Upload Question Bank",
        //             element: QuestionBank,
        //             icon: HiQuestionMarkCircle,
        //         },
        //         {
        //             path: "/question-bank",
        //             label: "Question Bank",
        //             element: QuestionBankIndex,
        //             icon: HiQuestionMarkCircle,
        //         },
        //     ]
        // },
        // {
        //     path: "/question-bank",
        //     label: "Question Bank",
        //     element: QuestionBank,
        //     icon: HiQuestionMarkCircle,
        //     rolesAllowed: ["Department"]
        // },
        // {
        //     path: "/upload-question-bank",
        //     label: "Upload Question Bank",
        //     element: QuestionBank,
        //     rolesAllowed: ["Department"]
        // },

        /* SCHEDULE PERIODIC ASSESSMENT */
        // {
        //     path: "/schedule-periodic-assessment",
        //     label: "Schedule Periodic Assessment",
        //     element: SchedulePeriodicAssessment,
        //     icon: AiOutlineSchedule,
        //     rolesAllowed: ["Department"]
        // },

        // /* TEACHER ALLOCATION FOR SCHOOL LOGIN */
        // {
        //     path: "/teacher-allocation",
        //     label: "Teacher Allocation",
        //     element: TeacherAllocationBySchoolIndex,
        //     icon: GiTeacher,
        //     rolesAllowed: ["School", "Department"]
        // },
    ]
}