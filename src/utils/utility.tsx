import { showNotification } from "@mantine/notifications";

// group by key
export const groupByKey = (array: any[], key: string) => {
  return array?.reduce((temp, obj) => {
    if (!obj[key]) return temp;
    const keyValue = obj[key];
    temp[keyValue] = (temp[keyValue] || []).concat(obj);
    return temp;
  }, {});
};

// Mantine toast
export const showToast = (data: {
  message: string;
  title?: string;
  type?: 'error' | 'success' | 'warning';
  time?: number;
  icon?: JSX.Element;
  className?: string;
  isLoading?: boolean;
  nonClosable?: boolean;
}) => {
  showNotification({
    title: data?.title,
    message: data?.message,
    color:
      data?.type === 'error'
        ? 'red'
        : data?.type === 'success'
          ? 'green'
          : data?.type === 'warning'
            ? 'yellow'
            : 'blue',
    autoClose: data?.time ? data?.time : 4000,
    icon: data?.icon,
    className: data?.className,
    loading: data?.isLoading,
    disallowClose: data?.nonClosable,
  });
};

// validators
export const hasSpecialChar = (str: string) => {
  // console.log(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?@()._]/g.test(str),str);
  return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?@()._]/g.test(str);
}
export const hasOnlyNumber = (str: string) => {
  return /^\d+$/g.test(str);
}
export const isValidPhone = (str: string) => {
  return str === '+' || /^\+\d+$/.test(str) || /^\d+$/.test(str);
}
export const hasOnlyChars = (str: string) => {
  return /^[a-zA-Z\s]+$/g.test(str);
}
export const isValidEmail = (str: string) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(str);
}

export const isValidAadhaar = (str: string) => {
  return /^[2-9]{1}[0-9]{11}$/g.test(str);
}

export const isValidURL = (url: string) => {
  let expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  let match = url.match(expression);
  console.log(match);
  if (match) return true;
  else return false
};