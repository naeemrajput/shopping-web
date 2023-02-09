
export interface ILoginPayload {
    username: string;
    password: string;
};

export interface ITeacherToClassAllocation {
    school_Teacher_Id: number,
    class_Id: number,
    section_Id: number,
    created_By: number
}

export interface ITeacherToClassAllocationUpdate {
    class_Id: number,
    section_Id: number,
    created_By: number
}

export interface ILoginParams {
    userName: string;
    password: string;
};

export interface IQuestionDetails {
    text: string;
    url: string | undefined;
    typeOfURL: "Video" | "Image" | undefined;
};

export interface IQuestionOption {
    text: string;
    url: string | undefined;
    typeOfURL: "Video" | "Image" | undefined;
    id: number | undefined;
    isCorrectOption: boolean;
};

export interface IQuestionFilters {
    typeOfQuestionBank: number | undefined;
    assessmentSeq: number | undefined;
    questionType: number | undefined;
    week: number | undefined;
    // selectedMonth: "January" | "February" | "March" | "April" | "May" | undefined;
    selectedGrade: number | undefined;
    selectedSubject: number | undefined;
    selectedTopic: number | undefined;
    selectedCompetencyLevel: number | undefined;
};

export type TQuestionFilters = keyof IQuestionFilters;

/* Periodic Assessment Schedule */
export interface IPeriodicAssessmentScheduleParams {
    periodic_Assessment_Id: number;
    start_Date: string;
    end_Date: string;
    id?: number;
};

export interface IPeriodicAssessmentSchedulePayload {
    periodic_Assessment_Id: number;
    start_Date: string;
    end_Date: string;
    created_By: number;
};

/* QUESTION BANK */
export interface IQuestionUploadPayload {
    question_Instruction: string;
    question_Text: string;
    assessment_Type_Id: number;
    question_Type_Id: number;
    competancy_Id: number;
    week_Id: number;
    class_Id: number;
    subject_Id: number;
    created_By: number;
    questionOption: {
        option_Text: string;
        is_Correct: boolean;
    }[];
};

export interface IUser {
    email: string,
    firstName: string,
    gender:string,
    id: number,
    image:string,
    lastName:string,
    token: string,
    username: string
}


export interface SCategory {
    details?: string,
    flight_number: number,
    launch_year: number,
    launch_date_local: number,
    static_fire_date_utc: string,
    launch_date_utc: string,
    mission_name: string,
    launch_failure_details?: {
        reason: string,
        time: number
    },
    launch_site?: {
        site_id: number;
        site_name: string;
        site_name_long: string;
    },
    timeline?: {
        webcast_liftoff: number
        // engine_chill?: number;
        // fairing_deploy?: number;
        // first_stage_landing?: number;
        // propellant_pressurization?: number;
        // rp1_loading?: number;
        // second_stage_ignition?: number;
        // second_stage_restart?: number;
    },
    links?: {
        article_link: string;
        mission_patch: string;
        mission_patch_small: string;
        video_link: string,
        wikipedia: string
        flickr_images?: [

        ];
    },
    rocket: {
        rocket_id: string,
        rocket_name: string,
        rocket_type: string,
        fairings: {
            recovered: boolean,
            reovery_attempt: boolean,
            reused: boolean
        },
    },
}
