export const res: {
    isSuccess: boolean;
    data: any;
    error: any;
    message?: string;
} = {
    isSuccess: false,
    data: undefined,
    error: undefined
};

export interface IMasterData {
    id: number;
    name: string;
};
export interface CompetencyListIMasterData {
    id: number;
    text: string;
};

// DEPARTMENT LOGIN
export interface IDepartmentUserDetails {
    state_User_Id: 1,
    state_Id: 1
};

// SCHOOL LOGIN
export interface ITeacherAllocationDetails {
    assignedClass: string | null;
    assignedSection: string | null;
    teacher: string;
};

export interface IPeriodicAssessmentSchedules {
    assessment: string;
    endDate: string;
    id: number;
    startDate: string;
}

// ALL TEACHER LIST BY SCHOOL ID
export interface IAllTeacherListBySchoolId {
    class_Id: number,
    class_Name: string,
    designation: string,
    employee_Code: string,
    employee_Name: string,
    school_Teacher_Id: number
    section_Id: number,
    section_Name: string
    teacher_Class_Section_Id: number,
    teacher_Id: number,
}
export interface IProdutDetails{
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category:string,
    thumbnail: string,
    images: []
  }

  export interface IProdutUpload{
    title:string,
    category: string,
    description: string,
    rate: number | undefined,
    count: number| undefined,
    price: number |undefined,
  }

  export interface IProduct{
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category:string,
    thumbnail: string,
    image:string,
    images: []
  }
  export interface IFashion{
    id: number,
    title: string,
    price: number,
    description: string,
    category:string,
    image:string,
    rating:{
    rate:number,
    count:number
    }
  }

  export interface ICardDetails {
    id: number,
    products: [
      {
        id: number,
        title: string,
        price: number,
        quantity: number,
        total: number,
        discountPercentage: number,
        discountedPrice: number
      },
    ]
  }

  export interface IUserDetails {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email:string,
    phone: string,
    username?: string,
    password?:string,
    birthDate?:string,
    image: string,
    bloodGroup?: string,
    height?:number,
    weight?:number,
    eyeColor?:string,
    hair?: {
      color: string,
      type: string
    },
    domain?: string,
    ip?: string,
    address: {
      address:string,
      city: string,
      coordinates?: {
        lat:number
        lng:number
      },
      postalCode?:number
      state: string
    },
    macAddress?:string,
    university?:string,
    bank?: {
      cardExpire: string,
      cardNumber:string,
      cardType: string,
      currency:string,
      iban: string
    },
    company?: {
      address: {
        address:string,
        city: string,
        coordinates: {
          lat: number,
          lng: number
        },
        postalCode: string,
        state: string
      },
      department:string,
      name: string,
      title: string
    },
    ein?: string,
    ssn?: string,
    userAgent: string
  }